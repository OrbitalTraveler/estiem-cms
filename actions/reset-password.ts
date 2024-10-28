"use server";

import * as z from "zod";

// TODO: Create ResetSchema take a look at index.ts under schemas folder
// ResetScheam should have an email field validation only
// TODO: Create sendPasswordResetEmail function take a look at mail.ts under lib folder
// Take a look at the mail.ts file to see an example of how to create a function that sends an email
// for the password reset, dont bother making email templates. Just send the token in the email
import { ResetPasswordSchema } from "@/schemas";
import { getUserByEmail } from "@/data/user";
import { sendPasswordResetEmail } from "@/lib/mail";
import { generatePasswordToken } from "@/lib/tokens";

export const reset = async (
  values: z.infer<typeof ResetPasswordSchema>
) => {
  const validatedFields = ResetPasswordSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid emaiL!" };
  }

  const { email } = validatedFields.data;

  const existingUser = await getUserByEmail(email);

  if (!existingUser) {
    return { error: "Email not found!" };
  }

  const passwordResetToken = await generatePasswordToken(email);
  if (passwordResetToken.userEmail) {
    await sendPasswordResetEmail(
      passwordResetToken.userEmail,
      passwordResetToken.token
    );
  } else {
    return { error: "Email not found!" };
  }

  return { success: "Reset email sent!" };
};

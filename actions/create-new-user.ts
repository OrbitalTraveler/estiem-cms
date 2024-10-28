"use server";

import * as z from "zod";
import { CreateUserSchema } from "@/schemas";
import { db } from "@/lib/db";
import { getUserByEmail } from "@/data/user";
import { generatePasswordToken } from "@/lib/tokens";
import { sendFirstLoginMail } from "@/lib/mail";
import { TokenType } from "@prisma/client";

export const createUserAction = async (
  values: z.infer<typeof CreateUserSchema>
) => {
  const validatedFields = CreateUserSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields" };
  }

  const { firstName, lastName, email, role } = validatedFields.data;

  // Check if user already exists
  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    if (existingUser.isVerified) {
      // User exists and is verified
      return {
        error: "User with the following email already exists",
      };
    } else {
      // User exists but is not verified, resend verification email
      const verificationToken = await generatePasswordToken(
        email,
        TokenType.EMAIL_VERIFICATION
      );

      if (verificationToken.userEmail) {
        await sendFirstLoginMail(
          verificationToken.userEmail,
          verificationToken.token
        );
        return {
          success: "Verification email resent to unverified user.",
        };
      } else {
        return { error: "Failed to resend verification email!" };
      }
    }
  }

  // If user doesn't exist, create a new one and send verification email
  await db.user.create({
    data: {
      firstName,
      lastName,
      email,
      role,
    },
  });

  const verificationToken = await generatePasswordToken(
    email,
    TokenType.EMAIL_VERIFICATION
  );

  if (verificationToken.userEmail) {
    await sendFirstLoginMail(
      verificationToken.userEmail,
      verificationToken.token
    );
  } else {
    return { error: "Failed to create user!" };
  }

  return { success: "New user created and verification email sent!" };
};

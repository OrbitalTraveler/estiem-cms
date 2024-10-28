import { db } from "./db";
import { v4 as uuidv4 } from "uuid";
import { getPasswordResetTokenByEmail } from "@/data/password-reset-token";
import { TokenType } from "@prisma/client";

export const generatePasswordToken = async (
  email: string,
  type: TokenType
) => {
  const token = uuidv4();
  // Token expires in 15 minutes for password reset, 1 day for email verification
  const expires = new Date(
    new Date().getTime() +
      (type === TokenType.EMAIL_VERIFICATION ? 86400000 : 900000)
  );
  const existingToken = await getPasswordResetTokenByEmail(email);

  if (existingToken) {
    await db.passwordToken.delete({
      where: {
        id: existingToken.id,
      },
    });
  }

  const passwordResetToken = await db.passwordToken.create({
    data: {
      userEmail: email,
      token,
      expires,
      type,
    },
  });

  return passwordResetToken;
};

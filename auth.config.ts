import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { SignInSchema } from "./schemas";
import { getUserByEmail } from "./data/user";
import bcrypt from "bcryptjs";

export default {
  providers: [
    Credentials({
      async authorize(credentials) {
        const validatedFields = SignInSchema.safeParse(credentials);

        if (!validatedFields.success) return null;

        const { email, password } = validatedFields.data;

        const user = await getUserByEmail(email);
        if (!user || !user.password) return null;

        const passwordMatch = await bcrypt.compare(
          password,
          user.password
        );

        if (passwordMatch) return user;

        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;

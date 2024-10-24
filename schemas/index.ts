import * as z from "zod";
import { UserRole } from "@prisma/client";

export const LoginSchema = z.object({
  email: z
    .string()
    .email("Unesite ispravnu email adresu")
    .refine((email) => email.endsWith("@estiem.org"), {
      message:
        "Prijavljivanje je dozvoljeno samo putem estiem.org emaila",
    }),
  password: z.string().min(8, {
    message: "Lozinka mora imati najmanje 8 karaktera",
  }),
});

export const ResetPasswordSchema = z.object({
  email: z
    .string()
    .email("Unesite ispravnu email adresu")
    .refine((email) => email.endsWith("@estiem.org"), {
      message:
        "Resetovanje lozinke je dozvoljeno samo putem estiem.org emaila",
    }),
});

export const NewPasswordSchema = z.object({
  password: z
    .string()
    .min(8, {
      message: "Lozinka mora imati najmanje 8 karaktera",
    })
    .refine((password) => /[A-Z]/.test(password), {
      message: "Lozinka mora sadržati bar jedno veliko slovo",
    })
    .refine((password) => /[a-z]/.test(password), {
      message: "Lozinka mora sadržati bar jedno malo slovo",
    })
    .refine((password) => /[0-9]/.test(password), {
      message: "Lozinka mora sadržati bar jedan broj",
    })
    .refine(
      (password) =>
        /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(password),
      {
        message:
          "Lozinka mora sadržati bar jedan specijalni karakter",
      }
    ),
});

export const NewUserSchema = z.object({
  firstName: z.string().min(2, {
    message: "Ime mora imati najmanje 2 karaktera",
  }),
  lastName: z.string().min(2, {
    message: "Prezime mora imati najmanje 2 karaktera",
  }),
  email: z
    .string()
    .email("Unesite ispravnu email adresu")
    .refine((email) => email.endsWith("@estiem.org"), {
      message:
        "Registracija novog korisnika je dozvoljena samo putem estiem.org emaila",
    }),
  role: z.enum([UserRole.MEMBER, UserRole.LEADER, UserRole.ADMIN]),
});

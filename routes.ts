export const protectedRoutes = ["/"]; // later add all pages routes e.g "/create-post" & "[user_id]/settings"

export const publicRoutes = [];

export const authRoutes = [
  "/auth/sign-in",
  "/auth/error",
  "/auth/reset-password",
  "/auth/new-password",
];

export const apiAuthPrefix = "/api/auth";

export const DEFAULT_LOGIN_REDIRECT = "/";

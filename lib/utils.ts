import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import bcrypt from "bcryptjs";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function hashAndSaltPassword(password: string): string {
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(password, salt);
}

export function generatePassword(): string {
  const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
  const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const specialChars = "!@#$%^&*()_+[]{}|;:,.<>?";

  // Ensure the password has at least one lowercase, uppercase, number, and special character
  const getRandomChar = (chars: string) =>
    chars[Math.floor(Math.random() * chars.length)];

  const password = [
    getRandomChar(lowerCaseChars),
    getRandomChar(upperCaseChars),
    getRandomChar(numbers),
    getRandomChar(specialChars),
  ];

  const allChars =
    lowerCaseChars + upperCaseChars + numbers + specialChars;
  for (let i = password.length; i < 8; i++) {
    password.push(getRandomChar(allChars));
  }

  return password.sort(() => Math.random() - 0.5).join("");
}

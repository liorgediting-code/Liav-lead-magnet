import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/** Error message shown when an Israeli mobile number fails validation. */
export const PHONE_ERROR = "מספר הטלפון חייב להתחיל ב-05 ולהכיל 10 ספרות";

/**
 * Validates an Israeli mobile number: exactly 10 digits, starting with 05.
 * Dashes/spaces the user typed are ignored before checking.
 */
export function isValidIsraeliPhone(phone: string): boolean {
  const digits = phone.replace(/\D/g, "");
  return /^05\d{8}$/.test(digits);
}

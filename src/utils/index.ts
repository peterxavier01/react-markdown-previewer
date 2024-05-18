import { twMerge } from "tailwind-merge";
import { clsx, ClassValue } from "clsx";
import { format } from "date-fns";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(...inputs));
}

export function truncateText(text: string, wordLength: number): string {
  if (text.length > wordLength) {
    text = text.substring(0, wordLength) + "...";
  }

  return text;
}

export function formatDate(dateValue: Date) {
  return format(dateValue, "PPp");
}

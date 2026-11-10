import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const FREE_SHIPPING_ABOVE = 5000;
export const SHIPPING_FEE = 500;

/** The one shipping rule, shared by the cart drawer, cart page and checkout. */
export function calculateShipping(subtotal: number) {
  if (subtotal <= 0) return 0;
  return subtotal > FREE_SHIPPING_ABOVE ? 0 : SHIPPING_FEE;
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

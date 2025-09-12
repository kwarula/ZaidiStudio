import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export const trackPixelEvent = (eventName, data) => {
  if (window.fbq) {
    window.fbq('track', eventName, data);
  }
};

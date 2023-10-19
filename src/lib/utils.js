import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function acn(...inputs) {
  return twMerge(clsx(inputs))
}

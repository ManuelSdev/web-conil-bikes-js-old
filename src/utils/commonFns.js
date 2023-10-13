import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs) {
   return twMerge(clsx(inputs))
}

export const pipe =
   (...fns) =>
   (arg) =>
      fns.reduce((acc, fn) => fn(acc), arg)

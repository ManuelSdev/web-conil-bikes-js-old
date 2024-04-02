import { format } from 'date-fns'
import {
   BIKE_RANGES_MAP,
   BIKE_TYPES_MAP,
   BOOKING_STATES_MAP,
} from './appValues'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'
//Primera letra en mayúscula
export const capitalizeFirst = (text) =>
   text.charAt(0).toUpperCase() + text.slice(1)

export const pipe =
   (...fns) =>
   (arg) =>
      fns.reduce((acc, fn) => fn(acc), arg)

export const mappedBookingState = (state) =>
   BOOKING_STATES_MAP[state]?.charAt(0).toUpperCase() +
   BOOKING_STATES_MAP[state]?.slice(1)

export const mappedBikeType = (type) =>
   BIKE_TYPES_MAP[type]?.charAt(0).toUpperCase() +
   BIKE_TYPES_MAP[type]?.slice(1)

export const mappedBikeRange = (range) =>
   BIKE_RANGES_MAP[range]?.charAt(0).toUpperCase() +
   BIKE_RANGES_MAP[range]?.slice(1)

export const simpleFormatFromToDate = (from, to) => {
   //console.log(from)
   return {
      formatedFrom: format(new Date(from), 'dd/MM/yyyy'),
      formatedTo: format(new Date(to), 'dd/MM/yyyy'),
   }
}

export function cn(...inputs) {
   return twMerge(clsx(inputs))
}

export const urlParams = (obj) => new URLSearchParams(obj)
/**
 * Crea contraseña aleatoria
 */
export function generatePassword() {
   let letters = 'abcdefghijklmnopqrstuvwxyz'
   let numbers = '0123456789'
   let password = ''

   for (let i = 0; i < 4; i++) {
      password += letters.charAt(Math.floor(Math.random() * letters.length))
   }

   for (let i = 0; i < 4; i++) {
      password += numbers.charAt(Math.floor(Math.random() * numbers.length))
   }

   return password
}

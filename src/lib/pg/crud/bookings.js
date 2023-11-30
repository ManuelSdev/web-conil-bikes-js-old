import 'server-only'

import { cache } from 'react'
import { NextResponse } from 'next/server'

import {
   addBooking,
   findBookingDatesInRange,
   findBookingOnDate,
   findBookingBikesById,
   findBookingById,
} from '../repos/booking'

export async function getBookingDatesInRange(dateRange) {
   const bookings = await findBookingDatesInRange(dateRange)
   return NextResponse.json(bookings, { status: 201 })
}

export async function getBookingOnDate(dateRange) {
   const bookingDates = await findBookingOnDate(dateRange)
   return NextResponse.json(bookingDates, { status: 201 })
}

export async function getBookingById(bookingId) {
   const bookings = await findBookingById(bookingId)
   return NextResponse.json(bookings, { status: 201 })
}

export async function getBookingBikesById(bookingId) {
   const bookingBikes = await findBookingBikesById(bookingId)
   return NextResponse.json(bookingBikes, { status: 201 })
}

export async function getBookingWithBikesById(bookingId) {
   const booking = await findBookingById(bookingId)
   const bookingBikes = await findBookingBikesById(bookingId)
   return NextResponse.json(
      { bookingData: booking, bookingBikes },
      { status: 201 }
   )
}

export async function createBooking({
   bikes,
   userId,
   isAdmin,
   dateRange,
   address,
   price,
   email,
   delivery,
   pickup,
   duration,
}) {
   console.log('params en createBooking -> ', {
      bikes,
      userId,
      isAdmin,
      dateRange,
      address,
      price,
      email,
      delivery,
      pickup,
      duration,
   })
   try {
      //  const db = client()
      console.log('@@ CRUD FN createBooking @@')
      const createdBookingId = await addBooking({
         bikes,
         userId,
         isAdmin,
         dateRange,
         address,
         price,
         email,
         delivery,
         pickup,
         duration,
      })
      console.log('createdBookingId en createBooking-> ', createdBookingId)
      return NextResponse.json(createdBookingId, { status: 201 })
   } catch (error) {
      console.log('### ERROR CRUD api/createBooking -> ', error)
   }
}

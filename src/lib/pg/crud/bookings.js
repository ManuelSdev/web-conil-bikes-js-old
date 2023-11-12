import 'server-only'

import { cache } from 'react'
import { NextResponse } from 'next/server'

import { addBooking } from '../repos/booking'

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

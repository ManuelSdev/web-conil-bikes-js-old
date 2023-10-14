import 'server-only'

import { NextResponse } from 'next/server'
import { client } from '@/lib/pg-promise/db'
//import { bookings } from '@/lib/pg-promise/sql'
export async function getBookingDatesInRange(dateRange) {
   try {
      const db = client()
      console.log(
         '///////////////////********************** TRYddd *****************//////////////////'
      )
      const dates = await db.bookings.findBookingDatesOnRange(dateRange)
      /*
      const bookingDatesObj = await db.one(bookings.findBookingDatesOnRange(), {
         user_id: 2,
      })
      */
      console.log('res en SERVER ****************-> ', dates)
      console.log(
         '@@@ CRUD api/getBookingDatesInRange RES bookingDatesObj -> ',
         dates
      )
      dates.startdates ??= []
      dates.enddates ??= []
      dates.startenddates ??= []
      const {
         startdates: startDates,
         enddates: endDates,
         startenddates: startEndDates,
      } = dates
      const bookingDates = { startDates, endDates, startEndDates }
      //const data = await res.json()
      //  console.log('data en SERVER ****************-> ', data)
      // console.log('date -> ', data)
      // return Response.status(201).json({ bookingDatesObj })
      return NextResponse.json({ bookingDates }, { status: 201 })
   } catch (error) {
      console.log('### ERROR CRUD api/getBookingDatesInRange -> ', error)
   }
}

export async function getBookingOnDate(date) {
   try {
      const db = client()
      console.log(
         '///////////////////********************** TRYddd *****************//////////////////'
      )

      const bookings = await db.bookings.findBookingOnDate(date)
      /*
      const bookingDatesObj = await db.one(bookings.findBookingDatesOnRange(), {
         user_id: 2,
      })
      */
      console.log('res en SERVER **************** bookings   -> ', bookings)
      console.log(
         '@@@ CRUD api/getBookingDatesInRange RES bookingDatesObj -> ',
         bookings
      )

      //const data = await res.json()
      //  console.log('data en SERVER ****************-> ', data)
      // console.log('date -> ', data)
      // return Response.status(201).json({ bookingDatesObj })
      return NextResponse.json({ bookings }, { status: 201 })
   } catch (error) {
      console.log('### ERROR db.bookings.findBookingOnDate(date) -> ', error)
   }
}

export async function getBookingById(id) {
   try {
      const db = client()
      console.log(
         '///////////////////********************** TRYddd *****************//////////////////'
      )

      const bookings = await db.bookings.findBookingById(id)
      /*
      const bookingDatesObj = await db.one(bookings.findBookingDatesOnRange(), {
         user_id: 2,
      })
      */
      console.log(
         'res en SERVER **************** getBookingById   -> ',
         bookings
      )

      //const data = await res.json()
      //  console.log('data en SERVER ****************-> ', data)
      // console.log('date -> ', data)
      // return Response.status(201).json({ bookingDatesObj })
      return NextResponse.json({ bookings }, { status: 201 })
   } catch (error) {
      console.log('### ERROR db.bookings.getBookingById(id) -> ', error)
   }
}

import 'server-only'

import { NextResponse } from 'next/server'
import { client } from '@/lib/pg-promise/db'
//import { bookings } from '@/lib/pg-promise/sql'
export async function getBookingDatesInRange(dateRange) {
   try {
      const db = client()
      //console.log('@@ CRUD FN getBookingDatesInRange @@')
      const bookingDates = await db.bookings.findBookingDatesInRange(dateRange)
      /*
      const bookingDatesObj = await db.one(bookings.findBookingDatesInRange(), {
         user_id: 2,
      })
      */
      ////console.log('res en SERVER ****************-> ', bookingDates)
      //console.log('@@@ CRUD api/getBookingDatesInRange RES bookingDatesObj -> ', dates)
      /*
      dates.startdates ??= []
      dates.enddates ??= []
      dates.startenddates ??= []
      const {
         startdates: startDates,
         enddates: endDates,
         startenddates: startEndDates,
      } = dates
      const bookingDates = { startDates, endDates, startEndDates }
      */
      //const data = await res.json()
      // //console.log('data en SERVER ****************-> ', data)
      ////console.log('date -> ', data)
      // return Response.status(201).json({ bookingDatesObj })
      return NextResponse.json({ bookingDates }, { status: 201 })
   } catch (error) {
      //console.log('### ERROR CRUD api/getBookingDatesInRange -> ', error)
   }
}

export async function getBookingOnDate(date) {
   try {
      const db = client()
      ////console.log('///***** TRYddd ****///')

      const bookings = await db.bookings.findBookingOnDate(date)
      /*
      const bookingDatesObj = await db.one(bookings.findBookingDatesInRange(), {
         user_id: 2,
      })
      */
      ////console.log('res en SERVER **************** bookings   -> ', bookings)
      //console.log('api/getBookingDatesInRange RES -> ', bookings)

      //const data = await res.json()
      // //console.log('data en SERVER ****************-> ', data)
      ////console.log('date -> ', data)
      // return Response.status(201).json({ bookingDatesObj })
      return NextResponse.json({ bookings }, { status: 201 })
   } catch (error) {
      //console.log('### ERROR db.bookings.findBookingOnDate(date) -> ', error)
   }
}

export async function getBookingById(bookingId) {
   try {
      const db = client()
      //console.log('@@ CRUD FN getBookingById @@')

      const booking = await db.bookings.findBookingById(bookingId)
      booking.dateRange = JSON.parse(booking.dateRange)
      /*
      const bookingDatesObj = await db.one(bookings.findBookingDatesInRange(), {
         user_id: 2,
      })
      */

      //const data = await res.json()
      // //console.log('data en SERVER ****************-> ', data)
      ////console.log('date -> ', data)
      // return Response.status(201).json({ bookingDatesObj })
      return NextResponse.json(booking, { status: 201 })
   } catch (error) {
      //console.log('### ERROR db.bookings.getBookingById(bookingId) -> ', error)
   }
}
export async function getBookingBikes(bookingId) {
   try {
      const db = client()
      //console.log('@@ CRUD FN getBookingBikes @@')

      const booking = await db.bookings.findBookingBikesById(bookingId)
      booking.dateRange = JSON.parse(booking.dateRange)

      //console.log('res en SERVER  getBookingBikes   -> ', booking)

      return NextResponse.json(booking, { status: 201 })
   } catch (error) {
      //console.log('### ERROR db.bookings.getBookingBikes(bookingId) -> ', error)
   }
}
export async function getBookingWithBikesById(bookingId) {
   try {
      // //console.log('== CREA CLIENTE EN getBookingWithBikesById')
      const db = client()
      //console.log('@@ CRUD FN getBookingWithBikesById @@')

      //console.log('== CLIENTE CREADO EN  getBookingWithBikesById --> AWAIT findBookingWithBikesById')
      const { bookingData, bikes } =
         await db.bookings.findBookingWithBikesById(bookingId)
      bookingData.dateRange = JSON.parse(bookingData.dateRange)

      // //console.log(' res en SERVER  getBookingBikes   -> ', booking)

      return NextResponse.json({ bookingData, bikes }, { status: 201 })
   } catch (error) {
      console.log(
         '### ERROR db.bookings.getBookingWithBikesById(bookingId) -> ',
         error
      )
   }
}

export async function getBookingPageData({ dateRange, date }) {
   try {
      // //console.log('== CREA CLIENTE EN getBookingWithBikesById')
      const db = client()
      //console.log('== CLIENTE CREADO EN  getBookingWithBikesById --> AWAIT findBookingWithBikesById')
      const { bookingDates, bookings } = await db.bookings.findBookingPageData({
         dateRange,
         date,
      })
      //   booking.dateRange = JSON.parse(booking.dateRange)

      //  //console.log(' res en SERVER  getBookingBikes   -> ', bookingDates)

      return NextResponse.json({ bookingDates, bookings }, { status: 201 })
   } catch (error) {
      console.log(
         '### ERROR db.bookings.getBookingWithBikesById(bookingId) -> ',
         error
      )
   }
}

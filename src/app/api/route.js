import { client } from '@/lib/pg-promise/db'
import { bookings } from '@/lib/pg-promise/sql'
import { NextResponse } from 'next/server'

export async function GET(req, res) {
   //console.log(     '=================== GET BOOKING DATES antes de client() ++++++++++++++++++++'   )
   const db = client()
   //console.log(      '=================== GET BOOKING DATES despues de client() -------------------'   )

   const { searchParams } = new URL(req.url)
   // const from = searchParams.get('from')
   //const to = searchParams.get('to')
   const dateRange = searchParams.get('dateRange')

   //  '[2023-10-04T22:00:00.000Z,2023-10-31T22:59:59.999Z]'
   try {
      console.log(
         '///////////////////********************** TRY *****************//////////////////'
      )
      //   await db.bookings.findBookingDatesOnRange(dateRange)
      const bookingDatesObj = await db.one(bookings.findBookingDatesOnRange(), {
         user_id: 2,
      })
      console.log('res en SERVER ****************-> ', bookingDatesObj)

      //const data = await res.json()
      //  console.log('data en SERVER ****************-> ', data)
      // console.log('date -> ', data)
      // return Response.status(201).json({ bookingDatesObj })
      return NextResponse.json({ bookingDatesObj }, { status: 201 })
   } catch (error) {
      console.log('test api error -> ', error)
   }
}

//          \$[\d]+|\$\[([\d\w]+)\]

import { getBookingDatesInRange } from '@/lib/pg-promise/crud/bookings'
import { client } from '@/lib/pg-promise/db'
import { bookings } from '@/lib/pg-promise/sql'
import { NextResponse } from 'next/server'

export async function GET(req) {
   //console.log(     '=================== GET BOOKING DATES antes de client() ++++++++++++++++++++'   )
   //console.log(      '=================== GET BOOKING DATES despues de client() -------------------'   )

   const { searchParams } = new URL(req.url)
   // const from = searchParams.get('from')
   //const to = searchParams.get('to')
   const dateRange = searchParams.get('dateRange')

   //  '[2023-10-04T22:00:00.000Z,2023-10-31T22:59:59.999Z]'
   return await getBookingDatesInRange(dateRange)
}

//          \$[\d]+|\$\[([\d\w]+)\]

import { getAppBikesConfig } from '@/lib/pg-promise/crud/bikes'
import { getBookingDatesInRange } from '@/lib/pg-promise/crud/bookings'
import { client } from '@/lib/pg-promise/db'
import { bookings } from '@/lib/pg-promise/sql'
import { NextResponse } from 'next/server'

export async function GET(req) {
   return await getAppBikesConfig()
}

//          \$[\d]+|\$\[([\d\w]+)\]

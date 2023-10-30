import 'server-only'

import { NextResponse } from 'next/server'
import { client } from '@/lib/pg-promise/db'
//import { bookings } from '@/lib/pg-promise/sql'
export async function getAvaiableBikeSizesOnRange(dateRange) {
   try {
      const db = client()
      console.log(
         '///////////////////********************** TRYddd *****************//////////////////'
      )
      const avaiableBikeSizes =
         await db.bikes.findAvaiableBikeSizesOnRange(dateRange)

      return NextResponse.json({ avaiableBikeSizes }, { status: 201 })
   } catch (error) {
      console.log('### ERROR CRUD api/getAvaiableBikeSizesOnRange -> ', error)
   }
}

import 'server-only'

import { NextResponse } from 'next/server'
//import { client } from '@/lib/pg-promise/db'
import db from '@/lib/pg-promise/db'

//import { bookings } from '@/lib/pg-promise/sql'
console.log(
   '######### CLIENT importado en api/bikes/available/[dateRange]/route.js'
)
export async function getAvailableBikeSizesInRange(dateRange) {
   try {
      //  const db = client()
      console.log('@@ CRUD FN getAvailableBikeSizesInRange @@')
      const availableBikeSizes =
         await db.bikes.findAvailableBikeSizesInRange(dateRange)

      return NextResponse.json({ availableBikeSizes }, { status: 201 })
   } catch (error) {
      console.log('### ERROR CRUD api/getAvailableBikeSizesInRange -> ', error)
   }
}

export async function getAvailableBikeTypes({ dateRange, size }) {
   try {
      //   const db = client()
      console.log('@@ CRUD FN getAvailableBikeTypes @@')
      const availableBikeTypes = await db.bikes.findAvailableBikeTypes({
         dateRange,
         size,
      })

      return NextResponse.json({ availableBikeTypes }, { status: 201 })
   } catch (error) {
      console.log('### ERROR CRUD api/getAvailableBikeTypes -> ', error)
   }
}

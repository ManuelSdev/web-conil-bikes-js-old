import 'server-only'

import { NextResponse } from 'next/server'
//import { client } from '@/lib/pg-promise/db'
import db from '@/lib/pg-promise/db'

//import { bookings } from '@/lib/pg-promise/sql'
console.log(
   '######### CLIENT importado en api/bikes/available/[dateRange]/route.js'
)
export async function getAvailableSizesInRange(dateRange) {
   try {
      //  const db = client()
      console.log('@@ CRUD FN getAvailableSizesInRange @@')
      const availableSizes = await db.bikes.findAvailableSizesInRange(dateRange)

      return NextResponse.json(availableSizes, { status: 201 })
   } catch (error) {
      console.log('### ERROR CRUD api/getAvailableSizesInRange -> ', error)
   }
}

export async function getAvailableTypes({ dateRange, size }) {
   try {
      //   const db = client()
      console.log('@@ CRUD FN getAvailableTypes @@')
      const availableTypes = await db.bikes.findAvailableTypes({
         dateRange,
         size,
      })
      console.log('availableTypes en getAvailableTypes-> ', availableTypes)
      return NextResponse.json(availableTypes, { status: 201 })
   } catch (error) {
      console.log('### ERROR CRUD api/getAvailableTypes -> ', error)
   }
}

export async function getAvailableRanges({ dateRange, size, type }) {
   try {
      //   const db = client()
      console.log('@@ CRUD FN getAvailableRanges @@')
      const availableRanges = await db.bikes.findAvailableRanges({
         dateRange,
         size,
         type,
      })
      console.log('availableTypes en getAvailableRanges-> ', availableRanges)
      return NextResponse.json(availableRanges, { status: 201 })
   } catch (error) {
      console.log('### ERROR CRUD api/getAvailableRanges -> ', error)
   }
}

export async function getAppBikesConfig() {
   try {
      //   const db = client()
      console.log('@@ CRUD FN findAppBikesConfig @@')
      const params = await db.bikes.findAppBikesConfig()
      console.log('availableTypes en findAppBikesConfig-> ', params)
      return NextResponse.json(params, { status: 201 })
   } catch (error) {
      console.log('### ERROR CRUD api/getAppBikesConfig -> ', error)
   }
}

import 'server-only'

import { NextResponse } from 'next/server'
//import { client } from '@/lib/pg-promise/db'
import db from '@/lib/pg-promise/db'

//import { bookings } from '@/lib/pg-promise/sql'
console.log(
   '######### CLIENT importado en api/bikes/available/[dateRange]/route.js'
)
export async function getAvailableSizesInRange(dateRange) {
  //console.log('dateRange en getAvailableSizesInRange -> ', dateRange)
   try {
      //  const db = client()
     //console.log('@@ CRUD FN getAvailableSizesInRange @@')
      const availableSizes = await db.bikes.findAvailableSizesInRange(dateRange)
     //console.log(
         'availableSizes en getAvailableSizesInRange-> ',
         availableSizes
      )
      return NextResponse.json(availableSizes, { status: 201 })
   } catch (error) {
     //console.log('### ERROR CRUD api/getAvailableSizesInRange -> ', error)
   }
}

export async function getAvailableTypes({ dateRange, size }) {
   try {
      //   const db = client()
     //console.log('@@ CRUD FN getAvailableTypes @@')
      const availableTypes = await db.bikes.findAvailableTypes({
         dateRange,
         size,
      })
     //console.log('availableTypes en getAvailableTypes-> ', availableTypes)
      return NextResponse.json(availableTypes, { status: 201 })
   } catch (error) {
     //console.log('### ERROR CRUD api/getAvailableTypes -> ', error)
   }
}

export async function getAvailableRanges({ dateRange, size, type }) {
   try {
      //   const db = client()
     //console.log('@@ CRUD FN getAvailableRanges @@')
      const availableRanges = await db.bikes.findAvailableRanges({
         dateRange,
         size,
         type,
      })
     //console.log('availableTypes en getAvailableRanges-> ', availableRanges)
      return NextResponse.json(availableRanges, { status: 201 })
   } catch (error) {
     //console.log('### ERROR CRUD api/getAvailableRanges -> ', error)
   }
}

export async function getAvailableBikes({ dateRange, size, type, range }) {
   try {
      //   const db = client()
     //console.log('@@ CRUD FN getAvailableBikes @@')
      const availableBikes = await db.bikes.findAvailableBikes({
         dateRange,
         size,
         type,
         range,
      })
     //console.log('availableTypes en getAvailableBikes-> ', availableBikes)
      return NextResponse.json(availableBikes, { status: 201 })
   } catch (error) {
     //console.log('### ERROR CRUD api/getAvailableBikes -> ', error)
   }
}
export async function getAppBikesConfig() {
   try {
      //   const db = client()
     //console.log('@@ CRUD FN findAppBikesConfig @@')
      const config = await db.bikes.findAppBikesConfig()
      // //console.log('availableTypes en findAppBikesConfig-> ', config)
      return NextResponse.json(config, { status: 201 })
   } catch (error) {
     //console.log('### ERROR CRUD api/getAppBikesConfig -> ', error)
   }
}

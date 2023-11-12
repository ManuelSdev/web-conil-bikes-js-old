import 'server-only'

import { cache } from 'react'
import { findUserByEmail } from '../repos/users'
import { NextResponse } from 'next/server'

export async function getUserByEmail({ email }) {
   //console.log('dateRange en getAvailableSizesInRange -> ', dateRange)
   try {
      //  const db = client()
      console.log('@@ CRUD FN getAvailableSizesInRange @@')
      const appUser = await findUserByEmail({ email })
      console.log('appUser en getUserByEmail-> ', appUser)
      return NextResponse.json(appUser, { status: 201 })
   } catch (error) {
      console.log('### ERROR CRUD api/getUserByEmail -> ', error)
   }
}

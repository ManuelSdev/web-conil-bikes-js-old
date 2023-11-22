import 'server-only'

import { cache } from 'react'
import { addUser, findUserByEmail } from '../repos/users'
import { NextResponse } from 'next/server'
import { th } from 'date-fns/locale'

export async function getUserByEmail({ email }) {
   //console.log('dateRange en getAvailableSizesInRange -> ', dateRange)
   try {
      //  const db = client()
      console.log('@@ CRUD FN getUserByEmail @@')
      const appUser = await findUserByEmail({ email })
      console.log('appUser en getUserByEmail-> ', appUser)
      return NextResponse.json(appUser, { status: 201 })
   } catch (error) {
      console.log('### ERROR CRUD api/getUserByEmail -> ', error)
   }
}

export async function createAppUser({ name, email, phone, role }) {
   //console.log('dateRange en getAvailableSizesInRange -> ', dateRange)
   try {
      //  const db = client()
      console.log('@@ CRUD FN createUser @@')
      const createdAppUserId = await addUser({ name, email, phone, role })
      console.log('createdUserId en createUser-> ', createdAppUserId)
      return createdAppUserId
      return NextResponse.json(createdAppUserId, { status: 201 })
   } catch (error) {
      console.log('### ERROR CRUD api/createUser -> ', error)
      throw new Error(error)
   }
}

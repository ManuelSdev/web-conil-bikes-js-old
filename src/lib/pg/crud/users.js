import 'server-only'

import { cache } from 'react'
import { addUser, findUserByEmail } from '../repos/users'
import { NextResponse } from 'next/server'

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

export async function createAppUser({ name, email, phone }) {
   //console.log('dateRange en getAvailableSizesInRange -> ', dateRange)
   try {
      //  const db = client()
      console.log('@@ CRUD FN createUser @@')
      const createdAppUserId = await addUser({ name, email, phone })
      console.log('createdUserId en createUser-> ', createdUserId)
      return createdAppUserId
      return NextResponse.json(createdUserId, { status: 201 })
   } catch (error) {
      console.log('### ERROR CRUD api/createUser -> ', error)
   }
}

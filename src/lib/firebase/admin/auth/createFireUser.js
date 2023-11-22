import React from 'react'
import { app } from '../firebaseAdmin'
import { getAuth } from 'firebase-admin/auth'

export async function createFireUser({
   createdAppUserId,
   name,
   phone,
   email,
   password,
}) {
   app()
   //type de createdAppUserId
   console.log('aaaaaaaaaaaaaaa', phone)

   const newUser = {
      // uid: createdAppUserId.toString(),
      displayName: name,
      phoneNumber: '+34' + phone.toString(),
      email: email,
      password: password,
   }
   try {
      const userRecord = await getAuth().createUser(newUser)
      return userRecord
   } catch (error) {
      console.log('Error creating new user en createFireUser:', error)
      throw new Error(error)
   }
}

import React from 'react'
import { app } from './firebaseAdmin'
import { getAuth } from 'firebase-admin/auth'

export async function createFireUser({
   createdAppUserId,
   name,
   phone,
   email,
   password,
}) {
   app()

   const newUser = {
      uid: createdAppUserId,
      displayName: name,
      phoneNumber: phone,
      email: email,
      password: password,
   }
   try {
      const userRecord = await getAuth().createUser(user)
   } catch (error) {
      console.log('Error creating new user en createFireUser:', error)
      throw new Error(error)
   }
   return decodeClaims
}

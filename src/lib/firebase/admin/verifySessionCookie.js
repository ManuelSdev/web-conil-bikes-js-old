import React from 'react'
import { app } from './firebaseAdmin'
import { getAuth } from 'firebase-admin/auth'

export async function verifySessionCookie(sessionCookie) {
   app()
   const decodeClaims = await getAuth().verifySessionCookie(sessionCookie)
   return decodeClaims
}

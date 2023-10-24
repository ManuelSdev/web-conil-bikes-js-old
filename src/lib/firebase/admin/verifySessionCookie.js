import React from 'react'

export async function verifySessionCookie(sessionCookie) {
   app()
   const decodeClaims = await getAuth().verifySessionCookie(sessionCookie)
   return decodeClaims
}

/**
 * Este middleware revisa las cookies de sesión y redirecciona a la url
 * proporcionada EN CASO DE QUE EL USUARIO @@@ SI @@@ ESTÉ LOGUEADO
 * Solo aplica a usurios de la web, no a administadores
 */

import React from 'react'

export default async function authPassMiddleware({
   request,
   NextResponse,
   urlToRedirect,
}) {
   const sessionCookie = request.cookies.has('userSession')
      ? request.cookies.get('userSession')
      : null
   if (sessionCookie) {
      const res = await fetch(
         process.env.URL +
            '/api/auth/firebaseAdmin/verifySessionCookie?role=user',
         {
            headers: {
               cookie: `userSession=${sessionCookie.value}`,
            },
         }
      )
      //TODO: revisa cuando el mail no está verificado
      const { verified, error } = await res.json()
      if (verified) {
         const url = new URL(urlToRedirect, request.url)
         return NextResponse.redirect(url, { status: 302 })
      }
   }
}

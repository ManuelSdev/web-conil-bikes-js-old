import { createFireUser } from '@/lib/firebase/admin/auth/createFireUser'
import { createAppUser } from '@/lib/pg/crud/users'
import sendGridSendEmail from '@/lib/sendGrid/sendEmail'

import { getAuth } from 'firebase-admin/auth'
import { NextResponse } from 'next/server'
/**
 *
 * @Clave: así puedes obtener custom claims en el server
 * https://firebase.google.com/docs/auth/admin/custom-claims?hl=es&authuser=2#defining_roles_via_backend_script
 * const fireUser = await getAuth().getUserByEmail(email)
 */

export async function POST(req) {
   //console.log('req.body -------->', req.method)
   const body = await req.json()
   const { role = 'user', name, phone, email, password } = body

   //https://firebase.google.com/docs/auth/admin/email-action-links?hl=es&authuser=2#initialize_actioncodesettings
   const continueUrl = {
      url: 'http://localhost:3000/',
   }

   console.log('email en users api route -> ', email)

   try {
      //Crear usuario en la base de datos de la app
      const createdAppUserId = await createAppUser({ name, email, phone })

      const linkToControlPage = await getAuth().generateEmailVerificationLink(
         email,
         continueUrl
      )

      const sendgridResponse = await sendGridSendEmail({
         userName: name,
         buttonLink: linkToControlPage,
         to: email,
      })

      return NextResponse.json(customToken, { status: 201 })
   } catch (error) {
      console.log('### ERROR USERS API route -> ', error)
      return NextResponse.json(error, { status: 500 })
   }
}

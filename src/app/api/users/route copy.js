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
      //Crear usuario en firebase
      const userRecord = await createFireUser({
         name,
         phone,
         email,
         password,
      })
      /**
       * La verificación de email se hace en el cliente.  Esto implica que tienes que estar
       * logado/tener sesión activa en el cliente, porque el método sendVerificationEmail()
       *  recibe como parametro el usuario.
       * ENTONCES: aquí solo hago el registro de una nueva cuenta pero, en el cliente, no hay
       * nadie logado. Necesito una forma de obtener un token de verificación de la autenticación
       * en el cliente.
       * @Clave: creo token personalizado en el server y lo mando al cliente para evitar tener
       * que autenticar al usuario en el cliente.
       * @Clave: puedes meter custom claims en el token personalizado
       * https://firebase.google.com/docs/auth/admin/create-custom-tokens?hl=es&authuser=2#create_custom_tokens_using_the_firebase_admin_sdk
       *
       */

      // console.log('createdFireUserRecord -> ', createdFireUserRecord)
      const customToken = await getAuth().createCustomToken(
         createdFireUserRecord.uid
      )
      console.log('customToken -> ', customToken)
      //const a = await getAuth().getUserByEmail(email)
      // console.log('a =================== -> ', a)

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
   }
}

/*
async function sendSengridEmail({ userName, buttonLink, to }) {
   mail.setApiKey(process.env.SENDGRID_API_KEY)
   const mailTemplateConfig = {
      userName,
      firstMessage:
         'Haz click en el botón para verificar tu email y finalizar el registro',
      buttonText: 'Verificar email',
      buttonLink,
   }

   const emailHtml = basicEmailTemplate(mailTemplateConfig)
   //console.log('emailHtml -> ', emailHtml)
   // const html = emailTemplate('linkToControlPage')
   try {
      const msg = {
         to, // Change to your recipient
         // Change to your verified sender
         from: 'masanchezzm@gmail.com',
         subject: 'BIenvenido a Conil Bikes',
         // text: 'Verifica tu email para finalizar el registro',
         html: emailHtml,
      }
      const sendgridResponse = await mail.send(msg)
      return sendgridResponse
   } catch (error) {
      const {
         response: { body: errors },
      } = error
      console.log('### ERROR sendgridResponse API route -> ', errors)
      throw new Error(errors)
   }
}
*/

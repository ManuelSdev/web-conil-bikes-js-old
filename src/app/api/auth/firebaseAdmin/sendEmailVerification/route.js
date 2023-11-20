import { app } from '@/lib/firebase/admin/firebaseAdmin'
import sendGridSendEmail from '@/lib/sendGrid/sendEmail'
import { getAuth } from 'firebase-admin/auth'

export async function GET(req) {
   const searchParams = req.nextUrl.searchParams
   const email = searchParams.get('email')
   const name = searchParams.get('name')
   const continueUrl = {
      url: 'http://localhost:3000/',
   }
   try {
      const linkToControlPage = await getAuth().generateEmailVerificationLink(
         email,
         continueUrl
      )
      const sendgridResponse = await sendGridSendEmail({
         userName: name,
         buttonLink: linkToControlPage,
         to: email,
      })
      console.log(
         'Email enviado desde VeriffyEmailFormPageHandler VIA /api/auth/firebaseAdmin/sendEmailVerification -> ',
         sendgridResponse
      )
      return Response.json({ success: true }, { status: 200 })
   } catch (error) {
      console.log(
         'ROUTE HANDLER ERROR: /api/auth/firebaseAdmin/sendEmailVerification  ->',
         error
      )
      //return redirectToUnauthorized()
      Response.json(error, { status: 500 })
   }
}

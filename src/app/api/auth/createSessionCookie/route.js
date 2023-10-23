import { app } from '@/lib/firebase/admin/firebaseAdmin'
import { getAuth } from 'firebase-admin/auth'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function POST(req) {
   //   const body = await req.json()
   const { result, status } = await createSessionCookie(req)
   console.log('result -> ', result, 'status -> ', status)
   return Response.json(result, status)
}

async function createSessionCookie(req) {
   app()
   const authHeader = req.headers.get('authorization')
   const accessToken = getToken(authHeader)
   const isAdmin = await verifyCustomClaimsAdmin(accessToken)
   const res = await setCookies(isAdmin, accessToken)
   if (res.result.success) {
      const resolvedUrl = await getRedirectUrl(isAdmin, req)

      res.result.resolvedUrl = resolvedUrl
      return res
   } else return res
}
/******************************************* ****************************************/

function getToken(authHeader) {
   if (authHeader.startsWith('Bearer ')) {
      return authHeader.substring(7, authHeader.length)
   } else {
      console.log('ERROR ON GET-TOKEN')
   }
}

async function verifyCustomClaimsAdmin(accessToken) {
   const decodeToken = await getAuth().verifyIdToken(accessToken)
   const { admin } = decodeToken
   return admin
}

async function setCookies(isAdmin, accessToken) {
   const expiresIn = 60 * 60 * 24 * 5 * 1000
   try {
      const sessionCookie = await getAuth().createSessionCookie(accessToken, {
         expiresIn,
      })
      const cookieName = isAdmin ? 'adminSession' : 'userSession'
      const cookieOptions = { maxAge: expiresIn, httpOnly: true, secure: true }
      cookies().set(cookieName, sessionCookie, cookieOptions)
      cookies().delete('resolvedUrl')
      return { result: { success: true }, status: { status: 200 } }
   } catch (err) {
      console.log('ERROR createSessionCookie  ', err)
      // res.status(401).send('UNAUTHORIZED REQUEST!')
      return {
         result: { success: false, message: 'UNAUTHORIZED REQUEST!' },
         status: { status: 401 },
      }
   }
}

async function getRedirectUrl(isAdmin, req) {
   if (isAdmin) return '/dashboard/bookings/calendar'
   else if (req.headers.has('resolvedUrl')) {
      const { resolvedUrl } = req.headers.get('resolvedUrl')
      //borra la cookie
      // res.setHeader('Set-Cookie', `resolvedUrl=0; Max-Age=0`)
      return resolvedUrl
   } else return '/'
}

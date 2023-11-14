import { verifySessionCookie } from '@/lib/firebase/admin/verifySessionCookie'
import { cookies } from 'next/headers'

export async function GET(req) {
   // console.log('############################################################')
   const searchParams = req.nextUrl.searchParams
   const role = searchParams.get('role')
   const cookieStore = cookies()
   const sessionCookie =
      role === 'admin'
         ? cookieStore.get('adminSession')
         : cookieStore.get('userSession')
   //console.log('HANDLER:verifySessionCookie sessionCookie ->', sessionCookie)
   try {
      const decodeClaims = await verifySessionCookie(sessionCookie.value)

      const { admin, email } = decodeClaims
      // console.log('HANDLER: verifySessionCookie ADMIN ->', admin)
      if (role === 'admin') {
         if (admin) return Response.json({ verified: true })
         if (!admin) {
            const error = {
               code: 'custom',
               message: 'No admin custom claim',
            }
            return Response.json({ verified: false, error })
         }
      }
      if (role === 'user') {
         return Response.json({ verified: true })
      }
      return Response.json({ verified: true })
   } catch (error) {
      console.log(
         'ROUTE HANDLER ERROR: /api/auth/firebaseAdmin/verifySessionCookie  ->',
         error
      )
      //return redirectToUnauthorized()
      Response.json({ verified: false, error })
   }
}

//          \$[\d]+|\$\[([\d\w]+)\]

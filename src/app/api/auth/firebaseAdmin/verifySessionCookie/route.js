import { verifySessionCookie } from '@/lib/firebase/admin/verifySessionCookie'
import { ro } from 'date-fns/locale'
import { cookies } from 'next/headers'

export async function GET(req) {
   // console.log('############################################################')
   const searchParams = req.nextUrl.searchParams
   const role = searchParams.get('role')
   const cookieStore = cookies()
   console.log('cookieStore @@@ ------->', cookieStore)
   const sessionCookie =
      role === 'admin'
         ? cookieStore.get('adminSession')
         : cookieStore.get('userSession')
   console.log(
      '######################################################### sessionCookie -> ',
      sessionCookie
   )
   try {
      const decodeClaims = await verifySessionCookie(sessionCookie)

      const { admin, email } = decodeClaims
      const res = {}
      if (role === 'admin') {
         if (admin) res.verified = true
         if (!admin) {
            const error = {
               code: 'custom',
               message: 'No admin custom claim',
            }
            res.verified = false
            res.error = error
         }
      }
      if (role === 'user') {
         res.verified = true
      }
      return Response.json({ res: 'a' })
   } catch (error) {
      console.log(
         'ERROR en withGuard: isDashboardPage && adminSession, but...  ->',
         error
      )
      //return redirectToUnauthorized()
      Response.json({ verified: false, error })
   }
}

//          \$[\d]+|\$\[([\d\w]+)\]

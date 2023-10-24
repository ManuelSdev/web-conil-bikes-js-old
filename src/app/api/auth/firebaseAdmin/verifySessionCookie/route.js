import { verifySessionCookie } from '@/lib/firebase/admin/verifySessionCookie'
import { ro } from 'date-fns/locale'
import { cookies } from 'next/headers'

export async function GET(req) {
   const searchParams = req.nextUrl.searchParams
   const role = searchParams.get('role')
   const cookieStore = cookies()
   const sessionCookie =
      role === 'admin'
         ? cookieStore.get('adminSession')
         : cookieStore.get('userSession')
   try {
      const decodeClaims = await verifySessionCookie(sessionCookie)

      const { admin, email } = decodeClaims
      if (role == 'admin') {
         if (admin) return Response.json({ verified: true })
         if (!admin) {
            const error = {
               code: 'custom',
               message: 'No admin custom claim',
            }
            return Response.json({ verified: false, error })
         }
      }
      if (role == 'user') {
         return Response.json({ verified: true })
      }
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

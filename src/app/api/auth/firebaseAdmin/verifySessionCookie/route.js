import { verifySessionCookie } from '@/lib/firebase/admin/verifySessionCookie'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { NextResponse } from 'next/server'

export async function GET(req) {
   ////console.log('############################################################')
   const expiresIn = 60 * 60 * 24 * 5 * 1000
   const cookieOptions = {
      maxAge: expiresIn,
      httpOnly: true,
      secure: true,
   }

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
      // //console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@')
      //console.log('##### decodeClaims ->', decodeClaims)
      //TODO: parche para pruebas , revisa el uso de roles
      const adminEmail = process.env.ADMIN_EMAIL
      const { appRole, email } = decodeClaims
      const isAdmin = appRole === 'admin' || appRole === 'manager'
      ////console.log('HANDLER: verifySessionCookie ADMIN ->', admin)
      if (role === 'admin') {
         if (isAdmin || adminEmail === email)
            return Response.json({ verified: true })
         if (!isAdmin) {
            const error = {
               code: 'custom',
               message: 'No admin custom claim',
            }
            return Response.json({ verified: false, error })
         }
      }
      if (role === 'user') {
         if (appRole === 'user') return Response.json({ verified: true })
      }
      return Response.json({ verified: true })
   } catch (error) {
      console.log(
         'ROUTE HANDLER ERROR: /api/auth/firebaseAdmin/verifySessionCookie  ->',
         error
      )

      if (role !== 'admin') {
         cookies().set('name', 'lee')
         //console.log('####################')
         //  return redirect('http://localhost:3000/auth/sign-in')
      }

      //  return redirect('/auth/login')
      //return redirectToUnauthorized()
      return Response.json({ verified: false, error })
   }
}

//          \$[\d]+|\$\[([\d\w]+)\]

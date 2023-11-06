import { cookies } from 'next/headers'

export async function GET(req) {
   console.log('*********** ------------- **************')
   const searchParams = req.nextUrl.searchParams
   const name = searchParams.get('name')
   const value = searchParams.get('value')

   const expiresIn = 60 * 60 * 24 * 5 * 1000
   try {
      const cookieOptions = { maxAge: expiresIn, httpOnly: true, secure: true }
      cookies().set(name, value, cookieOptions)
      // cookies().delete('resolvedUrl')
      //  return { result: { success: true }, status: { status: 200 } }
   } catch (err) {
      console.log('ERROR createSessionCookie  ', err)
      // res.status(401).send('UNAUTHORIZED REQUEST!')
   }

   return Response.json({ result: 'ok' })
}

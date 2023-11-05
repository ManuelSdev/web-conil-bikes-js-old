import { cookies } from 'next/headers'

export async function POST(req) {
   console.log('*********** ------------- **************')
   //   const body = await req.json()
   //const { result, status } = await createSessionCookie(req)
   // console.log('result -> ', result, 'status -> ', status)
   setCookies()
   return Response.json({ result: 'ok' })
}

async function setCookies() {
   const expiresIn = 60 * 60 * 24 * 5 * 1000
   try {
      const cookieOptions = { maxAge: expiresIn, httpOnly: true, secure: true }
      cookies().set('cookieNameeeeee', 'sessionCookie', cookieOptions)
      // cookies().delete('resolvedUrl')
      //  return { result: { success: true }, status: { status: 200 } }
   } catch (err) {
      console.log('ERROR createSessionCookie  ', err)
      // res.status(401).send('UNAUTHORIZED REQUEST!')
   }
}

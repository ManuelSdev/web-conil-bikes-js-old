import 'server-only'
import { verifySessionCookie } from '@/lib/firebase/admin/verifySessionCookie'
import { getAppBikeConfigSegments } from '@/lib/pg/crud/bikes'
import { getUserIdByEmail } from '@/lib/pg/crud/users'
import { cookies } from 'next/headers'

export async function getUserPageAuth() {
   const userSessionCookie = cookies().get('userSession')
   if (!userSessionCookie) return { isLogged: false }
   const decodeClaims = await verifySessionCookie(userSessionCookie.value)

   if (!decodeClaims) return { isLogged: false }

   const { name, email, phone_number: phone } = decodeClaims

   const resAppUserId = await getUserIdByEmail({ email })
   const appUserId = await resAppUserId.json()
   return { name, email, phone, appUserId, isLogged: true }
}

export async function getAppBikeSegments() {
   const resAppBikesConfigSegments = await getAppBikeConfigSegments()
   const segmentList = await resAppBikesConfigSegments.json()
   return { segmentList }
}

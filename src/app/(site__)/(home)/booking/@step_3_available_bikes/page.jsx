//@ts-nocheck
import { getAvailableBikes } from '@/lib/pg-promise/crud/bikes'

import React from 'react'

import { cookies, headers } from 'next/headers'
import { verifySessionCookie } from '@/lib/firebase/admin/verifySessionCookie'
import AvailableBikeListPublicHandler from '@/components/stepper/step_3/AvailableBikeListPublicHandler'

export default async function PublicStepThreeBookingPage({ searchParams }) {
   //console.log('searchParams ->', searchParams)
   const { step, date: dateRange, size, type, range } = searchParams

   if (step !== '3') return null

   const sessionCookie = cookies().get('userSession')
   const decodeClaims = sessionCookie
      ? await verifySessionCookie(sessionCookie.value)
      : null
   const logged = decodeClaims ? true : false
   //console.log('logged ->', logged)
   //   if (!logged) await setResolvedUrlCookie()

   //console.log('## CALL getAvailableSizesInRange FROM STEP 1b ##')
   const res = await getAvailableBikes({ dateRange, size, type, range })

   const availableBikes = await res.json()

   return (
      <AvailableBikeListPublicHandler
         logged={logged}
         availableBikes={availableBikes}
         dateRange={dateRange}
         searchParams={searchParams}
      />
   )
}

async function setResolvedUrlCookie() {
   // 'use server'

   const headersList = headers()
   const resolvedUrl = headersList.get('referer')

   const res = await fetch(process.env.URL + '/api/cookies', {
      method: 'POST',
      headers: {
         cookie: `resolvedUrl=${resolvedUrl}`,
      },
      //body: JSON.stringify({ resolvedUrl, cookieOptions }),
   })
   //const data = await res.json()
   //console.log('res ->', res)
   //console.log('data ->', data)
   //console.log('resolvedUrl ->', resolvedUrl)
}

//@ts-nocheck
'use client'
import React from 'react'

import AvailableBikesList from './AvailableBikeList'
import MobileBottomAppBar from '@/components/layouts/site/MobileBottomAppBar'
import { useLazyCreateCookieQuery } from '@/lib/redux/apiSlices/cookieApi'
import { useRouter } from 'next/navigation'

export default function PublicStepThreePageHandler({ searchParams, ...props }) {
   const { step, date: dateRange, size, type, range } = searchParams
   const router = useRouter()
   const [triggerCookie] = useLazyCreateCookieQuery()
   const handlePrev___ = () => {
      router.push(
         isLogged
            ? `/user/booking?step=1&date=${dateRange}`
            : `/booking?step=1&date=${dateRange}`
      )
   }
   const handlePrev = () => {
      router.push(`/booking?step=2&date=${dateRange}`)
   }
   const handleDialogAction = () => {
      const stepperData = { dateRange, size, type, range, step }
      const cookieValue = JSON.stringify(stepperData)
      triggerCookie({ name: 'stepperData', value: cookieValue })
      router.push(
         //`/user/booking?step=1b&date=${dateRange}&size=${size}&type=${type}&range=${range}`
         '/user/booking'
      )
   }
   return (
      <div>
         <AvailableBikesList
            handleDialogAction={handleDialogAction}
            {...props}
         />
         <MobileBottomAppBar disabled={true} handlePrev={handlePrev} />
      </div>
   )
}

'use client'

import Stepper from '@/components/stepper/Stepper'
import { selectDateRange } from '@/lib/redux/slices/bookingFormSlice'
import { usePathname, useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

export default function StepHandler(props) {
   const router = useRouter()
   const storedDateRange = useSelector(selectDateRange)
   const { from, to } = storedDateRange
   //console.log('StepHandler -> storedDateRange', typeof storedDateRange.from)
   useEffect(() => {
      //  if (from === '' && to === '') router.push('/dashboard/bookings/new/date')
   }, [storedDateRange])

   const path = usePathname()
   const getStep = () => {
      if (path.includes('date')) {
         return 1
      } else if (path.includes('bike')) {
         return 2
      } else if (path.includes('address')) {
         return 3
      } else if (path.includes('resume')) {
         return 4
      }
   }
   const step = getStep()
   return <Stepper step={step} isAdmin={true} {...props} />
}

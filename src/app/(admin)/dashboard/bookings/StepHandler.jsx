'use client'
import Step from '@/components/stepper/Step'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function StepHandler(props) {
   const path = usePathname()
   const getStep = () => {
      if (path.includes('user')) {
         return 1
      } else if (path.includes('date')) {
         return 2
      } else if (path.includes('bike')) {
         return 3
      } else if (path.includes('address')) {
         return 4
      } else if (path.includes('resume')) {
         return 5
      }
   }
   const step = getStep()
   return <Step step={step} isAdmin={true} {...props} />
}

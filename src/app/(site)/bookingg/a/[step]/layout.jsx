import StepsPanel from '@/components/stepper/StepsPanel'
import React from 'react'

export default function AdminDashboardLayout({ children, params }) {
   // console.log('Props /bookin/layout -> ', props)
   console.log('Params /bookin/layout -> ', params)
   console.log('sssssssssssssssssssssssssssssssssss')
   const { step } = params
   const steps = { date: 1, bikes: 2, address: 3, resume: 4 }

   return (
      <div>
         <StepsPanel step={steps[step]} />
         {children}
      </div>
   )
}

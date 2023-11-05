import 'server-only'

import React from 'react'
import SelectDateStep from './SelectDateStep'

export default function StepZeroPage({ searchParams }) {
   const { step, date: dateRange } = searchParams
   if (step !== '0') return null
   console.log('step -> ', step)
   return <SelectDateStep step={step} dateRange={dateRange} />
}

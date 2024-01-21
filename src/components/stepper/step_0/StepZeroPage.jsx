import 'server-only'

import React from 'react'
import DateStepPageHandler from './DateStepPageHandler'

export default function StepZeroPage({ step, dateRange }) {
   //const { step, date: dateRange } = searchParams
   if (step !== '0') return null
   //console.log('step -> ', step)
   return <DateStepPageHandler step={step} dateRange={dateRange} />
}

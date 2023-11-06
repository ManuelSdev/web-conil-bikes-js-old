'use client'
import React, { useState } from 'react'
import DateStepHandler from './step_0/DateStepHandler'

export default function Stepper() {
   const [step, setStep] = useState(1)

   return (
      <div>
         {step === 0 && <DateStepHandler setStep={setStep} />}
         {step === 1 && <div>Step 1</div>}
         {step === 2 && <div>Step 2</div>}
         {step === 3 && <div>Step 3</div>}
      </div>
   )
}

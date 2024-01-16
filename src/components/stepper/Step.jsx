import React from 'react'
import StepperControlButtons from './StepperControlButtons'
import StepsLine from './StepsLine'
import StepsPanel from './StepsPanel'

export default function Step(props) {
   console.log('Step @@@->', props)
   return (
      <div className=" bg-red-400">
         <div className="">
            <StepsPanel step={props.step} />
            <StepperControlButtons className="pt-3" {...props} />
         </div>

         <div className="pt-6">{props.children}</div>
      </div>
   )
}

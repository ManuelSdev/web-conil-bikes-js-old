import React from 'react'
import StepperControlButtons from './StepperControlButtons'
import StepsLine from './StepsLine'
import StepsPanel from './StepsPanel'
import { Separator } from '@/components/ui/separator'
import StepVertical from './StepVertical'
import { Button } from '../ui/button'
import Link from 'next/link'
import StepControl from './StepControl'

export default function Step({
   step,
   children,
   title,
   page,
   nextButton,
   prevButton,
}) {
   //console.log('Step @@@->')
   return (
      <div className=" pb-10">
         {/*<div className="pb-10">{ <StepsPanel step={step} />}</div>*/}
         <h2 className="text-2xl font-bold tracking-tight">Fecha</h2>
         <p className="text-muted-foreground">
            Indícanos la fecha de inicio y de finalización de tu reserva
         </p>
         <Separator className="my-4" />
         <div className="flex flex-col space-y-8 sm:flex-row sm:space-x-24 sm:space-y-0">
            <StepVertical step={step} />

            <div className="flex-1 ">{children}</div>
         </div>
      </div>
   )
}
/*
 <div class="space-y-0.5">
            <h2 class="text-2xl font-bold tracking-tight">Settings</h2>
            <p class="text-muted-foreground">
               Manage your account settings and set e-mail preferences.
            </p>
         </div>
         <div className="flex-1 lg:max-w-2xl">
            <div className="space-y-6"></div>
         </div>
         <div className="">{children}</div>
         */

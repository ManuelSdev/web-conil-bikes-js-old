import React from 'react'
import StepperControlButtons from './StepperControlButtons'
import StepsLine from './StepsLine'
import StepsPanel from './StepsPanel'
import { Separator } from '@/components/ui/separator'

export default function Step({ step, children, title }) {
   //console.log('Step @@@->')
   return (
      <div className=" bg-red-400">
         <div className="pb-10">
            <StepsPanel step={step} />
         </div>
         <div className="mx-auto">
            <h2 class="text-2xl font-bold tracking-tight">Fecha</h2>
            <p class="text-muted-foreground">
               Indícanos la fecha de inicio y de finalización de tu reserva
            </p>
            <Separator />
            <div className="">{children}</div>
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

import React from 'react'
import StepperControlButtons from './StepperControlButtons'
import StepsLine from './StepsLine'
import StepsPanel from './StepsPanel'
import { Separator } from '@/components/ui/separator'
import StepVertical from './StepVertical'
import { Button } from '../ui/button'
import Link from 'next/link'
import StepControl from './StepControl'
import { cn } from '@/utils/app/functions'

export default function Step({
   step,
   children,
   title,
   info,
   page,
   nextButton,
   prevButton,
   childClassName,
}) {
   //console.log('Step @@@->')
   return (
      <div className="flex flex-col  space-y-8  sm:space-y-0">
         <div className="sm:hidden">
            <StepVertical step={step} />
         </div>
         <div className="hidden sm:block">
            <StepsPanel step={step} />
         </div>

         <div className={cn(' sm:mx-auto sm:w-1/2', childClassName)}>
            {title && (
               <div className="mb-8 mt-8 flex  flex-col items-center">
                  <h3 className="text-xl font-semibold leading-7 text-white">
                     {title}
                  </h3>
                  <p className="mt-1 max-w-2xl leading-6 text-muted-foreground">
                     {info}
                  </p>
               </div>
            )}
            <div className={cn({ 'mt-8': !title })}>{children}</div>
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

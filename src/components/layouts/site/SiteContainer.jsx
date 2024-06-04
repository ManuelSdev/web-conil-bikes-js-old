import { cn } from '@/utils/app/functions'
import React from 'react'

export default function SiteContainer(props) {
   //NO NECESITA W-FULL?
   return (
      <div
         className={cn(
            'Container  mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 ',
            props.className
         )}
         {...props}
      />
   )
}

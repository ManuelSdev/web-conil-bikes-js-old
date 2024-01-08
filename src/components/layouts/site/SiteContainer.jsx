import { cn } from '@/utils/app/functions'
import React from 'react'

export default function SiteContainer(props) {
   return (
      <div
         className={cn(
            'Container mx-auto max-w-7xl bg-slate-400 py-6 sm:px-6 lg:px-8',
            props.className
         )}
         {...props}
      />
   )
}

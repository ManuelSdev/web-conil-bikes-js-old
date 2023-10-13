import { cn } from '@/utils/commonFns'
import React from 'react'

export default function Card({ children, ...props }) {
   const { cardTitle, cardDescription } = props
   return (
      <div
         className={cn(
            'block max-w-fit  rounded-xl border border-gray-200 bg-white p-6 shadow ',
            props.className
         )}
      >
         <CardHeader {...props} />
         <div className="max-w-fit">{children}</div>
      </div>
   )
}

function CardHeader({ ...props }) {
   return (
      <div
         className={cn('flex flex-col space-y-1.5 pb-6', props.headerClassName)}
      >
         {props.cardTitle && (
            <h3 className=" text-2xl font-semibold leading-none tracking-tight text-gray-900 dark:text-white">
               {props.cardTitle}
            </h3>
         )}
         {props.cardDescription && (
            <p className="font-normal text-gray-700 dark:text-gray-400">
               {props.cardDescription}
            </p>
         )}
      </div>
   )
}

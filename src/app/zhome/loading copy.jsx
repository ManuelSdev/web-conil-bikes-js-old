import { DialogLoader } from '@/components/common/DialogLoader'
import clsx from 'clsx'
import React from 'react'

export default function Loading() {
   return (
      <div>
         <div
            id="loop"
            className={clsx(
               'absolute left-1/2 top-1/2 -ml-12 -mt-12 h-24 w-24 rounded-[200px] border-4 border-solid border-[#bb5f27]',
               ''
            )}
         ></div>
         <div id="bike-wrapper" className="center">
            <div
               id="bike"
               className="absolute left-1/2 top-1/2 -ml-3 mt-7"
            ></div>
         </div>
      </div>
   )
}

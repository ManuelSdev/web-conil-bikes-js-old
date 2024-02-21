import React from 'react'
import IconCorpLogo from '@/components/svg/IconCorpLogo'
import Styles from './load.module.css'

import { cn } from '@/utils/app/functions'
export default function Loading({ loaded }) {
   //opacity-0
   return (
      <div
         className={cn({
            'absolute flex h-full w-full  bg-black': true,
            'animate-page-loaded opacity-0 ': loaded,
         })}
      >
         <div className="z-50 mx-auto my-auto w-1/2">
            {' '}
            <IconCorpLogo className=" -mb-4 h-12 w-12 animate-pulse border-4 md:h-20 md:w-20" />
            <div className="mx-auto flex w-[30%] justify-center">
               <div className={Styles['lds-ellipsis']}>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
               </div>
            </div>
         </div>
      </div>
   )
}
//         <IconCorpLogo className="z-50 mx-auto my-auto h-12 w-12 animate-pulse border-4 md:h-20 md:w-20" />

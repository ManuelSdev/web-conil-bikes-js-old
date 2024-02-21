import { DialogLoader } from '@/components/common/DialogLoader'
import React from 'react'
import loading from './loading.module.css'
import IconCorpLogo from '@/components/svg/IconCorpLogo'
import Styles from './spinner.module.css'
import clsx from 'clsx'
export default function Loading() {
   return (
      <div className=" absolute top-0 flex h-screen w-screen  bg-black">
         <div className="z-50 mx-auto my-auto">
            <div className=" scale-[2]">
               <div className={clsx(Styles['lds-roller'])}>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
               </div>
            </div>
            <IconCorpLogo className="z-50 mx-auto my-auto h-12 w-12 animate-pulse border-4 md:h-20 md:w-20" />
         </div>
      </div>
   )
}
//         <IconCorpLogo className="z-50 mx-auto my-auto h-12 w-12 animate-pulse border-4 md:h-20 md:w-20" />

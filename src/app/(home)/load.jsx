import { DialogLoader } from '@/components/common/DialogLoader'
import React from 'react'
import loading from './loading.module.css'
import IconCorpLogo from '@/components/svg/IconCorpLogo'
import Styles from './loader.module.css'
import clsx from 'clsx'
import styles from 'react-day-picker/dist/style.css'
import { cn } from '@/utils/app/functions'
export default function Load() {
   return (
      <div className=" absolute top-0 flex h-screen w-screen  bg-black">
         <div className="z-50 mx-auto my-auto w-1/2">
            {' '}
            <IconCorpLogo className=" mb-5 h-12 w-12 animate-pulse border-4 md:h-20 md:w-20" />
            <div className="mx-auto w-[30%]">
               <div className="flex  justify-center">
                  <span className={cn(Styles.loader, 'border-red-400')}></span>
               </div>
            </div>
         </div>
      </div>
   )
}
//         <IconCorpLogo className="z-50 mx-auto my-auto h-12 w-12 animate-pulse border-4 md:h-20 md:w-20" />

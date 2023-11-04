import { dateRangeObjToISOStringObj } from '@/utils/datesFns/createDateRangeString'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function MobileBottomAppBar({
   handlePrev,
   handleNext,
   disabled,
}) {
   return (
      <nav className="absolute bottom-0  flex h-slimTopAppBar  w-full items-center bg-black md:hidden">
         <div className="BUTTONS flex w-full items-center justify-between">
            <button onClick={handlePrev} className="text-greenCorp">
               atrás
            </button>

            <button
               disabled={disabled}
               onClick={handleNext}
               className="text-greenCorp"
            >
               continuar
            </button>
         </div>
      </nav>
   )
}

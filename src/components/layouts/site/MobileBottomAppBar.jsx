import { dateRangeObjToISOStringObj } from '@/utils/datesFns/createDateRangeString'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function MobileBottomAppBar({
   renderNextButton,
   renderPrevButton,
}) {
   const a = 'aaaaaaaaaaaa'
   return (
      <nav className="fixed bottom-0  z-50  flex h-slimTopAppBar  w-full items-center bg-black md:hidden">
         <div className="BUTTONS flex w-full items-center justify-between">
            {renderPrevButton && renderPrevButton()}
            {renderNextButton && renderNextButton()}
         </div>
      </nav>
   )
}

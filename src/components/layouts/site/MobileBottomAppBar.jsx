import { dateRangeObjToISOStringObj } from '@/utils/datesFns/createDateRangeString'
import Link from 'next/link'
import React from 'react'

const urlParams = (obj) => new URLSearchParams(obj)
export default function MobileBottomAppBar({ step, dateRange }) {
   const isoStringRange = dateRangeObjToISOStringObj(dateRange)
   console.log('dateRange -> ', dateRange)
   const nextStep = step < 3 ? step++ : false
   const prevStep = step > 0 ? step-- : false

   const urlHandler = {
      nextUrl: `/booking?step=1&${urlParams(isoStringRange)}`,
      prevUrl: `/`,
   }
   const { nextUrl, prevUrl } = urlHandler
   return (
      <nav className="absolute bottom-0  flex h-slimTopAppBar  w-full items-center bg-black md:hidden">
         <div className="BUTTONS flex w-full items-center justify-between">
            <button className="text-greenCorp">atrás</button>
            <Link href={nextUrl}>
               <button className="text-greenCorp">continuar</button>
            </Link>
         </div>
      </nav>
   )
}

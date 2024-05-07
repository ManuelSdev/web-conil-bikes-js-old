import DatePicker from '@/components/datepicker/DatePicker'
import MobileBottomAppBar from '@/components/layouts/site/MobileBottomAppBar'
import Link from 'next/link'
import React from 'react'

const FROM = 'from'
const TO = 'to'

export default function DateStep({
   from,
   to,
   handleSelect,
   linkDisabled,
   ...props
}) {
   return (
      <div className="grow justify-center gap-5">
         <div className="flex w-full justify-between gap-5 py-3 md:justify-center">
            <DatePicker
               //className="grow md:w-1/3 md:grow-0"
               className={'w-[45%] grow'}
               label="Inicio"
               date={from}
               handleSelect={handleSelect(FROM)}
               {...props}
            />
            <DatePicker
               // className="grow md:w-1/3  md:grow-0"
               className={'w-[45%] grow'}
               label="Fin"
               date={to}
               handleSelect={handleSelect(TO)}
               {...props}
            />
         </div>
         {/*!linkDisabled ? (
            <Link
               disabled
               href="/booking/bikes"
               className="mt-8 block w-full rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto"
            >
               Continuarse
            </Link>
         ) : (
            <button
               disabled
               className="mt-8 block w-full rounded-md border border-transparent bg-red-300 px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto"
            >
               {' '}
               Continuar
            </button>
         )*/}
      </div>
   )
}

/*<MobileBottomAppBar {...props} />*/

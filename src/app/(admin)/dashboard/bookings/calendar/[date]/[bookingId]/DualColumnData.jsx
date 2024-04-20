import { PaperClipIcon } from '@heroicons/react/20/solid'
import clsx from 'clsx'
import React from 'react'

export default function DualColumnData({ dataList, listHeader }) {
   return (
      <div>
         <dl className="grid grid-cols-1 sm:grid-cols-2">
            {dataList.map((pair, idx) => {
               const [title, info] = pair
               return (
                  <div
                     key={idx}
                     className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0"
                  >
                     <dt className="text-sm font-medium leading-6 text-gray-900">
                        {title}
                     </dt>
                     <dd className="mt-1 text-sm leading-6 text-gray-700 sm:mt-2">
                        {info}
                     </dd>
                  </div>
               )
            })}
         </dl>
      </div>
   )
}

/*
       className={clsx({
                           ' px-4 py-6 sm:col-span-1 sm:px-0':
                              idx === 0 || idx === 1,
                           'border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0':
                              idx !== 0 && idx !== 1,
                        })}
                        */

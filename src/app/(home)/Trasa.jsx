'use client'
import clsx from 'clsx'
import React, { useEffect, useState, useTransition } from 'react'

export default function Trasa() {
   const [test, setTest] = useState(false)
   const [isPending, startTransition] = useTransition()
   useEffect(() => {
      console.log('isPending ', isPending)

      function handleChange() {
         startTransition(() => {
            setTest(true)
         })
      }
      return () => {
         //   handleChange()
      }
   }, [])

   console.log('0000000000000000000000000')
   return (
      <div>
         <div className="animate-page-loaded h-28 w-28 bg-red-400 opacity-0"></div>
         <div
            className={clsx({
               'transition-color h-28 w-28 delay-150 duration-1000 ease-in-out ': true,
               'bg-red-400 ': !test,
               'bg-blue-500 ': test,
            })}
         >
            {' '}
            <button onClick={() => setTest(true)}>aaaaaa</button>
         </div>
      </div>
   )
}

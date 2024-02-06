import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

export default function pageControl({ page, nextIsActive }) {
   const nextpage = () => {
      if (page === 'date') {
         return 'bikes'
      }
      if (page === 'bikes') {
         return 'address'
      }
      if (page === 'address') {
         return 'resume'
      }
   }

   const prevpage = () => {
      if (page === 'bikes') {
         return 'date'
      }
      if (page === 'address') {
         return 'bikes'
      }
      if (page === 'resume') {
         return 'address'
      }
   }

   console.log('pageControl page', page)
   const BUTTON_CN = 'mt-4'
   return (
      <div className="flex justify-evenly">
         <Link href={`/bookingg/${prevpage()}`}>
            {' '}
            <Button className="mt-4">Atrás</Button>
         </Link>

         <Link href={`/bookingg/${nextpage()}`}>
            {' '}
            <Button className="mt-4">Siguiente</Button>
         </Link>
      </div>
   )
}

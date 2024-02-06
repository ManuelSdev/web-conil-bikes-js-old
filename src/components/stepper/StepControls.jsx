import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

export default function StepControls({
   page,
   nextIsActive,
   renderNextButton,
   renderPrevButton,
}) {
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
   const BUTTON_CN = 'mt-4 text-greenCorp'

   return renderPrevButton ? (
      <div className="flex justify-evenly">
         {renderPrevButton({ renderClassName: BUTTON_CN })}
         {renderNextButton({ renderClassName: BUTTON_CN })}
      </div>
   ) : (
      <div className="flex justify-evenly">
         {renderNextButton({ renderClassName: BUTTON_CN })}
      </div>
   )
}

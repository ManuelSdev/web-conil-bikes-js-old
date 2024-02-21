import { DialogLoader } from '@/components/common/DialogLoader'
import React from 'react'
import loading from './loading.module.css'
export default function Loading() {
   return (
      <div className="relative h-screen w-screen bg-black">
         <div id={loading['loop']} className={loading['center']}></div>
         <div id={loading['bike-wrapper']} className={loading['center']}>
            <div id={loading['bike']} className={loading['centerBike']}></div>
         </div>
      </div>
   )
}

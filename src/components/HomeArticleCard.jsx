import React from 'react'
import Paper from './common/Paper'
import A from '../../public/images/home/rent.webp'
import Image from 'next/image'
export default function HomeArticleCard({ src }) {
   return (
      <Paper
         className={
            'flex w-full flex-col items-center justify-start overflow-hidden rounded bg-slate-200 pb-4'
         }
      >
         <div className="relative w-full overflow-hidden">
            <Image src={src} />
         </div>
      </Paper>
   )
}

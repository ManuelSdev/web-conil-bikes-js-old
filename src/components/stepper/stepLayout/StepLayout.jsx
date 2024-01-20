import React from 'react'
import { ResumeCard } from './ResumeCard'

export default function StepLayout({ children }) {
   return (
      <div className="flex flex-col-reverse gap-5 md:flex-row">
         <div className="grow bg-slate-50">{children}</div>
         <div className="md:w-[280px] ">
            <ResumeCard />
         </div>
      </div>
   )
}

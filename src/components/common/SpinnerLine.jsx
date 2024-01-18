import React from 'react'

export default function SpinnerLine() {
   return (
      <div className="w-full">
         <div className="h-1.5 w-full overflow-hidden bg-pink-100">
            <div className="animate-progress origin-left-right h-full w-full bg-pink-500"></div>
         </div>
      </div>
   )
}

import React from 'react'

export default function layout({ b, c, children }) {
   //console.log('layout props -> ', props)
   return (
      <div className="flex">
         <div className="flex-none">{b}</div>
         <div className="flex-initial ">{c}</div>
         {children}
      </div>
   )
}

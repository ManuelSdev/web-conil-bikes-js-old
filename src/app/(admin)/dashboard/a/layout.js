import React from 'react'

export default function layout(props) {
   console.log('layout props -> ', props.b)
   return (
      <div className="flex flex-col">
         <div className="flex-none">{props.c}</div>
         <div className="flex-none">{props.d}</div>
         <div className="flex-none">{props.b}</div>

         {props.children}
      </div>
   )
}

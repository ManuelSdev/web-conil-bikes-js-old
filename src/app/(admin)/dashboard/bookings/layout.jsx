import React from 'react'

export default function layout({
   calendar,
   bookingList,
   bookingInfo,
   ...props
}) {
   //console.log('layout props -> ', props)
   return (
      <div className="flex">
         <div className="flex-none">{calendar}</div>
         <div className="flex-initial ">{bookingList}</div>
         <div className="flex-initial ">{bookingInfo}</div>
      </div>
   )
}

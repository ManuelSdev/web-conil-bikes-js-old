import React from 'react'

export default function layout(props) {
   //console.log('layout props -> ', props)
   return (
      <div>
         {props.children}
         {props.userList}
         {props.oneUser}
         {props.bikes}
      </div>
   )
}

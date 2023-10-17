import React from 'react'

export default function layout(props) {
   return (
      <div>
         {props.children}
         {props.userList}
         {props.oneUser}
      </div>
   )
}

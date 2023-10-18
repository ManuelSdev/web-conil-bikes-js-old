import React from 'react'

export default function layout(props) {
   console.log('layout @oneUser props -> ', props)
   return <div>{props.children}</div>
}

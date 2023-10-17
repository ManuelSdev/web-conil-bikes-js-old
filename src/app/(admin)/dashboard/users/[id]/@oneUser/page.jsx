import React from 'react'

export default function page({ params }) {
   console.log('@oneUser params -> ', params)
   const { id } = params
   return <div>One user page id: {id}</div>
}

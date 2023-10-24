import React from 'react'
import { headers } from 'next/headers'

export default function UserPage(props) {
   const headersList = headers()
   const referer = headersList.get('referer')
   console.log('props ->', props)
   return <div>UserPage: {referer}</div>
}

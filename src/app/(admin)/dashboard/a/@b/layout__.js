import Link from 'next/link'
import React from 'react'

export default function Layout(props) {
   console.log('layout props ------------------------> ', props)
   return (
      <div>
         <nav>
            <Link href="/dashboard/a/uno">Page Views</Link>
            <Link href="/dashboard/a/dos">Visitors</Link>
         </nav>
         <div>{props.children}</div>
      </div>
   )
}

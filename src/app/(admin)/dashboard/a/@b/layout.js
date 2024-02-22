import React from 'react'

export default function layout({ children }) {
   return (
      <div>
         <nav>
            <Link href="/dashboard/a/uno">Page Views</Link>
            <Link href="/dashboard/a/dos">Visitors</Link>
         </nav>
         <div>{children}</div>
      </div>
   )
}

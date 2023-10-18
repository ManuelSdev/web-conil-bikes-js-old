import Link from 'next/link'
import React from 'react'

export default function page() {
   return (
      <Link href="/dashboard/users/list/4">
         <div>Página userList</div>
      </Link>
   )
}

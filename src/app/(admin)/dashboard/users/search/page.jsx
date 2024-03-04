import React from 'react'
import UsersTableHandler from './UsersTableHandler'
import UsersSubShell from '@/components/layouts/admin/UsersSubShell'

export default function SearchUsersPage({ searchParams }) {
   console.log('searchParams -> ', searchParams)
   const { identifier } = searchParams

   return (
      <UsersSubShell>
         {' '}
         <UsersTableHandler identifier={identifier} />
      </UsersSubShell>
   )
}

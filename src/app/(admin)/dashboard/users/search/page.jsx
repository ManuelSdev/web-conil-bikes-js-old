import React from 'react'
import UsersTableHandler from './UsersTableHandler'
import UsersSubShell from '../UsersSubShell'

export default function SearchUsersPage({ searchParams }) {
   console.log('searchParams -> ', searchParams)
   //const { identifier } = searchParams

   return (
      <UsersSubShell>
         {' '}
         <UsersTableHandler searchParams={searchParams} />
      </UsersSubShell>
   )
}

import React from 'react'
import UsersTableHandler from './UsersTableHandler'

export default function SearchUsersPage({ searchParams }) {
   console.log('searchParams -> ', searchParams)
   const { searchKey } = searchParams

   return <UsersTableHandler searchKey={searchKey} />
}

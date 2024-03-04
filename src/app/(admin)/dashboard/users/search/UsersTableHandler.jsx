'use client'
import React from 'react'
//import { getBookingOnDate } from '@/lib/pg/crud/bookings'
import UsersTable from './UsersTable'
import { useGetUserByIdentifierQuery } from '@/lib/redux/apiSlices/userApi'

export default function UsersTableHandler({ identifier, ...props }) {
   console.log('identifier -> ', identifier)
   const {
      data: users,
      isLoading,
      isSuccess,
      refetch,
      isFetching,
      originalArgs,
   } = useGetUserByIdentifierQuery(identifier, {
      skip: !identifier,
      // refetchOnMountOrArgChange: true
   })
   console.log('data -> ', users)

   return <UsersTable users={users} {...props} />
   return (
      <div>
         <div>is fetching: {isFetching}</div>
         <div>isSuccess: {isSuccess}</div>
      </div>
   )
}
/*
async function getBookingListData(date) {
   if (!date) {
      return null
   }
   const res = await getBookingOnDate(date)
   const bookings = await res.json()
   return bookings
}
*/

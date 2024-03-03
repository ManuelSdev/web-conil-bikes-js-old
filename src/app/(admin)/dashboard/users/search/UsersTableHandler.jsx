'use client'
import React from 'react'
//import { getBookingOnDate } from '@/lib/pg/crud/bookings'
import UsersTable from './UsersTable'
import { useGetUserByIdentifierQuery } from '@/lib/redux/apiSlices/userApi'

export default function UsersTableHandler({ searchKey, ...props }) {
   console.log('searchKey -> ', searchKey)
   const {
      data: users,
      isLoading,
      isSuccess,
      refetch,
      isFetching,
      originalArgs,
   } = useGetUserByIdentifierQuery(searchKey, {
      skip: !searchKey,
      // refetchOnMountOrArgChange: true
   })
   console.log('data -> ', users)
   return (
      <div>
         <div>is fetching: {isFetching}</div>
         <div>isSuccess: {isSuccess}</div>
      </div>
   )
   return <UsersTable users={users} {...props} />
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

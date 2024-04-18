'use client'
import React from 'react'
//import { getBookingOnDate } from '@/lib/pg/crud/bookings'

import useMatchingUsers from '@/hooks/useMatchingUsers'
import UsersTable from '@/app/(admin)/dashboard/users/search/UsersTable'

export default function MatchingUsersTableHandler({ searchParams, ...props }) {
   const { phone, email } = searchParams
   const {
      users,
      isLoading,
      isSuccess,
      refetch,
      isFetching,
      originalArgs,
      alerts,
      checkedUsers,
   } = useMatchingUsers({ phone, email })

   return <UsersTable users={checkedUsers} {...props} />

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

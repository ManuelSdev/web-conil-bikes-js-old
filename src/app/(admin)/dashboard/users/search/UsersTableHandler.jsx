'use client'
import React from 'react'
//import { getBookingOnDate } from '@/lib/pg/crud/bookings'
import UsersTable from './UsersTable'
import {
   useGetMatchingUsersQuery,
   useGetUserByIdentifierQuery,
} from '@/lib/redux/apiSlices/userApi'
import { ErrorAlert } from '@/components/ErrorAlert'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function UsersTableHandler({ searchParams, ...props }) {
   const { identifier } = searchParams
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

   const renderAddBookingButton = (className) => (
      <Button asChild className={className}>
         <Link href="/admin/dashboard/bookings/new/date">Crear reserva</Link>
      </Button>
   )

   const renderShowButton = (className) => (
      <Button asChild className={className}>
         <Link href="/admin/dashboard/bookings/new/date">Ver</Link>
      </Button>
   )
   return (
      <UsersTable
         users={users}
         renderAddBookingButton={renderAddBookingButton}
         renderShowButton={renderShowButton}
         {...props}
      />
   )

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

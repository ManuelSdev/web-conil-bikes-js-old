// @ts-nocheck
import { getBookingById, getBookingOnDate } from '@/utils/crudApiFns/dates'
import React from 'react'

import { PENDING } from '@/utils/app/appValues'
import { mappedBookingState } from '@/utils/app/functions'
import MyTabs from '@/components/MyTab'
import BookingTabs from '@/components/BookingTabs'
import TabsExample from '@/components/TabsExample'

export default async function BookingListPage({ params }) {
   const { id } = params
   const res = await getBookingById(id)
   const booking = await res.json()

   console.log('BookingListPage  bookings-> ', booking)

   return (
      <div>
         <BookingTabs bookingData={booking} />
      </div>
   )
}

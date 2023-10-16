// @ts-nocheck
import {
   getBookingById,
   getBookingOnDate,
   getBookingWithBikesById,
} from '@/utils/crudApiFns/bookings'
import React from 'react'

import { PENDING } from '@/utils/app/appValues'
import { mappedBookingState } from '@/utils/app/functions'
import MyTabs from '@/components/MyTab'
import BookingTabs from '@/components/BookingTabs'
import TabsExample from '@/components/TabsExample'

export default async function BookingListPage({ params }) {
   const { id } = params
   //const res = await getBookingById(id)
   const res = await getBookingWithBikesById(id)
   const { booking, bikes } = await res.json()

   console.log('BookingListPage  bookings-> ', bikes)

   return (
      <div>
         <BookingTabs bookingData={booking} bikes={bikes} />
      </div>
   )
}

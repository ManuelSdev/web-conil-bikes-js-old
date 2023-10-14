// @ts-nocheck
import { getBookingById, getBookingOnDate } from '@/utils/crudApiFns/dates'
import React from 'react'

import {
   Table,
   TableBody,
   TableCell,
   TableHead,
   TableHeader,
   TablePanel,
   TableRow,
   TableWrapper,
} from '@/components/table/table'
import { PENDING } from '@/utils/app/appValues'
import { mappedBookingState } from '@/utils/app/functions'
import Tabs from '@/components/Tabs'
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/decodeURIComponent

export default async function BookingListPage({ params }) {
   const { id } = params
   const res = await getBookingById(id)
   const booking = await res.json()
   console.log('BookingListPage  bookings-> ', booking)

   return <Tabs />
}

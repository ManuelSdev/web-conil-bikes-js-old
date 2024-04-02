import React from 'react'
import BookingSubShell from './BookingSubShell'
import { BookingBreadcrumb } from './BookingBreadcrumb'

export default function DashboardBookingLayout(props) {
   return <BookingSubShell>{props.children}</BookingSubShell>
}

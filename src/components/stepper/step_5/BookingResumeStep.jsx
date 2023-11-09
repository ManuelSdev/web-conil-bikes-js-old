'use client'
import { selectBookingManagement } from '@/lib/redux/slices/bookingFormSlice'
import React from 'react'
import { useSelector } from 'react-redux'
import BookingResume from './BookingResume'
import MobileBottomAppBar from '@/components/layouts/site/MobileBottomAppBar'

export default function BookingResumeStep(props) {
   return (
      <div>
         <BookingResume {...props} />
         <MobileBottomAppBar {...props} />
      </div>
   )
}

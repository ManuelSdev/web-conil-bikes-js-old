'use client'
import { selectBookingManagement } from '@/lib/redux/slices/bookingFormSlice'
import React from 'react'
import { useSelector } from 'react-redux'

export default function ResumeStep() {
   const bookingManagement = useSelector(selectBookingManagement)

   return <div>ResumeStep</div>
}

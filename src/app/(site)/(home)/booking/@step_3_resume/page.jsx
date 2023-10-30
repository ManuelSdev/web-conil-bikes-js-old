import React from 'react'

export default function StepThreeBookingPage({ searchParams }) {
   const { date: encodedDate, step } = searchParams

   if (step !== '3') return null
   return <RangeDatePicker />
}

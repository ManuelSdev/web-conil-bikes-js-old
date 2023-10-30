import React from 'react'

export default function StepTwoBookingPage({ searchParams }) {
   const { from: encodedFromDate, to: encodedToDate, step } = searchParams
   if (step !== '2') return null
   return <RangeDatePicker />
}

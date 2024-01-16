import React from 'react'
import { BookingManagementForm } from './BookingManagementForm'
import MobileBottomAppBar from '@/components/layouts/site/MobileBottomAppBar'

export default function BookingManagementStep(props) {
   return (
      <div>
         <BookingManagementForm {...props} />
         {/* <MobileBottomAppBar {...props} />*/}
      </div>
   )
}

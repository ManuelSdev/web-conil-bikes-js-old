import SearchUserFormHandler from '@/components/layouts/admin/SearchUserFormHandler'

import React from 'react'

import BookingSubShell from '../../BookingSubShell'
import Step from '@/components/stepper/Step'
import NewUserFormHandler from '../../../users/new/NewUserFormHandler'

export default function DashBoardNewBookingPage({ searchParams }) {
   return (
      <div step={1} isAdmin={true}>
         <div>Usuario existente</div>
         <SearchUserFormHandler />
         <div>Nuevo usuario</div>
         <NewUserFormHandler searchParams={searchParams} />
      </div>
   )
}

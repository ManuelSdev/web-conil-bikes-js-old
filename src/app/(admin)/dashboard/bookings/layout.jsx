import React from 'react'
import BookingSubShell from './BookingSubShell'
import { BookingBreadcrumb } from './BookingBreadcrumb'
import BookingPageShell from './BookingPageShell'
import {
   AdminPageContent,
   AdminPageHeader,
   AdminPageHeaderTitle,
   AdminPageShell,
} from '@/components/layouts/admin/adminPageShell'

export default function DashboardBookingLayout(props) {
   return (
      <AdminPageShell>
         <AdminPageHeader>
            <AdminPageHeaderTitle>Reservas</AdminPageHeaderTitle>
         </AdminPageHeader>
         <AdminPageContent {...props} />
      </AdminPageShell>
   )
}

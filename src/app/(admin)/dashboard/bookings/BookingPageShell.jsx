import React, { Suspense } from 'react'

import {
   AdminPageContent,
   AdminPageHeader,
   AdminPageHeaderButtons,
   AdminPageHeaderTitle,
   AdminPageShell,
} from '@/components/layouts/admin/adminPageShell'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function BookingPageShell({ children }) {
   return (
      <AdminPageShell>
         <AdminPageHeader>
            <AdminPageHeaderTitle>Reservas</AdminPageHeaderTitle>
            <AdminPageHeaderButtons>
               {' '}
               <Button asChild>
                  <Link href="/dashboard/bookings/new/user">Nueva reserva</Link>
               </Button>
            </AdminPageHeaderButtons>
         </AdminPageHeader>
         <AdminPageContent>{children}</AdminPageContent>
      </AdminPageShell>
   )
}

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

export default function UserPageShell({ children }) {
   return (
      <AdminPageShell>
         <AdminPageHeader>
            <AdminPageHeaderTitle>Usuarios</AdminPageHeaderTitle>
            <AdminPageHeaderButtons>
               {' '}
               <Button asChild>
                  <Link href="/dashboard/users/new">Crear usuario</Link>
               </Button>
            </AdminPageHeaderButtons>
         </AdminPageHeader>
         <AdminPageContent>{children}</AdminPageContent>
      </AdminPageShell>
   )
}

import MainNav from '@/components/admin/MainNav'
import React from 'react'
import UserPageShell from './UserPageShell'
import {
   AdminPageContent,
   AdminPageHeader,
   AdminPageHeaderTitle,
   AdminPageShell,
} from '@/components/layouts/admin/adminPageShell'

export default function layout(props) {
   //console.log('layout props -> ', props)

   return (
      <AdminPageShell>
         <AdminPageHeader>
            <AdminPageHeaderTitle>Usuarios</AdminPageHeaderTitle>
         </AdminPageHeader>
         <AdminPageContent {...props} />
      </AdminPageShell>
   )
}

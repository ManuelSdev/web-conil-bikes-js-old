import SearchUserFormHandler from '@/components/layouts/admin/SearchUserFormHandler'
import UsersSubShell from '@/components/layouts/admin/UsersSubShell'
import React from 'react'
import NewUserFormHandler from '../../users/new/NewUserFormHandler'

export default function DashBoardNewBookingPage() {
   return (
      <UsersSubShell>
         <div>Usuario existente</div>
         <SearchUserFormHandler />
         <div>Nuevo usuario</div>
         <NewUserFormHandler />
      </UsersSubShell>
   )
}

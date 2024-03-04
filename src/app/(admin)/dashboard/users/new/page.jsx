import Card from '@/components/layouts/Card'
import React from 'react'
import { User } from '@phosphor-icons/react/dist/ssr'
import UsersSubShell from '@/components/layouts/admin/UsersSubShell'
import { NewUserForm } from './NewUserForm'

export default function NewUserPage() {
   const cardProps = {
      //className: 'max-w-[334px]',
      // className: 'col-span-4',
      cardTitle: 'Datos del nuevo usuario',
      // cardDescription: 'Hin reverse chronological order.',
   }
   return (
      <UsersSubShell>
         <Card {...cardProps}>
            <NewUserForm />
         </Card>
      </UsersSubShell>
   )
}

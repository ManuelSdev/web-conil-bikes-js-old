import Card from '@/components/layouts/Card'
import React from 'react'
import { User } from '@phosphor-icons/react/dist/ssr'
import { NewUserForm } from './NewUserForm'
import UsersSubShell from '../UsersSubShell'
import NewUserFormHandler from './NewUserFormHandler'

export default function AdminNewUserPage({ searchParams }) {
   const cardProps = {
      //className: 'max-w-[334px]',
      // className: 'col-span-4',
      cardTitle: 'Datos del nuevo usuario',
      // cardDescription: 'Hin reverse chronological order.',
   }
   return <NewUserFormHandler searchParams={searchParams} />
}

/*
<UsersSubShell>
<Card {...cardProps}>
   <NewUserForm />
</Card>
</UsersSubShell>
*/

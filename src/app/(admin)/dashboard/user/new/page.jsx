import Card from '@/components/layouts/Card'
import React from 'react'
import { NewUserForm } from './components/NewUserForm'

export default function page() {
   const cardProps = {
      //className: 'max-w-[334px]',
      // className: 'col-span-4',
      cardTitle: 'Datos del nuevo usuario',
      // cardDescription: 'Hin reverse chronological order.',
   }
   return (
      <Card {...cardProps}>
         <NewUserForm />
      </Card>
   )
}

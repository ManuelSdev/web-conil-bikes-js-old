import MainNav from '@/components/admin/MainNav'
import React from 'react'
import UserPageShell from './UserPageShell'

export default function layout({ children }) {
   //console.log('layout props -> ', props)

   return <UserPageShell>{children}</UserPageShell>
}

import MainNav from '@/components/admin/MainNav'
import React from 'react'

export default function layout({ children }) {
   //console.log('layout props -> ', props)

   return (
      <div>
         <MainNav />
         {children}
      </div>
   )
}

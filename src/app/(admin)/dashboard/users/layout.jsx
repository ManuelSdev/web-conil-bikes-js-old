import MainNav from '@/components/admin/MainNav'
import React from 'react'

export default function layout({
   userProfile,
   userList,
   newUser,
   className,
   ...props
}) {
   //console.log('layout props -> ', props)

   return (
      <div>
         <MainNav />
         {userProfile}
         {userList}
         {newUser}
      </div>
   )
}

import React from 'react'

import { findUserById } from '@/lib/pg/repos/users'
import UserTabs from './UserTabs'
import { findBookingByUserId } from '@/lib/pg/repos/booking'

export default async function AdminUserDetailsPage({ params }) {
   const { id: userId } = params
   const user = await findUserById(userId)
   const bookings = await findBookingByUserId(userId)
   console.log('user ->', user)
   console.log('bookings ->', bookings)
   return <UserTabs user={user} bookings={bookings} />
}

/*
<UsersSubShell>
<Card {...cardProps}>
   <NewUserForm />
</Card>
</UsersSubShell>
*/

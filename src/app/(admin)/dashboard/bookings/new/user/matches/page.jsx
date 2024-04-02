import React from 'react'
import MatchingUsersTableHandler from './MatchingUsersTableHandler'
import MatchesAlert from './MatchesAlert'
import UsersSubShell from '@/app/(admin)/dashboard/users/UsersSubShell'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function SearchUsersPage({ searchParams }) {
   console.log('searchParams -> ', searchParams)
   const { phone, email, name } = searchParams

   return (
      <>
         <MatchesAlert searchParams={searchParams} />
         <Button asChild className="mt-4">
            <Link
               //href={`/dashboard/bookings/new/user?phone=${phone}&email=${email}&name=${name}`}
               href="/dashboard/bookings/new/user"
            >
               <ArrowLeft weight="bold" className="mr-2 h-4 w-4" />
               Atrás
            </Link>
         </Button>
         <MatchingUsersTableHandler searchParams={searchParams} />
      </>
   )
}

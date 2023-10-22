import SignInFormCard from '@/components/layouts/auth/SignInFormCard'
import { SignInForm } from '@/components/layouts/auth/SignInForm'
import React from 'react'

export default function AdminLoginPage() {
   return (
      <SignInFormCard isAdmin={true}>
         <SignInForm />
      </SignInFormCard>
   )
}

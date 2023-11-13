import { SignInForm } from '@/components/layouts/auth/SignInForm'
import SignInFormCard from '@/components/layouts/auth/SignInFormCard'
import React from 'react'

export default function UserSignInPage() {
   const label = 'Inicia sesión en tu cuenta'
   return (
      <SignInFormCard label={label}>
         <SignInForm />
      </SignInFormCard>
   )
}

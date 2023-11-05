import SignInFormCard from '@/components/layouts/auth/SignInFormCard'
import { SignInForm } from '@/components/layouts/auth/SignInForm'
import React from 'react'
import ReduxProviderWrapper from '@/lib/redux/ReduxProviderWrapper'

export default function AdminLoginPage() {
   return (
      <ReduxProviderWrapper>
         <SignInFormCard isAdmin={true}>
            <SignInForm />
         </SignInFormCard>
      </ReduxProviderWrapper>
   )
}

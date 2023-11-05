import { SignInForm } from '@/components/layouts/auth/SignInForm'
import SignInFormCard from '@/components/layouts/auth/SignInFormCard'
import ReduxProviderWrapper from '@/lib/redux/ReduxProviderWrapper'
import React from 'react'

export default function UserSignInPage() {
   const label = 'Inicia sesión en tu cuentas'
   return (
      <ReduxProviderWrapper>
         <SignInFormCard label={label}>
            <SignInForm />
         </SignInFormCard>
      </ReduxProviderWrapper>
   )
}

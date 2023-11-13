import SignInFormCard from '@/components/layouts/auth/SignInFormCard'
import { SignInForm } from '@/components/layouts/auth/SignInForm'
import React from 'react'
import SigInFormPageHandler from '@/components/auth/SigInFormPageHandler'

export default function AdminLoginPage() {
   return <SigInFormPageHandler isAdmin={true} />
}

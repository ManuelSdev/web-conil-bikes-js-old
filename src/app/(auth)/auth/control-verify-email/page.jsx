import RecoverEmailPageHandler from '@/components/auth/emailActions/RecoverEmailPageHandler'
import ResetPasswordPageHandler from '@/components/auth/emailActions/ResetPasswordPageHandler'
import VeriffyEmailFormPageHandler from '@/components/auth/emailActions/VeriffyEmailFormPageHandler'
import { VerifyEmailForm } from '@/components/auth/emailActions/VerifyEmailForm'
import { app } from '@/lib/firebase/client/firebaseClient'

import { applyActionCode, getAuth } from 'firebase/auth'
import { redirect } from 'next/navigation'
import React from 'react'

export default async function VeriffyEmailPage({ searchParams }) {
   const { error_code } = searchParams
   const isVerifyError = error_code ? JSON.parse(error_code) : false
   return <VeriffyEmailFormPageHandler isVerifyError={isVerifyError} />
}

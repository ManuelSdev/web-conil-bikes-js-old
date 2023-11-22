import RecoverEmailPageHandler from '@/components/auth/emailActions/RecoverEmailPageHandler'
import ResetPasswordPageHandler from '@/components/auth/emailActions/ResetPasswordPageHandler'
import VeriffyEmailFormPageHandler from '@/components/auth/emailActions/VeriffyEmailFormPageHandler'
import { app } from '@/lib/firebase/client/firebaseClient'

import { applyActionCode, getAuth } from 'firebase/auth'
import { redirect } from 'next/navigation'
import React from 'react'

export default async function FireEmailActionsControlPage({ searchParams }) {
   const { mode, oobCode: actionCode, apiKey, continueUrl, lang } = searchParams

   console.log('searchParams -> ', searchParams)
   if (mode === 'verifyEmail') {
      /**
       * Si applyActionCode no lanza error, entonces el código es válido
       * y se ha verificado la cuenta. Ahora redirecciono a la página de login
       * y le paso como query param verified=true. Esto permite que, al
       * redireccionar a la página de login, se muestre un modal con
       * un mensaje de cuenta verificada.
       */
      try {
         const auth = getAuth(app)
         await applyActionCode(auth, actionCode)

         //return <VerifyEmailHandler searchParams={searchParams} />
      } catch (error) {
         console.log('Error en verificiación de código -> ', error)
         redirect('/auth/control-verify-email?error_code=true')
         return <VeriffyEmailFormPageHandler isVerifyError={true} />
      }
      redirect('/auth/sign-in?verified=true')
   }
   if (mode === 'resetPassword')
      return <ResetPasswordPageHandler searchParams={searchParams} />
   if (mode === 'recoverEmail')
      return <RecoverEmailPageHandler searchParams={searchParams} />
}

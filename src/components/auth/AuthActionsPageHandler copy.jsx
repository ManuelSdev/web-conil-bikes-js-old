'use client'
import { app } from '@/lib/firebase/client/firebaseClient'
import { applyActionCode, getAuth, onAuthStateChanged } from 'firebase/auth'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export default function AuthActionsPageHandler({ searchParams }) {
   const { mode, oobCode: actionCode, apiKey, continueUrl, lang } = searchParams
   console.log('actionCode -> ', actionCode)
   const auth = getAuth(app)
   onAuthStateChanged(auth, (user) =>
      console.log('user onAuthStateChanged -> ', user)
   )

   const [controlData, setcontrolData] = useState({
      msg: '',
      url: '/',
      buttonText: 'Aceptar',
   })
   const { msg, url, buttonText } = controlData

   useEffect(() => {
      const controlFn = async (mode) => {
         switch (mode) {
            case 'resetPassword':
               // Display reset password handler and UI.
               handleResetPassword(auth, actionCode, continueUrl, lang)
               break

            case 'recoverEmail':
               // Display email recovery handler and UI.
               handleRecoverEmail(auth, actionCode, lang)
               break
            case 'verifyEmail':
               // Display email verification handler and UI.
               // console.log('router.query en AuthControlPage -> ', router.query)
               try {
                  console.log('auth at  verifyEmail-> ', auth)
                  const verifyCodeResp = await applyActionCode(auth, actionCode)
                  console.log('verifyCodeResp -> ', verifyCodeResp)
                  // const action=()=>
                  setcontrolData({
                     ...controlData,
                     msg: 'Cuenta verificada',
                  })
               } catch (error) {
                  setcontrolData({
                     ...controlData,
                     msg: 'Error en verificiación',
                  })
                  console.log('Error en verificiación de código -> ', error)
               }

               break
            default:
            // Error: invalid mode.
         }
      }
      controlFn(mode)
   }, [])
   return msg !== '' ? (
      <Link href={url}>{buttonText}</Link>
   ) : (
      <div> LOADING ...</div>
   )
}

'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import React, { useEffect } from 'react'
import { SignInForm } from './SignInForm'
import useFirebaseAuth from '@/lib/firebase/client/useFirebaseAuth'
import AuthFormCard from './AuthFormCard'
import { Button } from '../ui/button'
import GoogleIcon from '../svg/GoogleIcon'
import Link from 'next/link'
import useOnAuthStateChange from '@/lib/firebase/client/useOnAuthStateChange'

export default function SigInFormPageHandler({ isAdmin }) {
   console.log('@@ RENDER SigInFormPageHandler @@')
   const { doSignInWithEmailAndPassword, doSignInWithRedirect } =
      useFirebaseAuth()
   /*
   const { authUser, loading: loadingOnAuthStateChange } =
      useOnAuthStateChange()
   console.log('loadingUseFirebaseAuth -> ', loadingUseFirebaseAuth)
   console.log('loadingOnAuthStateChange -> ', loadingOnAuthStateChange)
   //doGetRedirectResult()

   useEffect(() => {
      console.log('authUser -> ', authUser)
      authUser && doGetRedirectResult()
      // authUser && doCreateSessionCookie(authUser.accessToken)
   }, [authUser])
*/
   //if (loadingOnAuthStateChange) return <div>loadingOnAuthStateChange signin page: wait for authUser...</div>

   async function onSubmit(data, event) {
      console.log('data ->', data)
      console.log('ev ->', event)
      event.preventDefault()
      const { email, password } = data
      try {
         console.log('data ->', data)
         console.log('ev ->', event)
         //  await doSignInWithEmailAndPassword({ email, password })
      } catch (error) {
         //handleOpen(error)
         console.log('doSignInWithEmailAndPassword ERROR -> ', error)
      }
   }

   const renderSubmitButton = (props) => (
      <Button {...props} type="submit">
         Iniciar sesións
      </Button>
   )
   const renderGoogleButton = (props) => (
      <Button onClick={doSignInWithRedirect} {...props}>
         <GoogleIcon className="mr-2 h-6 w-6" />
         INICIAR SESIÓN CON GOOGLE
      </Button>
   )
   const renderOptionalLinkLeft = (props) => (
      <Link href="/auth/reset" {...props}>
         ¿Olvidaste la contraseña?
      </Link>
   )
   const renderOptionalLinkRight = (props) => (
      <Link href="/auth/sign-up" {...props}>
         Crear cuenta
      </Link>
   )
   //  loadingUseFirebaseAuth || loadingOnAuthStateChange ? (<div>loadingOnAuthStateChange signin page: wait for authUser...</div>) :

   return (
      <div>
         <AuthFormCard
            label={'Inicio de sesión'}
            renderOptionalLinkLeft={renderOptionalLinkLeft}
            renderOptionalLinkRight={!isAdmin && renderOptionalLinkRight}
            renderGoogleButton={!isAdmin && renderGoogleButton}
         >
            <SignInForm onSubmit={onSubmit}></SignInForm>
         </AuthFormCard>
      </div>
   )
}

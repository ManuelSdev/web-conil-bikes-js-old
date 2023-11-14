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
   const {
      doSignInWithEmailAndPassword,
      doSignInWithRedirect,
      doGetRedirectResult,
      doCreateSessionCookie,
      loadingUseFirebaseAuth,
   } = useFirebaseAuth()
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
   const FormSchema = z.object({
      username: z.string().min(2, {
         message: 'Username must be at least 2 characters.',
      }),
   })

   const form = useForm({
      // resolver: zodResolver(FormSchema),
      defaultValues: {
         email: '',
         password: '',
      },
   })

   async function onSubmit(data, event) {
      //console.log('data ->', data)
      // console.log('ev ->', ev)
      event.preventDefault()
      const { email, password } = data
      try {
         await doSignInWithEmailAndPassword({ email, password })
      } catch (error) {
         //handleOpen(error)
         console.log('doSignInWithEmailAndPassword ERROR -> ', error)
      }
   }

   const renderSubmitButton = (props) => (
      <Button {...props} type="submit">
         Iniciar sesión
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
            renderSubmitButton={renderSubmitButton}
            renderOptionalLinkLeft={renderOptionalLinkLeft}
            renderOptionalLinkRight={!isAdmin && renderOptionalLinkRight}
            renderGoogleButton={!isAdmin && renderGoogleButton}
         >
            <SignInForm form={form} onSubmit={onSubmit}></SignInForm>
         </AuthFormCard>
      </div>
   )
}

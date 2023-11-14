'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import React from 'react'
import { SignInForm } from './SignInForm'
import useFirebaseAuth from '@/lib/firebase/client/useFirebaseAuth'
import AuthFormCard from './AuthFormCard'
import { Button } from '../ui/button'
import GoogleIcon from '../svg/GoogleIcon'
import Link from 'next/link'
import { SignUpForm } from './SignUpForm'
import { useCreateAccountMutation } from '@/lib/redux/apiSlices/userApi'

export default function SigUpFormPageHandler({ isAdmin }) {
   const [
      createAccount,
      {
         // status,
         //  isUninitialized,
         isLoading,
         isSuccess,
         data,
         isError,
         reset,
      },
   ] = useCreateAccountMutation({ fixedCacheKey: 'createBooking-key' })

   /**
    * Confirmación de correo electrónico
    * https://stackoverflow.com/questions/73695535/how-to-check-confirm-password-with-zod
    */

   async function onSubmit(data, event) {
      console.log('data ->', data)
      // console.log('ev ->', ev)
      event.preventDefault()
      const { name, phone, email, password } = data
      try {
         await createAccount({ name, phone, email, password })
      } catch (error) {
         //handleOpen(error)
         console.log('ERROR:createAccount en SignUpFormPageHandler -> ', error)
      }
   }

   const renderSubmitButton = (props) => (
      <Button {...props} type="submit">
         Crear cuentas
      </Button>
   )

   const renderOptionalLinkLeft = (props) => (
      <Link href="/auth/reset" {...props}>
         ¿Ya tienes una cuenta? Inicia sesión
      </Link>
   )

   return (
      <div>
         <AuthFormCard
            label={'Inicio de sesión'}
            renderOptionalLinkLeft={renderOptionalLinkLeft}
         >
            <SignUpForm onSubmit={onSubmit}></SignUpForm>
         </AuthFormCard>
      </div>
   )
}

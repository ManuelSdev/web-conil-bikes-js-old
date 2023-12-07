'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import React, { useState } from 'react'
import { SignInForm } from './SignInForm'
import useFirebaseAuth from '@/lib/firebase/client/useFirebaseAuth'
import AuthFormCard from './AuthFormCard'
import { Button } from '../ui/button'
import GoogleIcon from '../svg/GoogleIcon'
import Link from 'next/link'
import { SignUpForm } from './SignUpForm'
import {
   useCreateAccountMutation,
   useCreateUserMutation,
} from '@/lib/redux/apiSlices/userApi'
import useDialogWindow from '../common/useDialogWindow'
import {
   useCreateFirebaseUserMutation,
   useFirebaseAdminActionsMutation,
   useLazyCreateFirebaseUserQuery,
} from '@/lib/redux/apiSlices/authApi'
import { signUpErrorHandler } from '@/lib/firebase/client/authErrorHandler'
import { DialogWindow } from '../common/DialogWindow'
import { is } from 'date-fns/locale'

export default function SigUpFormPageHandler({ isAdmin }) {
   /*
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
   */
   const [createFireUserTrigger] = useLazyCreateFirebaseUserQuery()
   const [fireAdminActionsTrigger] = useFirebaseAdminActionsMutation()
   const [createAppUserTrigger] = useCreateUserMutation()
   const { dialog, handleSetDialog } = useDialogWindow()

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
         //Creo usuario en firebase
         const resFireUser = await createFireUserTrigger({
            name,
            phone,
            email,
            password,
         })
         console.log('resFireUser -> ', resFireUser)
         const { isError } = resFireUser

         if (isError) {
            throw new Error(resFireUser.error)
         }

         const {
            data: {
               userRecord: { uid },
            },
         } = resFireUser
         //Creo usuario en la base de datos de la app
         //TODO: si no se crea, eliminar el usuario de firebase
         const createdAppUserId = await createAppUserTrigger({
            name,
            email,
            phone,
         })
         //Le asigno el id de usuario de la app al usuario de firebase
         const setCustomUserClaimsRes = await fireAdminActionsTrigger({
            uid,
            action: 'setCustomUserClaims',
            customClaims: { appId: createdAppUserId },
         })
         console.log('setCustomUserClaimsRes -> ', setCustomUserClaimsRes)
         //Obtengo el usuario de firebase para comprobar customClaims recien creados
         const getFirebaseUserRes = await fireAdminActionsTrigger({
            uid,
            action: 'getUser',
         })
         const {
            data: {
               customClaims: { appId },
            },
         } = getFirebaseUserRes
         console.log('getFirebaseUserRes -> ', getFirebaseUserRes)

         /*
         const { data: customToken } = await createAccount({
            name,
            phone,
            email,
            password,
         })

         setOnOpenChange({
            onOpenChange: (bool) => router.push('/auth/sign-in'),
         })
         setDialog({
            open: true,
            title: 'Se ha enviado un correo electrónico de verificación',
            description: `Se ha enviado un correo electrónico de verificación a '${email}'. Revisa tu bandeja de entrada y recuerda que es posible que lo encuentres en la carpeta de spam o correo no deseado`,
            closeText: 'Aceptar',
         })
         */
      } catch (error) {
         //handleOpen(error)
         const {
            data: { code },
         } = error
         console.log('ERROR:createAccount en SignUpFormPageHandler -> ', error)
         const dialogMessage = signUpErrorHandler(code)
         handleSetDialog({
            open: true,
            title: 'Ha ocurrido un error',
            description: dialogMessage,
            closeText: 'Aceptar',
         })
      }
   }

   const renderSubmitButton = (props) => (
      <Button {...props} type="submit">
         Crear cuentas
      </Button>
   )

   const renderOptionalLinkLeft = (props) => (
      <Link href="/auth/sign-in" {...props}>
         ¿Ya tienes una cuenta? Inicia sesión
      </Link>
   )

   return (
      <div>
         <DialogWindow {...dialog} />
         <AuthFormCard
            label={'Crear cuenta'}
            renderOptionalLinkLeft={renderOptionalLinkLeft}
         >
            <SignUpForm onSubmit={onSubmit}></SignUpForm>
         </AuthFormCard>
      </div>
   )
}

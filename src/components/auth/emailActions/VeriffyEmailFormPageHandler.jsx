'use client'

import React, { use, useEffect, useState } from 'react'
import useFirebaseAuth from '@/lib/firebase/client/useFirebaseAuth'
import AuthFormCard from '../AuthFormCard'
import { Button } from '../../ui/button'
import Link from 'next/link'
import { useCreateAccountMutation } from '@/lib/redux/apiSlices/userApi'
import { VerifyEmailForm } from './VerifyEmailForm'
import useDialogWindow from '@/components/common/useDialogWindow'
import { DialogWindow } from '@/components/common/DialogWindow'
import {
   useFirebaseAdminActionsMutation,
   useLazyGetUserDataQuery,
   useLazySendEmailVerificationQuery,
} from '@/lib/redux/apiSlices/authApi'
import { useRouter } from 'next/navigation'

export default function VeriffyEmailFormPageHandler({ isVerifyError }) {
   const { dialog, setDialog, toggleDialog, onOpenChange, setOnOpenChange } =
      useDialogWindow(null)

   useEffect(() => {
      if (isVerifyError) {
         const verificationErrorDialog = {
            open: true,
            title: 'Se ha producido un error al verificar el correo electrónico',
            description:
               'Es posible que el correo de verificación que te enviamos haya caducado. Por favor, introduce tu correo electrónico para volver a recibir un correo de verificación',
            closeText: 'Aceptar',
         }
         setDialog
      }
   }, [])

   const [getUserDataTrigger, { data, isSuccess, isFetching }] =
      useLazyGetUserDataQuery()
   const [fireAdminActionsTrigger] = useFirebaseAdminActionsMutation()

   const [sendEmailVerificationTrigger] = useLazySendEmailVerificationQuery()
   console.log('dialog ->', dialog)

   const { loading } = useFirebaseAuth()

   const [isEmailSent, setIsEmailSent] = useState(false)

   /**
    * Confirmación de correo electrónico
    * https://stackoverflow.com/questions/73695535/how-to-check-confirm-password-with-zod
    */
   const router = useRouter()
   async function onSubmit(data, event) {
      // console.log('data ->', data)
      // console.log('ev ->', ev)
      event.preventDefault()
      const { email } = data
      try {
         /**
          * Si no hay error, devuelve objeto rtk query con la propiedad data, que contiene
          * lo que mandas en la Response del endpoint
          * Cuando hay error, el objeto rtk query devuelto no contiene la propiedad data.
          * Contiene la propiedad error=
          * {status: 'el que hayas puesto en la Response del error,
          * data: {
          * code:'el código de error de firebase', por ejemplo "auth/user-not-found",
          * message: 'error message de firebase'}}
          * Tanto data como error las puedes extraer del objeto error del catch(error) en el route handler
          * https://firebase.google.com/docs/auth/admin/errors
          */
         const res = await getUserDataTrigger({ email })
         console.log('res ->', res)
         const { isError } = res

         if (isError) {
            const {
               error: {
                  data: { code, message },
               },
            } = res
            if (code === 'auth/user-not-found') {
               setDialog({
                  open: true,
                  title: 'Ha ocurrido un error',
                  description: `El correo electrónico '${email}' no está registrado`,
                  closeText: 'Aceptar',
               })
            }
         }

         if (!isError) {
            const {
               data: { displayName: name, emailVerified, uid },
            } = res

            if (emailVerified) {
               setOnOpenChange({
                  onOpenChange: (bool) => router.push('/auth/sign-in'),
               })

               setDialog({
                  open: true,
                  title: 'Esta cuenta ya fue verificada',
                  description: 'Puedes iniciar sesión con esta cuenta',
                  closeText: 'Aceptar',
               })
            }

            if (!emailVerified) {
               //TODO este error no tiene sentido
               const res = await sendEmailVerificationTrigger({ name, email })

               console.log('sendEmailVerificationTrigger res ->', res)

               const { data, isError } = res

               if (isError) {
                  const { code, message } = data

                  if (code === 'auth/user-not-found') {
                     setDialog({
                        open: true,
                        title: 'Ha ocurrido un error',
                        description: `Indeterminado`,
                        closeText: 'Aceptar',
                     })
                  }
               } else {
                  setOnOpenChange({
                     onOpenChange: (bool) => router.push('/auth/sign-in'),
                  })
                  setDialog({
                     open: true,
                     title: 'Se ha enviado un correo electrónico de verificación',
                     description: `Se ha enviado un correo electrónico de verificación a '${email}'. Revisa tu bandeja de entrada y recuerda que es posible que lo encuentres en la carpeta de spam o correo no deseado`,
                     closeText: 'Aceptar',
                  })
               }
            }
         }

         // const res = await doSendEmailVerification(email)

         /**
          * Con el customToken puedo obtener el usuario desde el cliente
          */
         //await doSendEmailVerification(customToken)
         // setIsEmailSent(true)
         //  console.log('ok ->', ok)
         // console.log('userRecord ->', userRecord)
      } catch (error) {
         //handleOpen(error)
         console.log(
            'ERROR:doSendEmailVerification en SignUpFormPageHandler -> ',
            error
         )
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

   return loading ? (
      <div>LOADING...</div>
   ) : (
      <div>
         <DialogWindow {...dialog} onOpenChange={onOpenChange} />
         <AuthFormCard
            label={'Verificación de correo electrónico'}
            renderOptionalLinkLeft={renderOptionalLinkLeft}
         >
            <VerifyEmailForm onSubmit={onSubmit}></VerifyEmailForm>
         </AuthFormCard>
      </div>
   )
}

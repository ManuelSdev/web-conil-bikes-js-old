'use client'
import Card from '@/components/layouts/Card'
import React from 'react'
import { NewUserForm } from './NewUserForm'
import {
   useCreateAccountMutation,
   useCreateUserMutation,
   useLazyGetMatchingUsersQuery,
} from '@/lib/redux/apiSlices/userApi'
import SpinnerRing from '@/components/common/SpinnerRing'
import useDialogWindow from '@/components/common/useDialogWindow'
import { DialogWindow } from '@/components/common/DialogWindow'
import { DialogLoader } from '@/components/common/DialogLoader'
import { useRouter } from 'next/navigation'
import { generatePassword } from '@/utils/app/functions'
export default function NewUserFormHandler(props) {
   const [createUserAccountTrigger, { isLoading, isError, isSuccess }] =
      useCreateAccountMutation()

   const [
      getMatchingUsersTrigger,
      {
         isLoading: isLoadingMatches,
         isError: isErrorMatches,
         isSuccess: isSuccessMatches,
      },
   ] = useLazyGetMatchingUsersQuery()

   const { dialog, handleSetDialog } = useDialogWindow()

   const router = useRouter()

   async function onSubmit(data, event) {
      //console.log('data ->', data)
      console.log('@@@@@@@@@@@@@@@@@@@')
      ////console.log('ev ->', ev)
      event.preventDefault()
      const { name, phone, email } = data
      try {
         console.log('@@@@@@@@@@@@@@@@@@@')
         const matchingUsers = await getMatchingUsersTrigger({ phone, email })
         if (matchingUsers)
            return router.push(
               `/dashboard/bookings/new/user/matches?phone=${phone}&email=${email}&name=${name}`
            )
         const randomPassword = generatePassword()
         const createUserAccountRes = await createUserAccountTrigger({
            name,
            phone,
            email,
            password: randomPassword,
            isCreatedByAdmin: true,
         }).unwrap()
         console.log('createUserAccountRes ->', createUserAccountRes)
         handleSetDialog({
            open: true,
            title: 'La cuenta se ha creado correctamente',
            description: `Se ha enviado un correo electrónico de verificación a '${email}'. Revisa tu bandeja de entrada y recuerda que es posible que lo encuentres en la carpeta de spam o correo no deseado`,
            closeText: 'Aceptar',
            onOpenChange: (bool) => router.push('/dashboard/bookings/new/date'),
         })
      } catch (error) {
         console.log('ERROR:createAccount en SignUpFormPageHandler -> ', error)
         //'email_unq' es el nombre la restriccion/constraint de la tabla app_users que señala la unicidad del campo email
         const text =
            error.data.constraint === 'email_unq'
               ? 'Ya existe un usuario con este correo eléctronico'
               : 'Ha ocurrido un error'
         handleSetDialog({
            open: true,
            title: 'Ha ocurrido un error',
            description: text,
            closeText: 'Aceptar',
         })
         /*
         const {
            error: {
               data: { code },
            },
         } = error
     
         //const dialogMessage = signUpErrorHandler(code)
         handleSetDialog({
            open: true,
            title: 'Ha ocurrido un error',
            // description: dialogMessage,
            closeText: 'Aceptar',
         })
         */
      }
   }
   console.log('isError ->', isError)
   return (
      <Card>
         <DialogLoader open={isLoading} />
         <DialogWindow {...dialog} />

         <NewUserForm onSubmit={onSubmit} {...props} />
      </Card>
   )
}

//         {isLoading?<SpinnerRing/>:isSuccess?'Usuario creado correctamente':isError?'Ha ocurrido un error': <NewUserForm />}
/*
      const createUserAccountRes = await createUserAccountTrigger({
         name,
         phone,
         email,
         password,
         isCreatedByAdmin: false,
      }).unwrap()
      

      const { isError } = createUserAccountRes
     
      if (!isError) {
         handleSetDialog({
            open: true,
            title: 'La cuenta se ha creado correctamente',
            description: `Se ha enviado un correo electrónico de verificación a '${email}'. Revisa tu bandeja de entrada y recuerda que es posible que lo encuentres en la carpeta de spam o correo no deseado`,
            closeText: 'Aceptar',
            onOpenChange: (bool) => router.push('/dashboard/bookings/new/date'),
         })
      }
      if (isError) {
         const {
            error,
            error: {
               data: { code },
            },
         } = createUserAccountRes
         //console.log('ERROR:createAccount en SignUpFormPageHandler -> ', error)
         const dialogMessage = signUpErrorHandler(code)
         handleSetDialog({
            open: true,
            title: 'Ha ocurrido un error',
            description: dialogMessage,
            closeText: 'Aceptar',
         })
      }
      */

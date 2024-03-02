import Card from '@/components/layouts/Card'
import React from 'react'
import { NewUserForm } from './NewUserForm'
import {
   useCreateAccountMutation,
   useCreateUserMutation,
} from '@/lib/redux/apiSlices/userApi'
export default function NewUserFormHandler() {
   const [createUserAccountTrigger, { isLoading }] = useCreateAccountMutation()

   async function onSubmit(data, event) {
      //console.log('data ->', data)
      ////console.log('ev ->', ev)
      event.preventDefault()
      const { name, phone, email, password } = data

      const createUserAccountRes = await createUserAccountTrigger({
         name,
         phone,
         email,
         password,
      })

      const { isError } = createUserAccountRes

      if (!isError) {
         handleSetDialog({
            open: true,
            title: 'La cuenta se ha creado correctamente',
            description: `Se ha enviado un correo electrónico de verificación a '${email}'. Revisa tu bandeja de entrada y recuerda que es posible que lo encuentres en la carpeta de spam o correo no deseado`,
            closeText: 'Aceptar',
            onOpenChange: (bool) => router.push('/auth/sign-in'),
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
   }
   return (
      <Card {...cardProps}>
         <NewUserForm />
      </Card>
   )
}

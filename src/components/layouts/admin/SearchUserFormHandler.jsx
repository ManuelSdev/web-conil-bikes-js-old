'use client'

import React from 'react'
import { SearchUserForm } from './SearchUserForm'
import { useLazyGetUserByIdentifierQuery } from '@/lib/redux/apiSlices/userApi'
import { useRouter } from 'next/navigation'

export default function SearchUserFormHandler(props) {
   const [getUserByIdentifier, { data: user }] =
      useLazyGetUserByIdentifierQuery()

   const router = useRouter()

   async function onSubmit(data, event) {
      //console.log('data ->', data)
      ////console.log('ev ->', ev)
      event.preventDefault()
      const { search } = data
      try {
         const users = await getUserByIdentifier(search)
         console.log('users -> ', users)
         router.push(`/dashboard/users/search?identifier=${search}`)
      } catch (error) {
         console.log('ERROR:getUserByIdentifierRes -> ', error)
      }

      /*
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
      }*/
   }

   return <SearchUserForm {...props} onSubmit={onSubmit} />
}

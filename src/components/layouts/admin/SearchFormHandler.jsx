'use client'

import React from 'react'
import { SearchForm } from './SearchForm'
import { useLazyGetUserByIdentifierQuery } from '@/lib/redux/apiSlices/userApi'

export default function SearchFormHandler(props) {
   const [getUserByIdentifier, { data: user }] =
      useLazyGetUserByIdentifierQuery()

   async function onSubmit(data, event) {
      //console.log('data ->', data)
      ////console.log('ev ->', ev)
      event.preventDefault()
      const { search } = data
      const getUserByIdentifierRes = await getUserByIdentifier(search)
      console.log('getUserByIdentifierRes -> ', getUserByIdentifierRes)
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

   return <SearchForm {...props} onSubmit={onSubmit} />
}

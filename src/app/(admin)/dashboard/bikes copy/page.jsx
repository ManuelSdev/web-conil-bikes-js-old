import { InputFile } from '@/components/common/InputFile'
import React from 'react'
import { NewBikeForm } from './NewBikeForm'
import Test from './Test'
import { cookies } from 'next/headers'

import { getAuth } from 'firebase-admin/auth'
import { app } from '@/lib/firebase/admin/firebaseAdmin'
import { getAdminId } from '@/utils/serverFns/serverFns'

export default async function page() {
   const customToken = await getCustomToken()
   //const id = getAdminId()
   //console.log('token -> ', token)
   return (
      <div>
         <Test token={customToken} />
      </div>
   )
}
//https://www.reddit.com/r/nextjs/comments/19ep3rb/help_shadcn_with_react_hook_form_and_zod/
async function getCustomToken() {
   app()
   try {
      const adminSessionCookie = cookies().get('adminSession')
      app()
      const decodeClaims = await getAuth().verifySessionCookie(
         adminSessionCookie.value
      )

      const { uid } = decodeClaims
      const customToken = await getAuth().createCustomToken(uid)
      return customToken
   } catch (error) {
      console.log('Error getCustomToken:', error)
      // throw error
   }
}

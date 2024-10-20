'use client'
import React, { useEffect } from 'react'
import { NewBikeForm } from './NewBikeForm'
import useFirebaseAuth from '@/lib/firebase/client/useFirebaseAuth'
import useOnAuthStateChange from '@/lib/firebase/client/useOnAuthStateChange'

export default function Test({ token }) {
   const { authUser, loading } = useOnAuthStateChange()
   const { customTokenclientLoginWithoutCookie, doSignOut } = useFirebaseAuth()
   useEffect(() => {
      //
      if (token) {
         const fn = async () => {
            const res = await customTokenclientLoginWithoutCookie(token)

            console.log('res -> ', res)
         }
         fn()
      }
      return () => doSignOut()
   }, [])

   return (
      <div className="bg-red-400 p-11">
         <div>authUser: {authUser ? authUser.email : 'no'}</div>
         <div>loading: {loading ? 'true' : 'false'}</div>
         <NewBikeForm />
      </div>
   )
}

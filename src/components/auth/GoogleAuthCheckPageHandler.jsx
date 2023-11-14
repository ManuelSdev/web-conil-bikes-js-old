'use client'
import useFirebaseAuth from '@/lib/firebase/client/useFirebaseAuth'
import { useDeleteCookieQuery } from '@/lib/redux/apiSlices/cookieApi'
import React, { useEffect } from 'react'

export default function GoogleAuthCheckPageHandler() {
   const { doGetRedirectResult } = useFirebaseAuth()
   useEffect(() => {
      doGetRedirectResult()
   }, [])

   return <div>loading GoogleAuthCheckPageHandler.......</div>
}

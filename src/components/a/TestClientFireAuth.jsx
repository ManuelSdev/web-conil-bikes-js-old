'use client'
import useOnAuthStateChange from '@/lib/firebase/client/useOnAuthStateChange'
import {
   Card,
   CardContent,
   CardDescription,
   CardFooter,
   CardHeader,
   CardTitle,
} from '@/components/ui/card'

import React from 'react'
import UseGoogleAuth from '@/lib/firebase/client/useGoogleAuth'
import { Button } from '../ui/button'

export default function TestClientFireAuth() {
   const { authUser, loading } = useOnAuthStateChange()
   const { doSignInWithRedirect, signOutGoogle } = UseGoogleAuth()

   return (
      <Card>
         <CardHeader>
            <CardTitle>Test Client Fire Auth</CardTitle>
            <CardDescription>aaaaaaaaaaaa</CardDescription>
         </CardHeader>
         <CardContent>
            <div>authUser: {authUser ? authUser.email : 'no'}</div>
            <div>loading: {loading ? 'true' : 'false'}</div>
            <Button className="button" onClick={doSignInWithRedirect}>
               <i className="fab fa-google"></i>Sign in with google
            </Button>
            <Button className="button" onClick={signOutGoogle}>
               <i className="fab fa-google"></i>Sign OUT with google
            </Button>
         </CardContent>
         <CardFooter>
            <p>Card Footer</p>
         </CardFooter>
      </Card>
   )
}

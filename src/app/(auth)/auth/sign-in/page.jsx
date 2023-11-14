import SigInFormPageHandler from '@/components/auth/SigInFormPageHandler'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default function UserSignInPage(props) {
   const isSignInWithRedirect = cookies().has('signInWithRedirect')
   if (isSignInWithRedirect) {
      return redirect('/auth/checking')
   }
   const label = 'Inicia sesión en tu cuenta'
   return <SigInFormPageHandler />
}

import { getAuth } from 'firebase-admin/auth'
import { app } from './lib/firebase/admin/firebaseAdmin'
//import { authSliceSetted } from '@/src/app/authSlice'

const redirectToUnauthorized = () => {
   return {
      redirect: {
         destination: '/unauthorized',
         permanent: true,
      },
   }
}
export function authMiddleware(gssp) {}

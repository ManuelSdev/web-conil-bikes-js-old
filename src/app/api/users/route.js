import { createFireUser } from '@/lib/firebase/admin/createFireUser'
import { createAppUser } from '@/lib/pg/crud/users'
import { getAuth } from 'firebase-admin/auth'

export async function POST(req) {
   //console.log('req.body -------->', req.method)
   const body = await req.json()
   const { name, phone, email, password } = body
   const createdAppUserId = await createAppUser({ name, email, phone })
   const createdFireUser = await createFireUser({
      createdAppUserId,
      name,
      phone,
      email,
      password,
   })
   getAuth
}

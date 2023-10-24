import {
   getAuth,
   signInWithEmailAndPassword,
   signInWithRedirect,
   signOut,
   GoogleAuthProvider,
} from 'firebase/auth'
import { app } from './firebaseClient'

import { useState } from 'react'
import { useCreateSessionCookieMutation } from '@/lib/react-query/apiServices/authApi'
import { useRouter } from 'next/navigation'

const provider = new GoogleAuthProvider()

export default function useFirebaseAuth() {
   const auth = getAuth(app)
   const [loading, setLoading] = useState(false)
   const router = useRouter()
   /**
    * CLAVE: el mutate/createSessionCookie es como si fuera síncrono y solo retorna a las propiedades
    * que extraigo del hook useCreateSessionCookieMutation. Si lo uso en doCreateSessionCookie, no importa
    * que asigne el await mutateAsync(accessToken) a una variable: la variable siempre es undefined porque
    * se lanza el trigger y se sigue ejecutando la función. Tienes que usar la propiedad data
    * extraida del hook, que es la que registra los cambios de forma asíncrona. Es como que ese await no sirve pa na
    * EN CAMBIO, el resultado mutateAsync si contiene la data y se puede asignar a una variable.
    * Además, en mutateAsync el await si hace el efecto de "esperar" a que se resuelva la promesa
    * CLAVE: básicamente, mutateAsync es una promesa y mutate, aunque asíncrona, no es una promesa
    * CLAVE: una forma equivalente es usar el mutate pasándole  funciones addicionasles onSucces etc
    * Es decir, que aparte de las funciones onSuccess etc que puedas definir al llamar al useMutation
    * en useHookBuilder, tambien puedes pasar otras funciones del mismo tipo al llamar al mutate y
    * https://tanstack.com/query/latest/docs/react/guides/mutations#mutation-side-effects
    */
   const { createSessionCookie, createSessionCookieAsync } =
      useCreateSessionCookieMutation('diossss')
   // console.log('isSuccess -> ', isSuccess)
   // console.log('data -> ', data)
   // const datas = '==================================='
   const doCreateSessionCookie = async (accessToken) => {
      try {
         const { success, resolvedUrl } =
            await createSessionCookieAsync(accessToken)

         //si crea la cookie session correctamente, borro (deslogo) el estado de auth
         //en el cliente
         success && signOut(auth)
         success && router.push(resolvedUrl)
      } catch (error) {
         signOut(auth)
         console.log('errorrr en doCreateSessionCookie -> ', error)
         throw error
      }

      //Y luego mando a la resolvedUrl que me diga el server
   }

   const doSignInWithEmailAndPassword = async ({ email, password }) => {
      //  console.log('doSignInWithEmailAndPassword    ', email, password)
      /**
       * Como voy a gestionar la autenticación con cookies de sesión desde el server,
       * no necesito mantener el estado de sesión en el cliente
       * Segun esto: https://firebase.google.com/docs/auth/admin/manage-cookies?hl=es-419#sign_in
       * puedes anular el estado de sesión en el cliente desde el principio, anulando la persistencia
       *    -firebase.auth().setPersistence(firebase.auth.Auth.Persistence.NONE);
       * o puedes hacerlo al final, con un signOut directo en el lado del cliente
       *    - return firebase.auth().signOut();
       * En este caso, usaré el signOut dentro de doCreateSessionCookie, ya que voy a usar
       * este último método para gestionar también la session cookie cuando uso
       * el login con google
       * CLAVE: no quito la persistencia inicialmente porque, si bien doSignInWithEmailAndPassword
       * puede recoger directamente el accessToken del user, cuando uso el login con google necesito
       * sacar ese accessToken del usuario, por eso necesito que, por un espacio de tiempo, el estado de auth
       * exista en el cliente para obtener el accessToken con desde onAuthStateChanged
       */
      setLoading(true)

      try {
         const userCredential = await signInWithEmailAndPassword(
            auth,
            email,
            password
         )
         const { user } = userCredential
         const { accessToken, emailVerified } = user
         //   console.log('ACCESS TOKEN INICIAL -> ', user)

         /**
          * CLAVE: si el email aun no se ha verificado, no se crea la session cookie.
          * Se invita a verificar y se muestra botón para reenviar correo con link para
          * verificar
          */
         /**
          * Si se ha verificado, comprueba si existen custom claims
          * Si en la comprobación se modifican los custom claims, modified será true
          * y es necesario recargar un nuevo token que contenga los nuevos custom claims
          */
         //CLAVE https://stackoverflow.com/questions/70073367/js-multiple-nested-try-catch-blocks

         if (emailVerified || email === 'admin@test.com') {
            //   const { modified } = await checkCustomClaims(accessToken).unwrap()
            const modified = false
            if (modified) {
               const reloadedToken = await user.getIdToken(true)
               //  console.log('ACCESS TOKEN ***RELOADED*** -> ', reloadedToken)
               await doCreateSessionCookie(reloadedToken)
               //return { emailVerified, accessToken: reloadedToken }
            } else {
               await doCreateSessionCookie(accessToken)
               //       console.log('PUTA DATAAAAAAAAAAAAAAAA -> ', data)
            }
            //Si no hay modificaciones en custom claims, se devuelve el token inicial

            // setLoading(false)
            // return { emailVerified, accessToken }
         } else {
            const error = { code: 'custom/unverified' }
            setLoading(false)
            throw error
         }

         //return { emailVerified }
      } catch (err) {
         //    signOut(auth)
         //todo mira que esto retorne ok por si dejas mensaje en ui
         // console.log('doSignInWithEmailAndPassword ERROR -> ', err)
         const { code } = err
         //  const error = errorHandlerSignMailAndPass(code)
         //  setLoading(false)
         throw error
         // return { error }
      }
   }
   const doSignInWithRedirect = async (ev) => {
      //CLAVE evitar bucles con onAuthStateChanged
      //https://firebase.google.com/docs/auth/web/manage-users?hl=es-419
      //uso opción 3
      //https://firebase.google.com/docs/auth/web/redirect-best-practices?hl=es-419#proxy-requests
      //Solución proxy inverso en next: rewrite en next.config.js
      //https://stackoverflow.com/questions/75349917/confirmation-of-why-cross-origin-problems-occur-when-using-signinwithredirect-ar
      //https://community.fly.io/t/reverse-proxy-to-firebase-authentication-for-simple-nextjs-app/12013/2

      await signInWithRedirect(auth, provider)
   }

   return { loading, doSignInWithEmailAndPassword, doSignInWithRedirect }
}

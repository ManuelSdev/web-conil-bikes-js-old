import { useHookBuilder } from './useHookBuilder'

const mutationHookBuilder = useHookBuilder()
const authAPi = mutationHookBuilder({
   endpoints: {
      createAccount: {
         query: ({ name, phone, email, password }) => ({
            url: '/api/auth',
            method: 'POST',
            body: JSON.stringify({
               action: 'createAccount',
               name,
               phone,
               email,
               password,
            }),
            errotTxt: 'Error on createAccount',
         }),
      },

      //Estos token son idToken según docu pero en el objeto que pillo en cliente se llaman accessToken
      checkCustomClaims: {
         query: (token) => ({
            url: '/api/auth',
            method: 'POST',
            headers: {
               Authorization: `Bearer ${token}`,
            },
            body: { action: 'checkCustomClaims' },
            errotTxt: 'Error on checkCustomClaims',
         }),
      },
      createSessionCookie: {
         query: (token) =>
            //  console.log('TOKEN authApi createSessionCookie -> ', token) ||
            ({
               url: '/api/auth/createSessionCookie',
               method: 'POST',
               headers: {
                  Authorization: `Bearer ${token}`,
               },
               //  body: { action: 'createSessionCookie' },
               body: JSON.stringify({
                  action: 'createSessionCookie',
               }),
               errotTxt: 'Error on createSessionCookie',
            }),
      },
      userSignOut: {
         query: (role) => ({
            url: '/api/auth/sessionLogout',
            method: 'POST',
            /*
      headers: {
         Authorization: `Bearer ${token}`,
      },
      body: 'arrayOfIds',
      */
            body: { cookieName: 'userSession' },
            errotTxt: 'Error on userSignOut',
         }),
      },
      adminSignOut: {
         query: (role) => ({
            url: '/api/auth/sessionLogout',
            method: 'POST',
            body: { cookieName: 'adminSession' },
            errotTxt: 'Error on adminSignOut',
         }),
      },
   },
})
//console.log('################################## authApi -> ', authAPi)
export const {
   useCreateAccountMutation,
   useCheckCustomClaimsMutation,
   useCreateSessionCookieMutation,
   useUserSignOutMutation,
   useAdminSignOutMutation,
} = authAPi

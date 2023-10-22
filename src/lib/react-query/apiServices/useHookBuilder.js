import { useMutation } from '@tanstack/react-query'
//https://blog.delpuppo.net/react-query-usemutation

const createHookName = (strEndpointKey) => {
   const firstLetter = strEndpointKey.charAt(0).toUpperCase()
   const restOfLetters = strEndpointKey.slice(1)
   return `use${firstLetter}${restOfLetters}Mutation`
}
const createMutationFn = async ({ url, method, headers, body, error }) => {
   const response = await fetch(url, {
      method,
      headers,
      body,
   })

   if (!response.ok) {
      throw new ResponseError(error, response)
   }
   return await response.json()
}
export const useHookBuilder = () => {
   /**
    *
    * @param {string} strEndpointKey
    * @returns {string}
    * @description Crea un nombre de hook a partir del nombre del endpoint
    */

   const mutationHookBuilder = (endpointsObj) => {
      // console.log('ENDPOINTS OBJ -> ', endpointsObj)
      const { endpoints } = endpointsObj
      const keys = Object.keys(endpoints)

      const hooksObject = keys.reduce((acc, key) => {
         const hookName = createHookName(key)
         //         const hook = createHook(key)
         const useHook = () => useCreateHook(endpoints[key], key)

         return { ...acc, [hookName]: useHook }
         //  acc[hookName] = hook
      }, {})
      return hooksObject
   }

   return mutationHookBuilder
}

function useCreateHook(endpoint, endpointName) {
   //  console.log('ENDPOINT -> ', { [endpoint]: 0 })
   const mutation = useMutation({
      mutationFn: (queryParams) =>
         // console.log('QUERY PARAMS -> ', endpoint.query(queryParams)) ||
         createMutationFn(endpoint.query(queryParams)),
   })
   // console.log('MUTATION -> ', mutation)
   const { mutate } = mutation
   const useHook = { ...mutation, aaaa: mutate }

   return { ...mutation, [endpointName]: mutate }
}

/**
 * Esta versión funciona con esta estructura de endpoints
 *   endpoints: {
      createAccount: {
         query: ({ name, phone, email, password }) =>
            createMutationFn({
               url: 'auth',
               method: 'POST',
               body: { action: 'createAccount', name, phone, email, password },
               error: 'Error en createAccount',
            }),
      },
    Donde la mutationFn se crea en el propio endpoint
    Por eso no se usa createMutationFn dentro de createHook
 */
const createHook2 = (endpoint) => {
   const mutation = useMutation({
      mutationFn: (queryParams) => endpoint.query(queryParams),
   })
   const { mutate } = mutation
   return { ...mutation, [endpoint]: mutate }
}
const hooksBuilder2 = (endpointsObj) => {
   const { endpoints } = endpointsObj
   const keys = Object.keys(endpoints)
   const hooksObject = keys.reduce((acc, key) => {
      const hookName = createHookName(key)
      const hook = createHook2[key]
      acc[hookName] = hook
   }, {})
   return hooksObject
}

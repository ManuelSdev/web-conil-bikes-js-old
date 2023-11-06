import { baseApi } from './baseApi'
const urlParams = (obj) => new URLSearchParams(obj)

export const cookieApi = baseApi.injectEndpoints({
   endpoints: (builder) => ({
      createCookie: builder.query({
         query: ({ name, value }) => ({
            url: `/cookies?name=${name}&value=${value}`,
         }),
      }),
   }),
})

export const { useCreateCookieQuery, useLazyCreateCookieQuery } = cookieApi

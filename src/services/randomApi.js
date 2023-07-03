// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const randomApi = createApi({
  reducerPath: 'randomApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://randomuser.me/api/?results=20' }),
  endpoints: (builder) => ({
   getAllRandomPersons: builder.query({
      query: () => '',
    }),
   getSingleRandomUser :builder.query({
      query : (id) => `/${id}`
   })


  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {useGetAllRandomPersonsQuery,useGetSingleRandomUserQuery} = randomApi
// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const dogApi = createApi({
  reducerPath: 'dogApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.thedogapi.com/v1/breeds' }),
  endpoints: (builder) => ({
   getAllDogs: builder.query({
      query: () => '',
    }),
   getSingleDog :builder.query({
      query : (name) => `https://api.thedogapi.com/v1/breeds/search?q=${name}`
   })


  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllDogsQuery, useGetSingleDogQuery} = dogApi
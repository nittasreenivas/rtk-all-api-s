// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const rickyApi = createApi({
  reducerPath: 'rickyApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api/character' }),
  endpoints: (builder) => ({
   getAllRickyCharacters: builder.query({
      query: () => '',
    }),
   getSingleRicky :builder.query({
      query : (id) => `/${id}`
   })


  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {  useGetAllRickyCharactersQuery, useGetSingleRickyQuery} = rickyApi
// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const platoApi = createApi({
  reducerPath: 'platoApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.escuelajs.co/api/v1/products' }),
  endpoints: (builder) => ({
   getAllPlatoProducts: builder.query({
      query: () => '',
    }),
   getSinglePlato :builder.query({
      query : (id) => `/${id}`
   })


  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {useGetAllPlatoProductsQuery,useGetSinglePlatoQuery} = platoApi
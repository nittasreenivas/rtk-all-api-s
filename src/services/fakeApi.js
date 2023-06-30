// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const fakeApi = createApi({
  reducerPath: 'fakeApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/products' }),
  endpoints: (builder) => ({
   getAllFakeProducts: builder.query({
      query: () => '',
    }),
  getSingleFakeProduct: builder.query({
    query : (id) => `/${id}`
  })



  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllFakeProductsQuery,useGetSingleFakeProductQuery} = fakeApi
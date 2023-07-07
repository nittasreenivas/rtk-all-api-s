// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const dragonsApi = createApi({
  reducerPath: 'dragonsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.spacexdata.com/v4/dragons' }),
  endpoints: (builder) => ({
   getAllDragons: builder.query({
      query: () => '',
    }),
   getSingleDragon :builder.query({
      query : (id) => `/${id}`
   })


  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {  useGetAllDragonsQuery,useGetSingleDragonQuery} = dragonsApi
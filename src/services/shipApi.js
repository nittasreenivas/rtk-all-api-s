// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const shipApi = createApi({
  reducerPath: 'shipApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.spacexdata.com/v4/ships' }),
  endpoints: (builder) => ({
   getAllShips: builder.query({
      query: () => '',
    }),
   getSingleShip :builder.query({
      query : (id) => `/${id}`
   })


  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {  useGetAllShipsQuery,useGetSingleShipQuery} = shipApi
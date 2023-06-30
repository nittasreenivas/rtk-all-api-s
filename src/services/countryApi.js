// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const countryApi = createApi({
  reducerPath: 'countryApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://restcountries.com/v3/' }),
  endpoints: (builder) => ({
   getAllCountryDetails: builder.query({
      query: () => 'all',
    }),
   getSingleCountry :builder.query({
      query : (cname) => `/name/${cname}`
   })


  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllCountryDetailsQuery , useGetSingleCountryQuery} = countryApi
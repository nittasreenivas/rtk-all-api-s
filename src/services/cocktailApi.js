// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const cocktailApi = createApi({
  reducerPath: 'cocktailApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s' }),
  endpoints: (builder) => ({
   getAllCocktails: builder.query({
      query: () => '',
    }),
   getSingleCocktail:builder.query({
      query : (id) => `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
   })


  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllCocktailsQuery, useGetSingleCocktailQuery} = cocktailApi
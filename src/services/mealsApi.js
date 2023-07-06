// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const mealsApi = createApi({
  reducerPath: 'mealsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://www.themealdb.com/api/json/v1/1/search.php?s' }),
  endpoints: (builder) => ({
    getAllMeals: builder.query({
      query: () => ``,
    }),
    getSingleMeal:builder.query({
        query: (strMeal) => `https://www.themealdb.com/api/json/v1/1/search.php?s=${strMeal}`
    })


  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllMealsQuery ,useGetSingleMealQuery} =mealsApi
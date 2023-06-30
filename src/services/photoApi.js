// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const photoApi = createApi({
  reducerPath: 'photoApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/photos' }),
  endpoints: (builder) => ({
   getAllPhotos: builder.query({
      query: () => '',
    }),
  getSinglePhoto: builder.query({
    query : (id) => `/${id}`
  })



  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllPhotosQuery , useGetSinglePhotoQuery} = photoApi
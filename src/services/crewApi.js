// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const crewApi = createApi({
  reducerPath: 'crewApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.spacexdata.com/v4/crew' }),
  endpoints: (builder) => ({
   getAllCrewMembers: builder.query({
      query: () => '',
    }),
   getSingleCrewMember :builder.query({
      query : (id) => `/${id}`
   })


  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllCrewMembersQuery ,useGetSingleCrewMemberQuery} = crewApi
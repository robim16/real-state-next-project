import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { fetchAuthSession, getCurrentUser } from "aws-amplify/auth";

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
  }),
  reducerPath: "api",
  tagTypes: [],
  endpoints: (build) => ({
    getAuthUser: build.query<User, void>({
      queryFn: async (_, _queryApi, _extraoptions, fetchWithBQ) => {
        try {
          
          const session = await fetchAuthSession()
          const { idToken } = session.tokens ?? {}
          const user = await getCurrentUser()
          const userRole = idToken?.payload["custom:role"] as string

          const endpoint = userRole === "manager" 
            ? `/managers/${user.userId}`
            : `/tenants/${user.userId}`

          let userDetailsResponse = await fetchWithBQ(endpoint)

          return {
            data: {
              cognitoInfo: {...user},
              userInfo: userDetailsResponse.data
            }
          }
        } catch (error) {
          
        }
      }
    })
  }),
});

export const {} = api;

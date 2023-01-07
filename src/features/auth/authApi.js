import apiSlice from 'features/api/apiSlice';
import { getUser } from './authSlice';

export const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        createUser: builder.mutation({
            query: (user) => ({
                method: "POST",
                url: "users",
                body: user
            }),
            async onQueryStarted(user, {dispatch, queryFulfilled}) {
                try {
                    await queryFulfilled
                    dispatch(getUser(user.email)); //getting user data to reflect changes instantly  
                  } catch {
                  }
            }
        })
    })
})

export const { useCreateUserMutation } = authApi;

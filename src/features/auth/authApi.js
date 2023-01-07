import apiSlice from 'features/api/apiSlice';

export const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        createUser: builder.mutation({
            query: (user) => ({
                method: "POST",
                url: "users",
                body: user
            })
        })
    })
})

export const { useCreateUserMutation } = authApi;

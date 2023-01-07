import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiSlice = createApi({
    reducerPath: "apiSlice",
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_bseURL
    }),
    endpoints: () => ({})
})

export default apiSlice;
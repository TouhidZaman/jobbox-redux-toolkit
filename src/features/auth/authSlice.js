import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import auth from "../../firebase/firebase.config";


const initialState = {
    user: {
        email: "",
        role: ""
    },
    isLoading: true,
    isError: false,
    error: ""
}

export const createUser = createAsyncThunk("auth/createUser", async ({email, password}) => {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    return res?.user?.email;
})

export const loginUser = createAsyncThunk("auth/loginUser", async ({email, password}) => {
    const res = await signInWithEmailAndPassword(auth, email, password);
    return res?.user?.email;
})

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logOut: (state) => {
            state.user.email="";
            state.isLoading=false;
        },
        resetError: (state) => {
            state.isError=false;
            state.error=""
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(createUser.pending, (state) => {
                state.isLoading=true;
                state.isError=false
            })
            .addCase(createUser.fulfilled, (state, {payload}) => {
                state.isLoading=false;
                state.isError=false;
                state.user.email=payload;
            })
            .addCase(createUser.rejected, (state, action) => {
                state.isLoading=false;
                state.isError=true;
                state.error=action.error.message;
            })
            .addCase(loginUser.pending, (state) => {
                state.isLoading=true;
                state.isError=false
            })
            .addCase(loginUser.fulfilled, (state, {payload}) => {
                state.isLoading=false;
                state.isError=false;
                state.user.email=payload;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.isLoading=false;
                state.isError=true;
                state.error=action.error.message;
            })
    }
})

export const { logOut, resetError } = authSlice.actions

export default authSlice.reducer;
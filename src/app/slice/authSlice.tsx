import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
    loginForm: {
        uid: string,
        password: string
    },
    is_auth: boolean,
    is_volunteer: boolean,
    is_admin: boolean,
    credentials: any[]
}

const initialState: AuthState = {
    loginForm: {
        uid: "",
        password: ""
    },
    is_admin: false,
    is_auth: false,
    is_volunteer: false,
    credentials: []
}

export const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        set_login_form: (state, action: PayloadAction<any>) => {
            const name = action.payload.name
            const value = action.payload.value

            state.loginForm = { ...state.loginForm, [name]: value }
        },
        set_is_admim: (state, action: PayloadAction<any>) => {
            state.is_admin = action.payload
        },
        set_is_volunteer: (state, action: PayloadAction<any>) => {
            state.is_volunteer = action.payload
        },
        set_is_auth: (state, action: PayloadAction<boolean>) => {
            state.is_auth = action.payload
        },
        set_credentials: (state, action: PayloadAction<any>) => {
            state.credentials = action.payload
        }
    }
})

export const { set_login_form, set_is_admim, set_is_auth, set_credentials, set_is_volunteer } = authSlice.actions

export default authSlice.reducer
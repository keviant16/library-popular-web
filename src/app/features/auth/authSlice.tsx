import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
    loginForm: {
        uid: string,
        password: string
    },
    authHas: {
        admin: boolean,
        volunteer: boolean
    }
}

const initialState: AuthState = {
    loginForm: {
        uid: "",
        password: ""
    },
    authHas: {
        admin: false,
        volunteer: false
    }
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
        set_auth_has: (state, action: PayloadAction<any>) => {
            state.authHas = action.payload
        }
    }
})

export const { set_login_form, set_auth_has } = authSlice.actions

export default authSlice.reducer
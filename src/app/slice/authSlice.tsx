import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
    loginForm: {
        uid: string,
        password: string
    },

    isVolunteer: boolean,
    isAdmin: boolean,
    credentials: any[]
}

const initialState: AuthState = {
    loginForm: {
        uid: "",
        password: ""
    },
    isAdmin: false,
    isVolunteer: false,
    credentials: []
}

export const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        setLoginForm: (state, action: PayloadAction<any>) => {
            const name = action.payload.name
            const value = action.payload.value

            state.loginForm = { ...state.loginForm, [name]: value }
        },
        setIsAdmim: (state, action: PayloadAction<any>) => {
            state.isAdmin = action.payload
        },
        setIsVolunteer: (state, action: PayloadAction<any>) => {
            state.isVolunteer = action.payload
        },
        setCredentials: (state, action: PayloadAction<any>) => {
            state.credentials = action.payload
        }
    }
})

export const { setLoginForm, setIsAdmim, setCredentials, setIsVolunteer } = authSlice.actions

export default authSlice.reducer
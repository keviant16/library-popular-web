import { client } from "./clients/Instance"

export const login = async (credential: any) => {
    try {
        let response = await client.post(`/credentials/login`, credential)
        return response.data
    } catch (error: any) {
        console.error(error);
    }
}

export const getAllCredentials = async () => {
    try {
        let response = await client.get(`/credentials`)
        return response.data
    } catch (error: any) {
        console.error(error);
    }
}

export const deleteCredential = async (uid?: string) => {
    try {
        await client.delete("/credentials/" + uid)
    } catch (error) {
        console.error(error);
    }
}


export const register = async (credential: any, callback: any) => {
    try {
        let response = await client.post(`/credentials/register`, credential)
        return response.data
    } catch (error: any) {
        console.error(error);
        callback("")
    }
}


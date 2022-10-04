import { client } from "./clients/Instance"

export const login = async (credential: any) => {
    try {
        let response = await client.post(`/auth/login`, credential)
        return response.data
    } catch (error: any) {
        console.error(error);
    }
}
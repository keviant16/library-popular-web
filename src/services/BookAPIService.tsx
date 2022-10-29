import { googleClient } from "./clients/Instance"

export const getGoogleBooksByCodeIsbn = async (isbn: string) => {
    try {
        let response = await googleClient.get(`/v1/volumes?q=isbn:${isbn}`)
        return response.data
    } catch (error: any) {
        console.error(error);
    }
}



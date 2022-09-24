import { client } from "./clients/Instance"
import Bookshelf from "../interface/Bookshelf"


export const addBookshelf = async (bookshelf: Bookshelf) => {
    try {
        let response = await client.post("/bookshelves", bookshelf)
        return response.status
    } catch (error: any) {
        return error.response.status
    }
}

export const deleteBookshelf = async (resourceId: number | null) => {
    try {
        let response = await client.delete("/bookshelves/" + resourceId)
        return response.status
    } catch (error) {
        return error
    }
}

export const editBookshelf = async (resourceId: number | null, bookshelf: Bookshelf) => {
    try {
        let response = await client.put("/bookshelves/" + resourceId, bookshelf)
        return response.status
    } catch (error: any) {
        return error.response.status
    }
}

export const getAllBookshelves = async () => {
    try {
        let response = await client.get("/bookshelves")
        return response.data
    } catch (error: any) {
        console.error(error);
    }
}
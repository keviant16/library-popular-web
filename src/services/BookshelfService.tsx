import { client } from "./clients/Instance"
import Bookshelf from "../interface/Bookshelf"


export const addBookshelf = async (bookshelf: Bookshelf) => {
    try {
        let response = await client.post("/bookshelves", bookshelf)
        return response.data

    } catch (error: any) {
        return error.response.status
    }
}

export const deleteBookshelf = async (id?: number) => {
    try {
        await client.delete("/bookshelves/" + id)
    } catch (error) {
        console.error(error);
    }
}

export const editBookshelf = async (bookshelf: Bookshelf, id?: number,) => {
    try {
        let response = await client.put("/bookshelves/" + id, bookshelf)
        return response.data
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
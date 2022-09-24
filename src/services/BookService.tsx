import { client } from "./clients/Instance"
import Book from "../interface/Book"

export const addBook = async (book: Book) => {
    try {
        let response = await client.post("/books", book)
        return response.status
    } catch (error: any) {
        return error.response.status
    }
}

export const deleteBook = async (resourceId: number | null) => {
    try {
        let response = await client.delete("/books/" + resourceId)
        return response.status
    } catch (error) {
        return error
    }
}

export const editBook = async (resourceId: number | null, book: Book) => {
    try {
        let response = await client.put("/books/" + resourceId, book)
        return response.status
    } catch (error: any) {
        return error.response.status
    }
}

export const getAllbooks: any = async () => {
    try {
        let response = await client.get("/books")
        return response.data
    } catch (error: any) {
        console.error(error);

    }
}
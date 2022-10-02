import { client } from "./clients/Instance"
import Book from "../interface/Book"

export const addBook = async (book: Book) => {
    try {
        let response = await client.post("/books", book)
        console.log(response);
    } catch (error: any) {
        console.error(error);
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

export const editBook = async (book: Book, id?: number) => {
    try {
        let response = await client.put("/books/" + id, book)
        console.log(response);
    } catch (error: any) {
        console.error(error);
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
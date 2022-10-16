import { client } from "./clients/Instance"
import Book from "../interface/Book"

export const addBook = async (book: Book) => {
    try {
        let response = await client.post("/books", book)
        return response.data
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

export const editBook = async (book: Book, id?: number) => {
    try {
        let response = await client.put("/books/" + id, book)
        return response.data
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

export const getbooksByIsbn: any = async (isbn: string) => {
    try {
        const response = await client.get("/books/isbn=" + isbn)
        return response.data
    } catch (error: any) {
        return error.response.status
    }
}

export const getBooksByTitle: any = async (query: string) => {
    try {
        const response = await client.get("/books/search=" + query)
        return response.data
    } catch (error: any) {
        console.error(error);
    }
}

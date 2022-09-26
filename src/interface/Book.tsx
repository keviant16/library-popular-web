import Author from "./Author"
import Bookshelf from "./Bookshelf"
import Tag from "./Tag"

export default interface Book {
    id?: number
    title: string
    subtitle?: string
    publisher?: string
    publishedDate?: string
    isbn: string
    pageCount?: 0
    price: number
    qty: number
    description: string
    authors: Author[]
    tags: Tag[],
    bookshelf: Bookshelf
}





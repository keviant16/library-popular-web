import Author from "./Author"
import Bookshelf from "./Bookshelf"
import Tag from "./Tag"

export default interface Book {
    id?: number
    title: string
    subtitle?: string
    publisher?: string
    publishedDate?: string
    image?: string
    isbn: string
    pageCount?: number
    price: number
    description?: string
    authors: Author[]
    tags?: Tag[],
    bookshelf?: Bookshelf
}





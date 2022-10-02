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
    authorsName: string[]
    tagsName: string[],
    bookshelfName: string
}





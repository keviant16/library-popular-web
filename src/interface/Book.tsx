export default interface Book {
    id?: number
    title: string
    subtitle?: string
    publisher?: string
    publishedDate?: string
    image?: string
    isbn: string
    pageCount?: number
    price?: number
    description?: string
    authors: string[]
    tags: string[],
    bookshelf: string
    status?: string,
    donatedMoney?: number
}





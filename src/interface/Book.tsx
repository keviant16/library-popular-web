export default interface Book {

    title: string,
    subtitle: string,
    publisher: string,
    publishedDate?: string,
    pageCount?: 0,
    price: number,
    qty: number,
    description: string,
    _links: {
        self: {
            href: string
        },
        book: {
            href: string
        },
        bookshelf: {
            href: string
        },
        tags: {
            href: string
        },
        authors: {
            href: string
        }
    }
}





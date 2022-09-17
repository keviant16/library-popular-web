export default interface GoogleBook {

    volumeInfo: {
        title: string,
        subtitle?: string,
        authors: string[],
        publisher: string,
        publishedDate: string,
        description: string,
        industryIdentifiers: IndustryIdentifiers[],
        pageCount: number,
        mainCategory?: string,
        categories?: string[],
        imageLinks?: {
            thumbnail?: string,
        },
    },
}

interface IndustryIdentifiers {
    type: string,
    identifier: string
}
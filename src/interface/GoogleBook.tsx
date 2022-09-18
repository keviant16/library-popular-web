import imageLink from "./ImageLink";
import IndustryIdentifier from "./IndustryIdentifier";

export default interface GoogleBook {

    volumeInfo: {
        title: string,
        subtitle?: string,
        authors: string[],
        publisher?: string,
        publishedDate?: string,
        description?: string,
        industryIdentifiers: IndustryIdentifier[],
        pageCount?: number,
        imageLinks?: imageLink,
    },
}

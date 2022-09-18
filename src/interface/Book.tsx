import Author from "./Author";
import imageLink from "./ImageLink";
import IndustryIdentifier from "./IndustryIdentifier";
import Section from "./Section";
import Tag from "./Tag";

export default interface Book {
    id?: number,
    isbn: IndustryIdentifier[],
    title?: string,
    subtitle?: string,
    description?: string,
    publisher?: string,
    publishedDate?: string,
    pageCount?: number,
    imageLink?: imageLink,
    price: number,
    qty: number,
    creationDate?: Date,
    section?: Section,
    authors: string[],
    tags: Tag[]
}





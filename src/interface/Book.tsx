import Section from "./Section";
import Tag from "./Tag";

export default interface Book {
    isbn: string,//
    title: string,//
    subtitle?: string,//
    description: string,//
    publisher: string,//
    publishedDate: string,//
    pageCount: number,//
    image: string,//
    price: number,
    qty: number,//
    creationDate: Date | null,//
    section: Section,
    authors: string[],//
    tags: Tag[]
}

import Author from "./Author";
import Section from "./Section";
import Tag from "./Tag";

export default interface Book {
    id: number | null,
    title: string,
    subtitle?: string,
    description: string,
    publisher: string,
    publishedDate: string,
    pageCount: number,
    image: string,
    isbn: string,
    price: number,
    qty: number,
    creationDate: Date | null,
    section: Section,
    authors: Author[],
    tags: Tag[]
}

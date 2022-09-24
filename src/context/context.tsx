import { createContext } from "react";
import Bookshelf from "../interface/Bookshelf";

export interface BookshelfContextProps {
    bookshelves: Bookshelf[],
    loading: boolean
}

export const BookshelfContext = createContext<BookshelfContextProps>({
    bookshelves: [],
    loading: false
})

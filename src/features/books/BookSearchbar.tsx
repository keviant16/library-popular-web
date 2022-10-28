import { IonSearchbar } from "@ionic/react";
import { FunctionComponent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchValue } from "../../app/slice/bookSlice";

interface BookSearchbarProps { }

const BookSearchbar: FunctionComponent<BookSearchbarProps> = () => {
    const searchValue: string = useSelector((state: any) => state.book.searchValue)
    const dispatch = useDispatch()

    const handleSearchValue = (e: any) => {
        dispatch(setSearchValue(e.detail.value))
    }

    return (
        <IonSearchbar
            placeholder="Recherche"
            className="custom"
            onIonChange={handleSearchValue}
            value={searchValue}
        />
    );
}

export default BookSearchbar;
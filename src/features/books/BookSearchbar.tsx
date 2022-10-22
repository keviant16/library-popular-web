import { IonSearchbar } from "@ionic/react";
import { FunctionComponent } from "react";

interface BookSearchbarProps {

}

const BookSearchbar: FunctionComponent<BookSearchbarProps> = () => {
    return (
        <IonSearchbar placeholder="Recherche" className="custom" />
    );
}

export default BookSearchbar;
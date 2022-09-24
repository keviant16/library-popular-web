import { IonItem, useIonAlert } from "@ionic/react"
import { useState } from "react";
import Bookshelf from "../../interface/Bookshelf"
import { deleteBookshelf } from "../../services/BookshelfService";

interface BookshelfProps {
    bookshelf: Bookshelf,
    callback: () => Promise<void>,
}

const BookshelfItem: React.FC<BookshelfProps> = (props: BookshelfProps) => {
    const [editing, setEditing] = useState<boolean>(false);
    const [input, setInput] = useState<string>();
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>();
    const [presentAlert] = useIonAlert();

    const handleDeleteOnClick = async (resourceId: number | null) => {
        setLoading(true)

        await deleteBookshelf(resourceId);
        props.callback()
        setLoading(false)
    }

    return (
        <IonItem>

        </IonItem>
    )
}

export default BookshelfItem;

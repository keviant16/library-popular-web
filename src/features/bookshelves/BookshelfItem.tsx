import { IonButton, IonButtons, IonIcon, IonInput, IonItem, IonLabel, IonSpinner, useIonAlert } from "@ionic/react"
import { checkmark, pencil, trash } from "ionicons/icons";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { filterBookshelf, setBookshelves, updateBookshelf } from "../../app/features/bookshelf/bookshelfSlice";
import Bookshelf from "../../interface/Bookshelf"
import { getAllbooks } from "../../services/BookService";
import { deleteBookshelf, editBookshelf } from "../../services/BookshelfService";

interface BookshelfProps {
    bookshelf: Bookshelf,
}

const BookshelfItem: React.FC<BookshelfProps> = (props: BookshelfProps) => {
    const [editing, setEditing] = useState<boolean>(false);
    const [input, setInput] = useState<string>();
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>();
    const [presentAlert] = useIonAlert();
    const dispatch = useDispatch()

    const handleChange = (e: any) => {
        setInput(e.detail.value!)
        setError("")
    }

    const handleDelete = () => {
        presentAlert({
            header: "Attention !",
            subHeader: `Etes vous sur de vouloir supprimer la section ${props.bookshelf.name} ?`,
            message: `Les livres présents dans la section ${props.bookshelf.name} se retrouvevron sans étagères`,
            buttons: [{
                text: 'Annuler',
                role: 'cancel',
            },
            {
                text: 'Confirmer',
                role: 'confirm',
                handler: () => {
                    deleteBookshelfOnClick(props.bookshelf.id)
                },
            },
            ],
        })
    }

    const editOnOnClick = async () => {
        if (!input) return setError("Le champs est vide")
        setLoading(true)

        const current_bookshelf: Bookshelf = { id: props.bookshelf.id, name: input, qty: props.bookshelf.qty }
        const response_bookshelf_or_status: any = await editBookshelf(current_bookshelf, props.bookshelf.id);
        setLoading(false)
        setEditing(!editing)

        if (response_bookshelf_or_status === 409) return setError("Le tag " + input + " existe déjà.")
        if (typeof response_bookshelf_or_status === "number") return setError("error" + response_bookshelf_or_status)
        dispatch(updateBookshelf(response_bookshelf_or_status))
    }

    const deleteBookshelfOnClick = async (id?: number) => {
        setLoading(true)
        await deleteBookshelf(id);
        dispatch(filterBookshelf(props.bookshelf))
        setLoading(false)
    }

    const toogleEditOnClick = async () => {
        setEditing(!editing)
        setInput(props.bookshelf.name);
        setError("")
    }

    return (
        <IonItem>
            {loading ? <IonSpinner name="bubbles" /> : editing ?
                <>
                    <IonInput
                        value={input}
                        onIonChange={(e) => handleChange(e)}
                        clearInput />
                    {error &&
                        <IonLabel slot="error" color={"danger"}>{error}</IonLabel>
                    }
                </>
                :
                <IonLabel>
                    <h2>{props.bookshelf.name + " (" + props.bookshelf.qty + ")"}</h2>
                </IonLabel>
            }

            <IonButtons slot='end'>
                {editing &&
                    <IonButton onClick={() => editOnOnClick()} color={"success"} fill="solid">
                        <IonIcon slot="icon-only" icon={checkmark} />
                    </IonButton>
                }
                <IonButton onClick={toogleEditOnClick} color={"warning"} fill="solid">
                    <IonIcon slot="icon-only" icon={pencil} />
                </IonButton>
                <IonButton onClick={() => handleDelete()} color={"danger"} fill="solid">

                    <IonIcon slot="icon-only" icon={trash} />
                </IonButton>
            </IonButtons>
        </IonItem >
    )
}

export default BookshelfItem;

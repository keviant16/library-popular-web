import { IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonContent, IonInput, IonLabel, IonList, IonItem, IonSpinner } from "@ionic/react"
import { RefObject, useState } from "react"
import { useDispatch } from "react-redux"
import { pushBookshelf } from "../../app/features/bookshelf/bookshelfSlice"
import Bookshelf from "../../interface/Bookshelf"
import { addBookshelf } from "../../services/BookshelfService"

interface BookshelfAddFormProps {
    modal: RefObject<HTMLIonModalElement>
}

const BookshelfAddForm: React.FC<BookshelfAddFormProps> = (props: BookshelfAddFormProps) => {
    const [input, setInput] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>("");
    const dispatch = useDispatch()

    const handleChange = (e: any) => {
        setInput(e.detail.value!)
        setError("")
    }

    const isEmpty = () => {
        if (!input) {
            setError("Le champs est vide")
            return
        }
    }

    const handleResponse = (response: number | Bookshelf) => {
        if (response === 409) {
            setError("L'étagère " + input + " existe déjà.")

        } else if (typeof response !== "number") {
            dispatch(pushBookshelf(response))

        } else {
            console.error("unhandle error :" + response);
        }
    }

    const handleClick = async () => {
        isEmpty()
        setLoading(true)
        const bookshelf: Bookshelf = { name: input };
        const response: number | Bookshelf = await addBookshelf(bookshelf);
        setLoading(false)
        handleResponse(response)
    }

    return (
        <>
            <IonHeader>
                <IonToolbar>
                    <IonTitle><h3>Ajouter une étagères</h3></IonTitle>
                    <IonButtons slot="end">
                        <IonButton onClick={() => props.modal.current?.dismiss()}>Fermer</IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">

                <IonList>
                    <IonItem>
                        <IonInput
                            value={input}
                            placeholder="Ajouter une nouvelle section ici ..."
                            onIonChange={(e) => handleChange(e)} />
                        {error &&
                            <IonLabel slot="error" color={"danger"}>{error}</IonLabel>
                        }
                        <IonButton
                            onClick={handleClick}
                            slot="end"
                            color={"primary"}
                            expand="full"
                            size="default"
                            fill="solid">
                            {loading ? <IonSpinner name="bubbles" /> : "Ajouter"}
                        </IonButton>
                    </IonItem>
                </IonList>
            </IonContent>
        </>
    )
}
export default BookshelfAddForm
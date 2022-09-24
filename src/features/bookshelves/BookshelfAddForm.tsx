import { IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonContent, IonIcon, IonInput, IonLabel, IonList, IonItem } from "@ionic/react"
import { error } from "console"
import { add, text } from "ionicons/icons"
import { RefObject, useState } from "react"
import Bookshelf from "../../interface/Bookshelf"
import { addBookshelf } from "../../services/BookshelfService"

interface BookshelfAddFormProps {
    modal: RefObject<HTMLIonModalElement>
}

const BookshelfAddForm: React.FC<BookshelfAddFormProps> = (props: BookshelfAddFormProps) => {
    const [input, setInput] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>("");

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

    const isPresent = (status: number | undefined) => {
        if (status === 409) {
            setError("L'étagère " + input + " existe déjà.")
            return
        }
    }

    const handleClick = async () => {
        isEmpty()
        setLoading(true)
        const bookshelf: Bookshelf = { name: input };
        const status: number | undefined = await addBookshelf(bookshelf);
        console.log(status);

        setLoading(false)
        isPresent(status)
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
                            Ajouter
                        </IonButton>
                    </IonItem>
                </IonList>
            </IonContent>
        </>
    )
}
export default BookshelfAddForm
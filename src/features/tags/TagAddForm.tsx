import { IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonContent, IonInput, IonLabel, IonList, IonItem, IonSpinner } from "@ionic/react"
import { RefObject, useState } from "react"
import { useDispatch } from "react-redux"
import { pushBookshelf } from "../../app/features/bookshelf/bookshelfSlice"
import { pushTag } from "../../app/features/tag/tagSlice"
import Bookshelf from "../../interface/Bookshelf"
import Tag from "../../interface/Tag"
import { addBookshelf } from "../../services/BookshelfService"
import { addTag } from "../../services/TagService"

interface BookshelfAddFormProps {
    modal: RefObject<HTMLIonModalElement>
}

const TagAddForm: React.FC<BookshelfAddFormProps> = (props: BookshelfAddFormProps) => {
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

    const handleResponse = (response: number | Tag) => {
        if (response === 409) {
            setError("Le tag " + input + " existe déjà.")

        } else if (typeof response !== "number") {
            dispatch(pushTag(response))

        } else {
            console.error("unhandle error :" + response);
        }
    }

    const handleClick = async () => {
        isEmpty()
        setLoading(true)
        const value: Tag = { name: input, qty: 0 };
        const response: number | Tag = await addTag(value);
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
                            placeholder="Ajouter un nouveau tag ici ..."
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
export default TagAddForm;
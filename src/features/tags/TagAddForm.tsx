import { IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonContent, IonInput, IonLabel, IonList, IonItem, IonSpinner } from "@ionic/react"
import { RefObject, useState } from "react"
import { useDispatch } from "react-redux"
import { pushTag } from "../../app/features/tag/tagSlice"
import Tag from "../../interface/Tag"
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

    const handleClick = async () => {
        if (!input) return setError("Le champs est vide")
        setLoading(true)

        const new_tag: Tag = { name: input, qty: 0 };
        const response_tag_or_status: number | Tag = await addTag(new_tag);
        setLoading(false)

        if (response_tag_or_status === 409) return setError("Le tag " + input + " existe déjà.")
        if (typeof response_tag_or_status === "number") return setError("error" + response_tag_or_status)
        dispatch(pushTag(response_tag_or_status))
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
                        <IonLabel>Nom du tag: </IonLabel>
                        <IonInput
                            value={input}
                            placeholder="Ajouter un nouveau tag ici ..."
                            onIonChange={(e) => handleChange(e)}
                        />

                        <IonButton
                            onClick={handleClick}
                            slot="end"
                            color={"primary"}
                            expand="full"
                            size="default"
                            fill="solid"
                        >
                            {loading ? <IonSpinner name="bubbles" /> : "Ajouter"}
                        </IonButton>
                    </IonItem>
                    {error &&
                        <IonItem>
                            <IonLabel slot="error" color={"danger"}>{error}</IonLabel>
                        </IonItem>
                    }
                </IonList>
            </IonContent>
        </>
    )
}
export default TagAddForm;
import { IonButton, IonButtons, IonIcon, IonInput, IonItem, IonLabel, IonSpinner, useIonAlert } from "@ionic/react"
import { checkmark, pencil, trash } from "ionicons/icons";
import { useState } from "react";
import Tag from "../../interface/Tag";
import { deleteTag, editTag } from "../../services/TagService";

interface TagItemProps {
    tag: Tag,
    callback: () => Promise<void>,
}
const TagItem: React.FC<TagItemProps> = (props: TagItemProps) => {
    const [editing, setEditing] = useState<boolean>(false);
    const [input, setInput] = useState<string>();
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>();
    const [presentAlert] = useIonAlert();

    const deleteTagOnClick = async (resourceId: number | null) => {
        setLoading(true)
        await deleteTag(resourceId);
        props.callback()
        setLoading(false)
    }


    const editTagOnClick = async (resourceId: number | null, tag: Tag) => {

        if (!input) {
            setError("Le champs est vide")
            return
        }

        setLoading(true)
        const tagRequest: Tag = {
            label: input,
            bookNumber: tag.bookNumber,
            resourceId: tag.resourceId
        }

        const status: any = await editTag(resourceId, tagRequest);
        if (status === 409) {
            setError("La tag " + input + " existe déjà.")
            setLoading(false)
            return
        }

        setEditing(!editing)
        props.callback()
        setLoading(false)
    }

    const toogleEditOnClick = async () => {
        setEditing(!editing)
        setInput(props.tag.label);
    }

    const handleOnChange = (e: any) => {
        setInput(e.detail.value!)
        setError("")
    }

    const handleDelete = () => {
        presentAlert({
            header: "Attention !",
            subHeader: `Etes vous sur de vouloir supprimer la tag ${props.tag.label} ?`,
            message: `Les livres ayant le tag ${props.tag.label} le perderont`,
            buttons: [
                {
                    text: 'Annuler',
                    role: 'cancel',
                    handler: () => {
                        //cancel
                    },
                },
                {
                    text: 'Confirmer',
                    role: 'confirm',
                    handler: () => {
                        //confirm
                        deleteTagOnClick(props.tag.resourceId)
                    },
                },
            ],
        })
    }

    return (
        <IonItem>
            {loading ? <IonSpinner name="bubbles" /> : editing ?
                <>
                    <IonInput
                        value={input}
                        onIonChange={(e) => handleOnChange(e)}
                        clearInput />
                    {error &&
                        <IonLabel slot="error" color={"danger"}>{error}</IonLabel>
                    }
                </>
                :
                <IonLabel>
                    <h2>{props.tag.label}</h2>
                    <p>{props.tag.bookNumber} {props.tag.bookNumber > 0 ? "livres" : "livre"}</p>
                </IonLabel>
            }

            <IonButtons slot='end'>
                {editing &&
                    <IonButton onClick={() => editTagOnClick(props.tag.resourceId, props.tag)} color={"success"} fill="solid">
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
        </IonItem>
    )
}

export default TagItem;


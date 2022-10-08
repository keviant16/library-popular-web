import { IonButton, IonButtons, IonIcon, IonInput, IonItem, IonLabel, IonSpinner, useIonAlert } from "@ionic/react"
import { checkmark, pencil, trash } from "ionicons/icons";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { filterTag, updateTag } from "../../app/slice/tagSlice";
import Tag from "../../interface/Tag";
import { deleteTag, editTag } from "../../services/TagService";

interface TagItemProps {
    tag: Tag,
}
const TagItem: React.FC<TagItemProps> = (props: TagItemProps) => {
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
            subHeader: `Etes vous sur de vouloir supprimer la tag ${props.tag.name} ?`,
            message: `Les livres ayant le tag ${props.tag.name} le perderont`,
            buttons: [
                {
                    text: 'Annuler',
                    role: 'cancel',
                },
                {
                    text: 'Confirmer',
                    role: 'confirm',
                    handler: () => {
                        deleteOnClick(props.tag.id)
                    },
                },
            ],
        })
    }

    const editOnClick = async () => {
        if (!input) return setError("Le champs est vide")
        setLoading(true)

        const current_tag = { id: props.tag.id, name: input, qty: props.tag.qty }
        const ressponse_tag_or_status: any = await editTag(current_tag, props.tag.id);
        setLoading(false)
        setEditing(!editing)

        if (ressponse_tag_or_status === 409) return setError("Le tag " + input + " existe déjà.")
        if (typeof ressponse_tag_or_status === "number") return setError("error" + ressponse_tag_or_status)
        dispatch(updateTag(ressponse_tag_or_status))
    }

    const deleteOnClick = async (id?: number) => {
        setLoading(true)
        await deleteTag(id);
        dispatch(filterTag(props.tag))
        setLoading(false)
    }

    const toogleEditOnClick = async () => {
        setEditing(!editing)
        setInput(props.tag.name);
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
                </> :
                <IonLabel>
                    <h2>{props.tag.name + " (" + props.tag.qty + ")"} </h2>
                </IonLabel>
            }

            <IonButtons slot='end'>
                {editing &&
                    <IonButton onClick={() => editOnClick()} color={"success"} fill="solid">
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


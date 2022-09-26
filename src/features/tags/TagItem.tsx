import { IonButton, IonButtons, IonIcon, IonInput, IonItem, IonLabel, IonSpinner, useIonAlert } from "@ionic/react"
import { checkmark, pencil, trash } from "ionicons/icons";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterTag, setTags, updateTag } from "../../app/features/tag/tagSlice";
import Tag from "../../interface/Tag";
import { deleteTag, editTag, getAllTags } from "../../services/TagService";

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

    const updateTags = async () => {
        const response: Tag[] = await getAllTags();
        dispatch(setTags(response))
    }

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
                    handler: () => {
                        //cancel
                    },
                },
                {
                    text: 'Confirmer',
                    role: 'confirm',
                    handler: () => {
                        //confirm
                        deleteOnClick(props.tag.id)
                    },
                },
            ],
        })
    }

    const editOnClick = async () => {
        if (!input) return setError("Le champs est vide")

        setLoading(true)
        const value = { id: props.tag.id, name: input, qty: props.tag.qty }
        const response: any = await editTag(value, props.tag.id);

        if (response === 409) {
            setError("Le tag " + input + " existe déjà.")
            setLoading(false)
        } else if (typeof response !== "number") {
            await updateTags()
            setEditing(!editing)
        } else {
            console.error("unhandle error" + response);
        }

        setLoading(false)
    }

    const deleteOnClick = async (id?: number) => {
        setLoading(true)
        await deleteTag(id);
        await updateTags()
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
                </>
                :
                <IonLabel>
                    <h2>{props.tag.name} </h2>
                    <p>{"(" + props.tag.qty + ")"}</p>
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


import { IonButton, IonButtons, IonIcon, IonInput, IonItem, IonLabel, IonSpinner, useIonAlert } from "@ionic/react"
import { checkmark, pencil, trash } from "ionicons/icons";
import { useState } from "react";
import Section from "../../interface/Section";
import { deleteSection, editSection } from "../../services/SectionService";

interface SectionItemProps {
    section: Section,
    callback: () =>
        Promise<void>,
}

const SectionItem: React.FC<SectionItemProps> = (props: SectionItemProps) => {
    const [editing, setEditing] = useState(false);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [presentAlert] = useIonAlert();

    const deleteSectionOnClick = async (resourceId: number | null) => {
        setLoading(true)

        await deleteSection(resourceId);
        props.callback()
        setLoading(false)
    }


    const editSelectionOnClick = async (resourceId: number | null, section: Section) => {

        if (!input) {
            setError("Le champs est vide")
            return
        }

        setLoading(true)
        const sectionRequest: Section = {
            label: input,
            bookNumber: section.bookNumber,
            resourceId: section.resourceId
        }

        const status: any = await editSection(resourceId, sectionRequest);
        if (status === 409) {
            setError("La section " + input + " existe déjà.")
            setLoading(false)
            return
        }

        setEditing(!editing)
        props.callback()
        setLoading(false)
    }

    const toogleEditOnClick = async () => {
        setEditing(!editing)
        setInput(props.section.label);
    }

    const handleOnChange = (e: any) => {
        setInput(e.detail.value!)
        setError("")
    }

    const handleDelete = () => {
        presentAlert({
            header: "Attention !",
            subHeader: `Etes vous sur de vouloir supprimer la section ${props.section.label} ?`,
            message: `Les livres présents dans la section ${props.section.label} seront ajouter a la section 'Sans catégories'.`,
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
                        deleteSectionOnClick(props.section.resourceId)
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
                    <h2>{props.section.label}</h2>
                    <p>{props.section.bookNumber} {props.section.bookNumber > 0 ? "livres" : "livre"}</p>
                </IonLabel>
            }

            <IonButtons slot='end'>
                {editing &&
                    <IonButton onClick={() => editSelectionOnClick(props.section.resourceId, props.section)} color={"success"} fill="solid">
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

export default SectionItem;


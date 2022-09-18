import { IonList, IonListHeader, IonLabel, IonItem, IonInput, IonButton, IonIcon, IonSpinner } from "@ionic/react"
import { add } from "ionicons/icons"
import { useEffect, useState } from "react";
import Section from "../../interface/Section";
import { addSection, getAllSections } from "../../services/SectionService";
import SectionItem from "./SectionItem";

const SectionList = () => {
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const [sectionList, setSectionList] = useState([]);
    const [error, setError] = useState("");

    const initSectionList = async () => {
        const sections: any = await getAllSections();
        setSectionList(sections)
        setLoading(false)
    }

    const addSectionOnClick = async () => {

        if (!input) {
            setError("Le champs est vide")
            return
        }

        setLoading(true)
        const newSection: Section = { label: input, bookNumber: 0, resourceId: null }
        const status: number | undefined = await addSection(newSection);

        if (status === 409) {
            setError("La section " + input + " existe déjà.")
            setLoading(false)
            return
        }

        initSectionList()
    }

    const handleOnChange = (e: any) => {
        setInput(e.detail.value!)
        setError("")
    }

    useEffect(() => {
        setLoading(true)
        initSectionList()
    }, []);

    return (
        <IonList>
            <IonListHeader>
                <IonLabel>
                    <h1>Section</h1>
                    <p>D'Ici vous pouvez ajouter, modifer et supprimer une section de la librairie</p>
                </IonLabel>
            </IonListHeader>
            <IonItem>
                <IonInput
                    value={input}
                    placeholder="Ajouter une nouvelle section ici ..."
                    onIonChange={(e) => handleOnChange(e)} />
                {error &&
                    <IonLabel slot="error" color={"danger"}>{error}</IonLabel>
                }
                <IonButton
                    onClick={addSectionOnClick}
                    slot="end"
                    color={"primary"}
                    fill="solid">
                    <IonIcon slot="icon-only" icon={add} />
                </IonButton>
            </IonItem>

            {loading ? <IonSpinner name="bubbles" /> :
                sectionList.map((section: Section) => (
                    <SectionItem
                        key={section.resourceId}
                        section={section}
                        callback={initSectionList}
                    />
                ))}
        </IonList>
    )
}

export default SectionList
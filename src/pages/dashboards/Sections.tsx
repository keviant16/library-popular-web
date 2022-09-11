import { IonButton, IonButtons, IonCol, IonContent, IonGrid, IonIcon, IonInput, IonItem, IonLabel, IonList, IonListHeader, IonPage, IonRow, IonSpinner } from '@ionic/react';
import { add, pencil, trash } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import Section from '../../interface/Section';
import { addSection, deleteSection, getAllSections } from '../../services/SectionService';

const Sections: React.FC = () => {
    const [sectionList, setsectionList] = useState([]);
    const [text, settext] = useState("");
    const [loading, setloading] = useState(false);

    useEffect(() => {
        setloading(true)
        initSectionList()
    }, []);

    const initSectionList = async () => {

        const sections: any = await getAllSections();
        setsectionList(sections)
        setloading(false)
    }

    const addSectionOnClick = async () => {
        setloading(true)

        const newSection: Section = { label: text, bookNumber: 0, resourceId: 0 }
        const response: any = await addSection(newSection);
        console.log(response);

        initSectionList()
    }

    const deleteSectionOnClick = async (resourceId: number) => {
        setloading(true)

        const response: any = await deleteSection(resourceId);
        console.log(response);

        initSectionList()
    }

    return (
        <IonPage>
            <Header />
            <IonContent fullscreen>
                <IonGrid>
                    <IonRow>
                        <IonCol>
                            <IonList>
                                <IonListHeader>
                                    <IonLabel>
                                        <h1>Section</h1>
                                        <p>D'Ici vous pouvez ajouter, modifer et supprimer une section de la librairie</p>
                                    </IonLabel>
                                </IonListHeader>
                                <IonItem>
                                    <IonInput value={text} placeholder="Ajouter une nouvelle section ici ..." onIonChange={e => settext(e.detail.value!)} clearInput></IonInput>
                                    <IonButton onClick={addSectionOnClick} slot="end" color={"primary"} fill="solid">
                                        <IonIcon slot="icon-only" icon={add} />
                                    </IonButton>
                                </IonItem>

                                {loading ? <IonSpinner name="bubbles" /> :
                                    sectionList.map((section: Section) => (
                                        <IonItem key={section.resourceId}>
                                            <IonLabel>
                                                <h2>{section.label}</h2>
                                                <p>{section.bookNumber} {section.bookNumber > 0 ? "livres" : "livre"}</p>
                                            </IonLabel>
                                            <IonButtons>
                                                <IonButton onClick={() => console.log("show")} slot="end" color={"warning"} fill="solid">
                                                    <IonIcon slot="icon-only" icon={pencil} />
                                                </IonButton>
                                                <IonButton onClick={() => deleteSectionOnClick(section.resourceId)} slot="end" color={"danger"} fill="solid">
                                                    <IonIcon slot="icon-only" icon={trash} />
                                                </IonButton>
                                            </IonButtons>
                                        </IonItem>
                                    ))}

                            </IonList>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default Sections;


import { IonCol, IonContent, IonGrid, IonPage, IonRow } from '@ionic/react';
import { Header } from '../../components/Header';
import SectionList from '../../features/section/SectionList';


const Sections: React.FC = () => (
    <IonPage>
        <Header />
        <IonContent>
            <IonGrid fixed >
                <IonRow>
                    <IonCol>
                        <SectionList />
                    </IonCol>
                </IonRow>
            </IonGrid>
        </IonContent>
    </IonPage>

)

export default Sections;


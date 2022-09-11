import { IonCol, IonContent, IonGrid, IonPage, IonRow } from '@ionic/react';
import { Header } from '../../components/Header';
import TagList from '../../features/tags/TagList';
const Tags: React.FC = () => {
    return (
        <IonPage>
            <Header />
            <IonContent>
                <IonGrid fixed >
                    <IonRow>
                        <IonCol>
                            <TagList />
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default Tags;

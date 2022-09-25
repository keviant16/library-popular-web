import { IonCol, IonContent, IonGrid, IonPage, IonRow } from '@ionic/react';
import AddModal from '../../components/AddModal';
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
                <AddModal view="tag" />
            </IonContent>
        </IonPage>
    );
};

export default Tags;

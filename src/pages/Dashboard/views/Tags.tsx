import { IonContent, IonPage } from '@ionic/react';
import { Header } from '../../../components/Header';
import TagList from '../../../features/tags/TagList';

const Tags: React.FC = () => {
    return (
        <IonPage>
            <Header />
            <IonContent>
                <TagList />
            </IonContent>
        </IonPage>
    );
};

export default Tags;

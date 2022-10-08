import { IonCol, IonContent, IonGrid, IonPage, IonRow } from '@ionic/react';
import { Header } from '../../../components/Header';
import AddModal from '../../../components/AddModal';
import BookshelfList from '../../../features/bookshelves/BookshelfList';
import { add } from 'ionicons/icons';

const Bookshelf: React.FC = () => {

    return (
        <IonPage>
            <Header />
            <IonContent>
                <IonGrid fixed>
                    <IonRow>
                        <IonCol>
                            <BookshelfList />
                        </IonCol>
                    </IonRow>
                </IonGrid>
                <AddModal view="bookshelf" icon={add} />
            </IonContent>
        </IonPage>
    )
}

export default Bookshelf;


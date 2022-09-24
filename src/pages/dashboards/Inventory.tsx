import { IonCol, IonContent, IonFab, IonFabButton, IonGrid, IonIcon, IonPage, IonRow } from '@ionic/react';
import { add } from 'ionicons/icons';
import { Header } from '../../components/Header';
import AddBookModal from '../../features/books/AddBookModal';
import BookList from '../../features/books/BookList';


const Inventory: React.FC = () => {
    return (
        <IonPage>
            <Header />
            <IonContent>
                <IonGrid fixed>
                    <IonRow>
                        <IonCol>
                            <BookList />
                        </IonCol>
                    </IonRow>
                </IonGrid>
                <AddBookModal />
            </IonContent>
        </IonPage>
    );
};

export default Inventory;

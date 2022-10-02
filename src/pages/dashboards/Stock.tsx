import { IonCol, IonContent, IonGrid, IonPage, IonRow, } from '@ionic/react';
import { add, } from 'ionicons/icons';
import AddModal from '../../components/AddModal';
import { Header } from '../../components/Header';
import BookList from '../../features/books/BookList';

const Stock: React.FC = () => {
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
                <AddModal view="book" icon={add} />
            </IonContent>
        </IonPage>
    );
};

export default Stock;

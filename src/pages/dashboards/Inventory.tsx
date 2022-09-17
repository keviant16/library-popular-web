import { IonCol, IonContent, IonGrid, IonNav, IonPage, IonRow } from '@ionic/react';
import { Header } from '../../components/Header';
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
            </IonContent>
        </IonPage>
    );
};

export default Inventory;

import { IonCol, IonContent, IonGrid, IonPage, IonRow } from '@ionic/react';
import { Header } from '../../components/Header';
import AddModal from '../../components/AddModal';
import BookshelfList from '../../features/bookshelves/BookshelfList';


const BookshelfDashboard: React.FC = () => (
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
            <AddModal view="bookshelf" />
        </IonContent>
    </IonPage>

)

export default BookshelfDashboard;


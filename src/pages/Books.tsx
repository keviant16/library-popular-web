import { IonContent, IonPage } from '@ionic/react';
import { Header } from '../components/Header';
import BookList from '../features/books/BookList';

const Books: React.FC = () => {
    return (
        <IonPage>
            <Header />
            <IonContent>
                <BookList hideReturn />
            </IonContent>
        </IonPage>
    );
};

export default Books;

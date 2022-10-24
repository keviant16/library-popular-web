import { IonContent, IonPage } from '@ionic/react';
import { Header } from '../../../components/Header';
import BookshelfList from '../../../features/bookshelves/BookshelfList';

const Bookshelf: React.FC = () => {

    return (
        <IonPage>
            <Header />
            <IonContent>
                <BookshelfList />
            </IonContent>
        </IonPage>
    )
}

export default Bookshelf;


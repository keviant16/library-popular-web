import { IonContent, IonPage } from '@ionic/react';
import { Header } from '../../../components/Header';
import BookList from '../../../features/books/BookList';
import BookModal from '../../../features/books/BookModal';

const Stock: React.FC = () => {
  return (
    <IonPage>
      <Header />
      <IonContent>
        <BookList hideAddBook />
        <BookModal />
      </IonContent>
    </IonPage>
  );
};

export default Stock;

import { IonContent, IonPage } from '@ionic/react';
import { add, } from 'ionicons/icons';
import AddModal from '../../../components/AddModal';
import { Header } from '../../../components/Header';
import BookList from '../../../features/books/BookList';

const Stock: React.FC = () => {
  return (
    <IonPage>
      <Header />
      <IonContent>
        <BookList />
        <AddModal view="book" icon={add} />
      </IonContent>
    </IonPage>
  );
};

export default Stock;

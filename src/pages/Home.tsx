import { IonCol, IonContent, IonGrid, IonPage, IonRow, } from '@ionic/react';
import { Header } from '../components/Header';
import About from '../components/sections/About';
import Faq from '../components/sections/Faq';
import Overview from '../components/sections/Overview';
import NewBookList from '../features/books/NewBookList';

const Home: React.FC = () => {
  return (
    <IonPage>
      <Header />
      <IonContent fullscreen>
        <IonGrid>

          <IonRow className='blue'>
            <IonCol>
              <Overview />
            </IonCol>
          </IonRow>

          <IonRow >
            <IonCol>
              <NewBookList />
            </IonCol>
          </IonRow>

          <IonRow className='red'>
            <IonCol>
              <About />
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <Faq />
            </IonCol>
          </IonRow>

        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;

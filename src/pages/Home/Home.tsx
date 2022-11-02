import { IonCol, IonContent, IonGrid, IonPage, IonRow, } from '@ionic/react';
import { Header } from '../../components/Header';
import About from './sections/About';
import Faq from './sections/Faq';
import Overview from './sections/Overview';
import NewBookList from '../../features/books/NewBookList';
import Contact from './sections/Contact';

const Home: React.FC = () => {
  return (
    <IonPage>
      <Header />
      <IonContent fullscreen>
        <IonGrid>
          <IonRow className='blue'>
            <IonCol><Overview /></IonCol>
          </IonRow>

          <IonRow>
            <IonCol><NewBookList /></IonCol>
          </IonRow>

          <IonRow className='blue'>
            <IonCol><About /></IonCol>
          </IonRow>

          {/* <IonRow>
            <IonCol>
              <Faq />
            </IonCol>
          </IonRow> */}


          <IonRow>
            <IonCol>
              <Contact />
            </IonCol>
          </IonRow>


        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;

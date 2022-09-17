import { IonCol, IonContent, IonGrid, IonPage, IonRow, } from '@ionic/react';
import Footer from '../components/Footer';
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
          <IonRow>
            <IonCol>
              <Overview />
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <NewBookList />
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <About />
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <Faq />
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <Footer />
            </IonCol>
          </IonRow>

        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;

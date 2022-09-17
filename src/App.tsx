import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonAvatar, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonListHeader, IonMenu, IonMenuToggle, IonRouterOutlet, IonTitle, IonToolbar, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import './theme/styles.css';
import './theme/typography.css';

import Books from './pages/Books';
import Dashboard from './pages/Dashboard';
import Cart from './pages/Booking';
import Reservations from './pages/dashboards/Reservations';
import Tags from './pages/dashboards/Tags';
import Sections from './pages/dashboards/Sections';
import Inventory from './pages/dashboards/Inventory';
import { book, cart, home, logIn, logOut, person, statsChart } from 'ionicons/icons';
import AddBook from './pages/dashboards/AddBook';
import { userInfo } from 'os';
import Booking from './pages/Booking';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonMenu contentId='main'>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>
            Menu
          </IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonMenuToggle auto-hide="false">
          <IonList>
            <IonItem button routerLink='/accueil'>
              <IonIcon slot='start' color='secondary' icon={home} />
              <IonLabel>Accueil</IonLabel>
            </IonItem>
            <IonItem button routerLink="/livres">
              <IonIcon slot='start' color='secondary' icon={book} />
              <IonLabel>Rechercher un livre</IonLabel>
            </IonItem>
            <IonItem button routerLink="/panier">
              <IonIcon slot='start' color='secondary' icon={cart} />
              <IonLabel>panier</IonLabel>
            </IonItem>
            <IonItem button>
              <IonIcon icon={logIn} slot='start' color='secondary' />
              <IonLabel>Connexion</IonLabel>
            </IonItem>
            <IonItem button routerLink='/tableau-de-bord'>
              <IonIcon color='secondary' slot='start' icon={statsChart} />
              <IonLabel>Tableau de board</IonLabel>
            </IonItem>

            <IonItem button routerLink='/'>
              <IonIcon color='secondary' slot='start' icon={person} />
              <IonLabel>Profil</IonLabel>
            </IonItem>
            <IonItem button routerLink='/'>
              <IonIcon color='secondary' slot='start' icon={logOut} />
              <IonLabel>Déconnexion</IonLabel>
            </IonItem>
          </IonList>
        </IonMenuToggle>
      </IonContent>
    </IonMenu>

    <IonReactRouter>
      <IonRouterOutlet id='main'>
        <Route exact path="/accueil" component={Home} />
        <Route exact path="/livres" component={Books} />
        <Route exact path="/panier" component={Booking} />
        <Route exact path="/tableau-de-bord" component={Dashboard} />
        <Route exact path="/tableau-de-bord/sections" component={Sections} />
        <Route exact path="/tableau-de-bord/livres" component={Inventory} />
        <Route exact path="/tableau-de-bord/livres/ajouter-un-livre" component={AddBook} />
        <Route exact path="/tableau-de-bord/tags" component={Tags} />
        <Route exact path="/tableau-de-bord/reservations" component={Reservations} />
        <Redirect exact from="/" to="/accueil" />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;

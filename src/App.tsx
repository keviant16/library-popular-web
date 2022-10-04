import { Redirect, Route, useHistory } from 'react-router-dom';
import { IonApp, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenu, IonMenuToggle, IonRouterOutlet, IonTitle, IonToolbar, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import { book, cart, home, logIn, logOut, person, statsChart } from 'ionicons/icons';

import Home from './pages/Home';
import Books from './pages/Books';
import Dashboard from './pages/Dashboard';
import Reservations from './pages/dashboards/Reservations';
import Tags from './pages/dashboards/Tags';
import Booking from './pages/Booking';
import Bookshelf from './pages/dashboards/Bookshelf';
import Stock from './pages/dashboards/Stock';

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
import Login from './pages/Login';

setupIonicReact();

const App: React.FC = () => {
  const history = useHistory()

  const logout = () => {
    localStorage.clear()
    history.push("/accueil")
  }

  return (
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
                <IonLabel>Panier</IonLabel>
              </IonItem>

              <IonItem button routerLink="/connexion">
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
              <IonItem button onClick={logout} >
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
          <Route exact path="/connexion" component={Login} />
          <Route exact path="/tableau-de-bord" component={Dashboard} />
          <Route exact path="/tableau-de-bord/étagères" component={Bookshelf} />
          <Route exact path="/tableau-de-bord/livres" component={Stock} />
          <Route exact path="/tableau-de-bord/tags" component={Tags} />
          <Route exact path="/tableau-de-bord/reservations" component={Reservations} />
          <Redirect exact from="/" to="/accueil" />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
}
export default App;

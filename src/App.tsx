import { Route } from 'react-router-dom';
import { IonApp, IonHeader, IonItem, IonLabel, IonRouterOutlet, IonThumbnail, IonTitle, IonToolbar, setupIonicReact } from '@ionic/react';
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
import Cart from './pages/Cart';
import library_logo from './assets/logos/library-logo.svg';
import Reservations from './pages/dashboards/Reservations';
import Tags from './pages/dashboards/Tags';
import Sections from './pages/dashboards/Sections';


setupIonicReact();



const App: React.FC = () => (
  <IonApp>
    <IonHeader>
      <IonToolbar>
        <IonItem>
          <IonThumbnail slot="start">
            <img src={library_logo} alt="" />
          </IonThumbnail>
          <IonLabel>
            <h1>
              Librairie Populaire
            </h1>
          </IonLabel>
        </IonItem>
        <IonTitle>
        </IonTitle>
      </IonToolbar>
    </IonHeader>

    <IonReactRouter>
      <IonRouterOutlet id='main'>
        <Route exact path="/accueil" component={Home} />
        <Route exact path="/livres" component={Books} />
        <Route exact path="/panier" component={Cart} />
        <Route exact path="/tableau-de-bord" component={Dashboard} />
        <Route exact path="/tableau-de-bord/sections" component={Sections} />
        {/* <Route exact path="/tableau-de-bord/livres" component={Books} /> */}
        <Route exact path="/tableau-de-bord/tags" component={Tags} />
        <Route exact path="/tableau-de-bord/reservations" component={Reservations} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;

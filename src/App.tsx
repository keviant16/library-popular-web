import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenu, IonMenuToggle, IonRouterOutlet, IonSplitPane, IonTitle, IonToolbar, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { book, cart, home, logIn, logOut, menu, statsChart } from 'ionicons/icons';

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
import { useDispatch, useSelector } from 'react-redux';
import { set_is_admim, set_is_auth, set_is_volunteer } from './app/slice/authSlice';
import { useEffect } from 'react';
import Credential from './pages/Dashboard/views/Credential';
import Home from './pages/Home/Home';
import Books from './pages/Books';
import Dashboard from './pages/Dashboard/Dashboard';
import Tags from './pages/Dashboard/views/Tags';
import BookshelfDashboad from './pages/Dashboard/views/Bookshelf';
import Stock from './pages/Dashboard/views/Stock';
import { getAllTags } from './services/TagService';
import Tag from './interface/Tag';
import { setTags } from './app/slice/tagSlice';
import Book from './interface/Book';
import { getAllbooks } from './services/BookService';
import { setBooks } from './app/slice/bookSlice';
import { getAllBookshelves } from './services/BookshelfService';
import { setBookshelves } from './app/slice/bookshelfSlice';
import Bookshelf from './interface/Bookshelf';

setupIonicReact();

const App: React.FC = () => {
  const { is_volunteer, is_admin, is_auth } = useSelector((state: any) => state.auth)
  const dispatch = useDispatch()

  useEffect(() => {
    const has_token = localStorage.getItem("jwtToken") ? true : false
    const has_admin = localStorage.getItem("isAdmin") ? true : false
    const has_volunteer = localStorage.getItem("isVolunteer") ? true : false

    const initStates = async () => {
      const response_tags: Tag[] = await getAllTags();
      const response_bookshelves: Bookshelf[] = await getAllBookshelves();
      const response_books: Book[] = await getAllbooks();

      dispatch(setBooks(response_books))
      dispatch(setBookshelves(response_bookshelves))
      dispatch(setTags(response_tags))
    }

    initStates()
    dispatch(set_is_auth(has_token))
    dispatch(set_is_admim(has_admin))
    dispatch(set_is_volunteer(has_volunteer))

  }, [dispatch]);

  return (
    <IonApp>
      <IonSplitPane contentId='main'>
        <IonMenu contentId='main'>
          <IonHeader>
            <IonToolbar color="primary">
              <IonButtons slot="start">
                <IonMenuToggle>
                  <IonButton>
                    <IonIcon slot="icon-only" icon={menu}></IonIcon>
                  </IonButton>
                </IonMenuToggle>
              </IonButtons>
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

                {!is_auth &&
                  <IonItem button routerLink="/connexion">
                    <IonIcon icon={logIn} slot='start' color='secondary' />
                    <IonLabel>Connexion</IonLabel>
                  </IonItem>
                }

                {is_auth &&
                  <IonItem button routerLink='/tableau-de-bord'>
                    <IonIcon color='secondary' slot='start' icon={statsChart} />
                    <IonLabel>Espace {is_admin && "admin"} {is_admin && is_volunteer && "/"}  {is_volunteer && "bénévole"} </IonLabel>
                  </IonItem>
                }

                {is_auth &&
                  <IonItem button routerLink='/logout' >
                    <IonIcon color='secondary' slot='start' icon={logOut} />
                    <IonLabel>Déconnexion</IonLabel>
                  </IonItem>
                }
              </IonList>
            </IonMenuToggle>
          </IonContent>
        </IonMenu>

        <IonReactRouter>
          <IonRouterOutlet id='main'>
            <Route exact path="/accueil" component={Home} />
            <Route exact path="/livres" component={Books} />
            <Route exact path="/connexion" component={Login} />

            <Route exact path="/tableau-de-bord/identifiants" render={() => {
              return is_admin ? <Credential /> : <Home />
            }} />

            <Route exact path="/tableau-de-bord" render={() => {
              return is_auth ? <Dashboard /> : <Home />
            }} />

            <Route exact path="/tableau-de-bord/étagères" render={() => {
              return is_volunteer ? <BookshelfDashboad /> : <Home />
            }} />

            <Route exact path="/tableau-de-bord/livres" render={() => {
              return is_volunteer ? <Stock /> : <Home />
            }} />

            <Route exact path="/tableau-de-bord/tags" render={() => {
              return is_volunteer ? <Tags /> : <Home />
            }} />

            <Route path="/logout" render={() => {
              localStorage.clear()
              dispatch(set_is_auth(false))
              dispatch(set_is_admim(false))
              dispatch(set_is_volunteer(false))
              return <Redirect to={{ pathname: "/" }} />;
            }}
            />
            <Redirect exact from="/" to="/accueil" />
          </IonRouterOutlet>
        </IonReactRouter>
      </IonSplitPane>
    </IonApp>
  );
}
export default App;

import { IonButton, IonCol, IonContent, IonGrid, IonIcon, IonImg, IonItem, IonLabel, IonList, IonListHeader, IonNavLink, IonPage, IonRow, IonSearchbar, IonThumbnail, } from '@ionic/react';
import { book, filter } from 'ionicons/icons';
import { useState } from 'react';
import { Header } from '../components/Header';
import BookForm from '../features/books/BookForm';
import BookList from '../features/books/BookList';

const Books: React.FC = () => {
    const [searchText, setSearchText] = useState('');

    function handleChange(value: string) {
        setSearchText(value)
    }

    return (
        <IonPage>
            <Header />
            <IonContent >
                <IonGrid fixed >
                    <IonRow>
                        <IonCol>
                            <IonList>
                                <IonItem lines='none'>
                                    <IonLabel>Searchbar with cancel button shown on focus</IonLabel>
                                    <IonSearchbar debounce={250} placeholder='ex : London' animated value={searchText} onIonChange={e => handleChange(e.detail.value!)} showCancelButton="focus"></IonSearchbar>
                                    <IonButton slot='end' size='default'><IonIcon icon={filter} /> </IonButton>
                                </IonItem>
                                <IonListHeader>
                                    Resultats ...
                                </IonListHeader>
                                <IonItem button>
                                    <IonThumbnail style={{ with: 100 }} slot="start">
                                        <IonImg alt="couverture-du-livre" src="https://ionicframework.com/docs/demos/api/thumbnail/thumbnail.svg" />
                                    </IonThumbnail>
                                    <IonLabel>
                                        <h2>Title</h2>
                                        <p>Auteur / Section</p>
                                        <p>tags</p>
                                    </IonLabel>
                                </IonItem>
                            </IonList>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default Books;

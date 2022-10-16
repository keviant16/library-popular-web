import { IonButton, IonContent, IonIcon, IonItem, IonLabel, IonList, IonListHeader, IonPage, IonSearchbar } from '@ionic/react';
import { filter } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setBooks } from '../app/slice/bookSlice';
import { Header } from '../components/Header';
import BookList from '../features/books/BookList';
import { getBooksByTitle } from '../services/BookService';

const Books: React.FC = () => {
    const [searchText, setSearchText] = useState('');
    const dispatch = useDispatch()

    useEffect(() => {
        fetchBooksByTitle()
    }, [searchText])

    const handleChange = async (value: string) => {
        setSearchText(value)
    }

    const fetchBooksByTitle = async () => {
        const search_response = await getBooksByTitle(searchText)
        dispatch(setBooks(search_response))
    }


    return (
        <IonPage>
            <Header />
            <IonContent >
                <IonList>
                    <IonListHeader>
                        <h1>Rechercher un livre</h1>
                    </IonListHeader>
                    <IonItem lines='none'>
                        <IonLabel>Searchbar with cancel button shown on focus</IonLabel>
                        <IonSearchbar
                            debounce={250}
                            placeholder='ex : Le Horla'
                            animated
                            value={searchText}
                            onIonChange={e => handleChange(e.detail.value!)}
                            showCancelButton="focus"
                        />
                        <IonButton slot='end' size='default'>
                            <IonIcon icon={filter} />
                        </IonButton>
                    </IonItem>
                    <IonItem>
                        Resultats de la recherche pour : {searchText}
                    </IonItem>
                    <BookList />
                </IonList>
            </IonContent >
        </IonPage >
    );
};

export default Books;

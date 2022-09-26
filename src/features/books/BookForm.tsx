import { IonBackButton, IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonImg, IonItem, IonItemDivider, IonItemGroup, IonLabel, IonList, IonRow, IonSelect, IonSelectOption, IonSpinner, IonTitle, IonToolbar } from '@ionic/react';
import { RefObject, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setBookshelves } from '../../app/features/bookshelf/bookshelfSlice';
import { setTags } from '../../app/features/tag/tagSlice';
import Author from '../../interface/Author';
import Book from '../../interface/Book';
import Bookshelf from '../../interface/Bookshelf';
import Tag from '../../interface/Tag';
import { addBook } from '../../services/BookService';
import { getAllBookshelves } from '../../services/BookshelfService';
import { getAllTags } from '../../services/TagService';

interface BookFormProps {
    modal: RefObject<HTMLIonModalElement>,
    book: Book
}

const BookForm: React.FC<BookFormProps> = (props: BookFormProps) => {
    const [loading, setLoading] = useState<boolean>();
    const [error, setError] = useState<string>();
    const tags = useSelector((state: any) => state.tag.tags)
    const bookshelves = useSelector((state: any) => state.bookshelf.bookshelves)
    const dispatch = useDispatch()

    useEffect(() => {
        const initOnStart = async () => {
            const response1: Tag[] = await getAllTags();
            const response2: Tag[] = await getAllBookshelves();
            dispatch(setTags(response1))
            dispatch(setBookshelves(response2))
        }
        initOnStart()
    }, [dispatch]);

    const addBookOnClick = async () => {
        if (!props.book.bookshelf || !props.book.price) return

        setLoading(true)
        await addBook(props.book)
        setLoading(false)
        props.modal.current?.dismiss()
    }

    const handleTagChange = (e: string[]) => {
        const currentTags: any[] = e.map((element: string) =>
            tags.find((value: Tag) => (value.name === element))
        );
        props.book.tags = currentTags;
    }

    const handleBookshelfChange = (e: any) => {
        const currentBookshelf: Bookshelf = bookshelves.find((value: Bookshelf) => (value.name === e));
        props.book.bookshelf = currentBookshelf
    }

    const handlePriceChange = (e: any) => {
        props.book.price = parseFloat(e)
    }

    return (
        <>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot='start'>
                        <IonBackButton ></IonBackButton>
                    </IonButtons>
                    <IonTitle><h3>2. Ajouter</h3> </IonTitle>
                    <IonButtons slot='end'>
                        <IonButton onClick={() => props.modal.current?.dismiss()}>Fermer</IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader >
            <IonContent className="ion-padding">
                <IonGrid>
                    <IonRow>
                        <IonCol sizeSm="3">
                            <IonImg alt={"couverture-du-livre" + props.book.title}
                                className="thumbnaill"
                                src={props.book.image ? props.book.image : "https://ionicframework.com/docs/demos/api/thumbnail/thumbnail.svg"} />
                        </IonCol>
                        <IonCol sizeSm="9" >
                            <IonList>
                                <IonItem>
                                    <IonLabel>
                                        <h3>Titre :</h3>
                                        <p>{props.book.title}</p>
                                    </IonLabel>
                                </IonItem>
                                <IonItem>
                                    <IonLabel>
                                        <h3>Auteur(s) :</h3>
                                        <ul>
                                            {props.book.authors.map((author: Author, idx: number) => (
                                                <li key={idx}><p>{author.name}</p></li>
                                            ))}
                                        </ul>
                                    </IonLabel>
                                </IonItem>
                            </IonList>
                        </IonCol>
                        <IonCol size="12" sizeSm="12">
                            <IonList>
                                <IonItem>
                                    <IonLabel>
                                        <h3>Sous-titre :</h3>
                                        <p>{props.book.subtitle ? props.book.subtitle : "-"}</p>
                                    </IonLabel>
                                </IonItem>
                                <IonItem>
                                    <IonLabel>
                                        <h3>Description :</h3>
                                        <p>{props.book.description ? props.book.description : "-"}</p>
                                    </IonLabel>
                                </IonItem>

                                <IonItem>
                                    <IonLabel>
                                        <h3>Editeur :</h3>
                                        <p>{props.book.publisher ? props.book.publisher : "-"}</p>
                                    </IonLabel>
                                </IonItem>

                                <IonItem>
                                    <IonLabel>
                                        <h3>Date de publication :</h3>
                                        <p>{props.book.publishedDate ? props.book.publishedDate : "-"}</p>
                                    </IonLabel>
                                </IonItem>
                                <IonItem>
                                    <IonLabel>
                                        <h3>Nombre de livre :</h3>
                                        <p>{props.book.pageCount ? props.book.pageCount : "-"}</p>
                                    </IonLabel>
                                </IonItem>

                                <IonItemDivider>
                                    <IonLabel>Information à remplir</IonLabel>
                                </IonItemDivider>
                                <IonItem>
                                    <IonLabel>
                                        <h3>Etagère :</h3>
                                    </IonLabel>
                                    <IonSelect onIonChange={(e) => handleBookshelfChange(e.detail.value)}>
                                        {bookshelves ? bookshelves.map((bookshelf: Bookshelf) => (
                                            <IonSelectOption key={bookshelf.id} value={bookshelf.name}>{bookshelf.name}</IonSelectOption>
                                        )) : <IonSpinner name="bubbles" />}
                                    </IonSelect>
                                </IonItem>
                                <IonItem>
                                    <IonLabel>
                                        <h3>Tags :</h3>
                                    </IonLabel>
                                    <IonSelect multiple onIonChange={(e) => handleTagChange(e.detail.value)}>
                                        {tags ? tags.map((tag: Tag) => (
                                            <IonSelectOption key={tag.id} value={tag.name}>{tag.name}</IonSelectOption>
                                        )) : <IonSpinner name="bubbles" />}
                                    </IonSelect>
                                </IonItem>
                                <IonItem>
                                    <IonLabel>
                                        <h3>Prix :</h3>
                                    </IonLabel>
                                    <IonSelect placeholder="(en €)" onIonChange={(e) => handlePriceChange(e.detail.value)}>
                                        <IonSelectOption value={1.00}>1.00 €</IonSelectOption>
                                        <IonSelectOption value={0.50}>0.50 €</IonSelectOption>
                                    </IonSelect>
                                </IonItem>
                                {error && <IonItem color={'danger'}>{error}</IonItem>}
                                <IonButton expand="full" onClick={addBookOnClick}>
                                    {loading && <IonSpinner name="bubbles" />}
                                    Ajouter
                                </IonButton>
                            </IonList>
                        </IonCol>
                    </IonRow>
                </IonGrid>

            </IonContent>
        </>
    )
}
export default BookForm



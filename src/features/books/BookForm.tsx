import { IonBackButton, IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonImg, IonItem, IonItemDivider, IonItemGroup, IonLabel, IonList, IonRow, IonSelect, IonSelectOption, IonSpinner, IonTitle, IonToolbar } from '@ionic/react';
import { RefObject, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { initBookForm, pushBook, setBookForm, setBooks } from '../../app/features/book/bookSlice';
import { setBookshelves } from '../../app/features/bookshelf/bookshelfSlice';
import { setTags } from '../../app/features/tag/tagSlice';
import Author from '../../interface/Author';
import Book from '../../interface/Book';
import Bookshelf from '../../interface/Bookshelf';
import Tag from '../../interface/Tag';
import { addBook, editBook, getAllbooks } from '../../services/BookService';
import { getAllBookshelves } from '../../services/BookshelfService';
import { getAllTags } from '../../services/TagService';

interface BookFormProps {
    modal: RefObject<HTMLIonModalElement>
    book: Book
    editable?: boolean
}

const BookForm: React.FC<BookFormProps> = (props: BookFormProps) => {
    const [loading, setLoading] = useState<boolean>();
    const tags = useSelector((state: any) => state.tag.tags)
    const bookForm = useSelector((state: any) => state.book.bookForm)
    const bookshelves = useSelector((state: any) => state.bookshelf.bookshelves)
    const dispatch = useDispatch()

    console.log(bookForm);

    useEffect(() => {
        const initOnStart = async () => {
            const response1: Tag[] = await getAllTags();
            const response2: Tag[] = await getAllBookshelves();
            const initialBookForm = {
                tagsName: props.book.tagsName,
                bookshelfName: props.book.bookshelfName,
                price: props.book.price
            }

            dispatch(setTags(response1));
            dispatch(setBookshelves(response2));
            dispatch(initBookForm(initialBookForm));
        }
        initOnStart()
    }, []);

    const addOrEditBookOnClick = async () => {
        if (!props.book.bookshelfName || !props.book.price) return
        setLoading(true)

        if (props.editable) {
            await editBook(props.book, props.book.id)
        } else {
            await addBook(props.book)
        }

        const response: Book[] = await getAllbooks();
        dispatch(setBooks(response))
        setLoading(false)
        props.modal.current?.dismiss()
    }

    const updateBookFormStates = (e: any) => {
        const name: string = e.target.name;
        const value = e.detail.value

        dispatch(setBookForm({ name, value }))
    }

    return (
        <>
            <IonHeader>
                <IonToolbar>
                    {props.editable ?
                        <IonTitle><h3>Modifier</h3></IonTitle> :
                        <>
                            <IonButtons slot='start'>
                                <IonBackButton ></IonBackButton>
                            </IonButtons>
                            <IonTitle>
                                <h3>2. Ajouter</h3>
                            </IonTitle>
                        </>
                    }
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
                        <IonCol sizeSm="9">
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
                                            {props.book.authorsName.map((authorName: string, idx: number) => (
                                                <li key={idx}><p>{authorName}</p></li>
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
                                    <IonSelect name='bookshelfName' value={bookForm.bookshelfName} onIonChange={(e) => updateBookFormStates(e)}>
                                        {bookshelves ? bookshelves.map((bookshelf: Bookshelf) => (
                                            <IonSelectOption key={bookshelf.id} value={bookshelf.name}>{bookshelf.name}</IonSelectOption>
                                        )) : <IonSpinner name="bubbles" />}
                                    </IonSelect>
                                </IonItem>
                                <IonItem>
                                    <IonLabel>
                                        <h3>Tags :</h3>
                                    </IonLabel>
                                    <IonSelect multiple name="tagsName" value={bookForm.tagsName} onIonChange={(e) => updateBookFormStates(e)}>
                                        {tags ? tags.map((tag: Tag) => (
                                            <IonSelectOption key={tag.id} value={tag.name}>{tag.name}</IonSelectOption>
                                        )) : <IonSpinner name="bubbles" />}
                                    </IonSelect>
                                </IonItem>
                                <IonItem>
                                    <IonLabel>
                                        <h3>Prix :</h3>
                                    </IonLabel>
                                    <IonSelect name="price" value={bookForm.price} placeholder="(en €)" onIonChange={(e) => updateBookFormStates(e)}>
                                        <IonSelectOption value={1.00}>1.00 €</IonSelectOption>
                                        <IonSelectOption value={0.50}>0.50 €</IonSelectOption>
                                    </IonSelect>
                                </IonItem>
                                {props.editable ?
                                    loading ? <IonSpinner name="bubbles" /> : <>
                                        <IonButton expand="full" onClick={addOrEditBookOnClick}>
                                            Editer
                                        </IonButton>
                                        <IonButton color={"danger"} expand="full">
                                            Retirer
                                        </IonButton>
                                    </> :
                                    loading ? <IonSpinner name="bubbles" /> :
                                        <IonButton expand="full" onClick={addOrEditBookOnClick}>
                                            Ajouter
                                        </IonButton>
                                }
                            </IonList>
                        </IonCol>
                    </IonRow>
                </IonGrid>

            </IonContent>
        </>
    )
}
export default BookForm



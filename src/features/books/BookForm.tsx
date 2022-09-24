import { IonBackButton, IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonImg, IonItem, IonItemDivider, IonItemGroup, IonLabel, IonList, IonListHeader, IonNote, IonRadio, IonRadioGroup, IonRange, IonRow, IonSelect, IonSelectOption, IonSpinner, IonTitle, IonToolbar, useIonViewWillEnter } from '@ionic/react';
import { RefObject, useEffect, useState } from 'react';
import GoogleBook from '../../interface/GoogleBook';
import Section from '../../interface/Section';
import Tag from '../../interface/Tag';
import { getAllBookshelves } from '../../services/BookshelfService';

import { getAllTags } from '../../services/TagService';

interface BookFormProps {
    modal: RefObject<HTMLIonModalElement>,
    book: GoogleBook
}

const BookForm: React.FC<BookFormProps> = (props: BookFormProps) => {
    const [sectionList, setSectionList] = useState<Section[]>([]);
    const [tagList, setTagList] = useState<Tag[]>([]);
    const [loading, setLoading] = useState<boolean>();
    const [error, setError] = useState<string>("");


    async function handleAddBookClick() {
        console.log(props.book);

        // const newBook = {
        //     title: string,
        //     subtitle: string,
        //     publisher: string,
        //     publishedDate?: string,
        //     pageCount?: 0,
        //     price: number,
        //     qty: number,
        //     description: string,

        // }

        // if (!props.book.section) {
        //     setError("La section est vide")
        //     setLoading(false)
        //     return
        // }

        // if (!props.book.price) {
        //     setError("Le prix est vide")
        //     setLoading(false)

        //     return
        // }

        setLoading(true)
        setError("")
        // const status: number | undefined = await addBook(props.book)
        setLoading(false)
        props.modal.current?.dismiss()
    }

    function handleTagChange(e: string[]) {
        const currentTags: any[] = e.map((element: string) =>
            tagList.find((value: Tag) => (value.label === element))
        );
        // props.book.tags = currentTags;
    }

    function handleSectionChange(e: any) {
        const currentSection: Section | undefined = sectionList.find((value) => (value.label === e));
        // props.book.section = currentSection
    }

    function handlePriceChange(e: any) {
        // props.book.price = parseFloat(e)
    }

    async function initSectionList() {
        // const sections: any = await getAllSections();
        // setSectionList(sections)
    }

    async function initBookshelvesList() {
        const bookshelves: any = await getAllBookshelves();
        setSectionList(bookshelves)
    }




    async function initTagList() {
        const tags: any = await getAllTags();
        setTagList(tags)
    }

    useEffect(() => {
        // initSectionList()
        // initTagList()
        // initBookshelvesList()
    }, []);

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
                            <IonImg alt={"couverture-du-livre" + props.book.volumeInfo.title}
                                className="thumbnaill"
                                src={props.book.volumeInfo.imageLinks?.thumbnail ? props.book.volumeInfo.imageLinks.thumbnail : "https://ionicframework.com/docs/demos/api/thumbnail/thumbnail.svg"} />
                        </IonCol>
                        <IonCol sizeSm="9" >
                            <IonList>
                                <IonItem>
                                    <IonLabel>
                                        <h3>Titre :</h3>
                                        <p>{props.book.volumeInfo.title}</p>
                                    </IonLabel>
                                </IonItem>
                                <IonItem>
                                    <IonLabel>
                                        <h3>Auteur(s) :</h3>
                                        <ul>
                                            {props.book.volumeInfo.authors.map((author: string, idx: number) => (
                                                <li key={idx}><p>{author}</p></li>
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
                                        <h3>Section :</h3>
                                    </IonLabel>
                                    <IonSelect placeholder="Histoire" onIonChange={(e) => handleSectionChange(e.detail.value)}>
                                        {sectionList.map((value, index) => (
                                            <IonSelectOption key={index} value={value.label}>{value.label}</IonSelectOption>
                                        ))}
                                    </IonSelect>
                                </IonItem>
                                <IonItem>
                                    <IonLabel>
                                        <h3>Tags :</h3>
                                    </IonLabel>
                                    <IonSelect multiple placeholder="Cuisine, Animaux" onIonChange={(e) => handleTagChange(e.detail.value)}>
                                        {tagList.map((value, index) => (
                                            <IonSelectOption key={index} value={value.label}>{value.label}</IonSelectOption>
                                        ))}
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
                                <IonButton expand="full" onClick={() => handleAddBookClick()}>
                                    {loading && <IonSpinner name="bubbles" />}
                                    Ajouter
                                </IonButton>
                                <IonItemGroup>
                                    <IonItemDivider>
                                        <IonLabel>Information supplementaire</IonLabel>
                                    </IonItemDivider>
                                    {props.book.volumeInfo.subtitle &&
                                        <IonItem>
                                            <IonLabel>
                                                <h3>Sous-titre :</h3>
                                                <p>{props.book.volumeInfo.subtitle && props.book.volumeInfo.subtitle}</p>
                                            </IonLabel>
                                        </IonItem>
                                    }
                                    {props.book.volumeInfo.description &&
                                        <IonItem>
                                            <IonLabel>
                                                <h3>Description :</h3>
                                                <p>{props.book.volumeInfo.description && props.book.volumeInfo.description}</p>
                                            </IonLabel>
                                        </IonItem>
                                    }

                                    {props.book.volumeInfo.publisher &&
                                        <IonItem>
                                            <IonLabel>
                                                <h3>Editeur :</h3>
                                                <p>{props.book.volumeInfo.publisher && props.book.volumeInfo.publisher}</p>
                                            </IonLabel>
                                        </IonItem>
                                    }

                                    {props.book.volumeInfo.publishedDate &&
                                        <IonItem>
                                            <IonLabel>
                                                <h3>Date de publication :</h3>
                                                <p>{props.book.volumeInfo.publishedDate && props.book.volumeInfo.publishedDate}</p>
                                            </IonLabel>
                                        </IonItem>
                                    }

                                    {props.book.volumeInfo.pageCount &&
                                        <IonItem>
                                            <IonLabel>
                                                <h3>Nombre de livre :</h3>
                                                <p>{props.book.volumeInfo.pageCount && props.book.volumeInfo.pageCount}</p>
                                            </IonLabel>
                                        </IonItem>
                                    }
                                </IonItemGroup>
                            </IonList>
                        </IonCol>
                    </IonRow>
                </IonGrid>

            </IonContent>
        </>
    )
}
export default BookForm



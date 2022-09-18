import { IonBackButton, IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonImg, IonItem, IonItemDivider, IonItemGroup, IonLabel, IonList, IonListHeader, IonNote, IonRadio, IonRadioGroup, IonRange, IonRow, IonSelect, IonSelectOption, IonTitle, IonToolbar, useIonViewWillEnter } from '@ionic/react';
import { useFormik } from 'formik';
import { RefObject, useEffect, useState } from 'react';
import Book from '../../interface/Book';
import Section from '../../interface/Section';
import Tag from '../../interface/Tag';
import { getAllSections } from '../../services/SectionService';
import { getAllTags } from '../../services/TagService';

interface BookFormProps {
    modal: RefObject<HTMLIonModalElement>,
    book: Book
}

const BookForm: React.FC<BookFormProps> = (props: BookFormProps) => {
    const [sectionList, setSectionList] = useState<Section[]>([]);
    const [tagList, setTagList] = useState<Tag[]>([]);


    const formik = useFormik({
        initialValues: {
            price: 0.5,
            qty: 1,
            section: "",
            tags: []
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    async function initSectionList() {
        const sections: any = await getAllSections();
        setSectionList(sections)
    }

    async function initTagList() {
        const tags: any = await getAllTags();
        setTagList(tags)
    }

    useEffect(() => {
        initSectionList()
        initTagList()
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
                        <IonCol size="12" sizeSm="3">
                            <IonImg alt={"couverture-du-livre" + props.book.title}
                                className="thumbnaill"
                                src={props.book.imageLink?.thumbnail ? props.book.imageLink.thumbnail : "https://ionicframework.com/docs/demos/api/thumbnail/thumbnail.svg"} />
                        </IonCol>
                        <IonCol size="12" sizeSm="9">
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
                                        <p>{props.book.authors && props.book.authors.map((author: string, idx: number) => idx < props.book.authors.length - 1 ? author + ", " : author)}</p>
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
                                    <IonSelect placeholder="Histoire">
                                        {sectionList.map((value, index) => (
                                            <IonSelectOption key={index} value={value.label}>{value.label}</IonSelectOption>
                                        ))}
                                    </IonSelect>
                                </IonItem>
                                <IonItem>
                                    <IonLabel>
                                        <h3>Tags :</h3>
                                    </IonLabel>
                                    <IonSelect multiple placeholder="Cuisine, Animaux">
                                        {tagList.map((value, index) => (
                                            <IonSelectOption key={index} value={value.label}>{value.label}</IonSelectOption>
                                        ))}
                                    </IonSelect>
                                </IonItem>
                                <IonButton expand="full">Ajouter</IonButton>
                                <IonItemGroup>
                                    <IonItemDivider>
                                        <IonLabel>Information supplementaire</IonLabel>
                                    </IonItemDivider>
                                    {props.book.subtitle &&
                                        <IonItem>
                                            <IonLabel>
                                                <h3>Sous-titre :</h3>
                                                <p>{props.book.subtitle && props.book.subtitle}</p>
                                            </IonLabel>
                                        </IonItem>
                                    }
                                    {props.book.description &&
                                        <IonItem>
                                            <IonLabel>
                                                <h3>Description :</h3>
                                                <p>{props.book.description && props.book.description}</p>
                                            </IonLabel>
                                        </IonItem>
                                    }

                                    {props.book.publisher &&
                                        <IonItem>
                                            <IonLabel>
                                                <h3>Editeur :</h3>
                                                <p>{props.book.publisher && props.book.publisher}</p>
                                            </IonLabel>
                                        </IonItem>
                                    }

                                    {props.book.publishedDate &&
                                        <IonItem>
                                            <IonLabel>
                                                <h3>Date de publication :</h3>
                                                <p>{props.book.publishedDate && props.book.publishedDate}</p>
                                            </IonLabel>
                                        </IonItem>
                                    }

                                    {props.book.pageCount &&
                                        <IonItem>
                                            <IonLabel>
                                                <h3>Nombre de livre :</h3>
                                                <p>{props.book.pageCount && props.book.pageCount}</p>
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







        // <form onSubmit={formik.handleSubmit}>
        //     <IonGrid>
        //         <IonRow>
        //             <IonCol>
        //                 <IonImg
        //                     alt={'page de couverture du livre ' + props.book.volumeInfo.title}
        //                     src={props.book.volumeInfo.imageLinks?.thumbnail} />
        //             </IonCol>
        //             <IonCol>
        //                 <IonList>
        //                     <IonItem>
        //                         <IonLabel>
        //                             <h3>Titre</h3>
        //                             <p>{props.book.volumeInfo.title}</p>
        //                         </IonLabel>
        //                     </IonItem>
        //                     {props.book.volumeInfo.subtitle &&
        //                         <IonItem>
        //                             <IonLabel>
        //                                 <h3>Sous-titre</h3>
        //                                 <p>{props.book.volumeInfo.subtitle}</p>
        //                             </IonLabel>
        //                         </IonItem>
        //                     }
        //                     <IonItem>
        //                         <IonLabel>
        //                             <h3>Auteur(s)</h3>
        //                             <p>
        //                                 {props.book.volumeInfo.authors.map((author: string, idx: number) =>
        //                                     idx < props.book.volumeInfo.authors.length - 1 ? author + ", " : author
        //                                 )}
        //                             </p>
        //                         </IonLabel>
        //                     </IonItem>

        //                     <IonItem>
        //                         <IonLabel>
        //                             <h3>Nombre de page</h3>
        //                             <p>{props.book.volumeInfo.pageCount}</p>
        //                         </IonLabel>
        //                     </IonItem>

        //                     <IonItem>
        //                         <IonLabel>
        //                             <h3>Date de publication</h3>
        //                             <p>{props.book.volumeInfo.publishedDate}</p>
        //                         </IonLabel>
        //                     </IonItem>

        //                     {props.book.volumeInfo.publisher &&
        //                         <IonItem>
        //                             <IonLabel>
        //                                 <h3>Editeur</h3>
        //                                 <p>{props.book.volumeInfo.publisher}</p>
        //                             </IonLabel>
        //                         </IonItem>
        //                     }
        //                 </IonList>
        //             </IonCol>
        //         </IonRow>
        //         <IonRow>
        //             <IonCol>
        //                 <IonList>
        //                     <IonItem>
        //                         <IonLabel>
        //                             <h3>Section</h3>
        //                         </IonLabel>
        //                         <IonSelect>
        //                             <IonSelectOption value="apples">Apples</IonSelectOption>
        //                             <IonSelectOption value="oranges">Oranges</IonSelectOption>
        //                             <IonSelectOption value="bananas">Bananas</IonSelectOption>
        //                         </IonSelect>
        //                     </IonItem>

        //                     <IonItem>
        //                         <IonLabel slot="start">
        //                             <h3>Prix</h3>
        //                             <p>de 0.50 € à 1.00 €</p>
        //                         </IonLabel>
        //                         <IonRange pin={true} pinFormatter={(value: number) => `${value} €`} ticks={true} snaps={true} min={0.5} max={1} />
        //                     </IonItem>

        //                     <IonItem>
        //                         <IonLabel slot="start">
        //                             <h3>Quantité</h3>
        //                             <p>de 1 à 10 livres</p>
        //                         </IonLabel>
        //                         <IonRange ticks={true} snaps={true} min={1} max={10} pin={true} pinFormatter={(value: number) => `${value}`} />
        //                     </IonItem>
        //                 </IonList>
        //             </IonCol>
        //         </IonRow>
        //         <IonRow>
        //             <IonCol>
        //                 <p>{props.book.volumeInfo.description}</p>
        //             </IonCol>
        //         </IonRow>
        //     </IonGrid>
        // </form >
    )
}
export default BookForm


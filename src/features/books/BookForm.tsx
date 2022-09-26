import { IonBackButton, IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonImg, IonItem, IonItemDivider, IonItemGroup, IonLabel, IonList, IonRow, IonSelect, IonSelectOption, IonSpinner, IonTitle, IonToolbar } from '@ionic/react';
import { RefObject, useState } from 'react';
import Author from '../../interface/Author';
import Book from '../../interface/Book';

interface BookFormProps {
    modal: RefObject<HTMLIonModalElement>,
    book: Book
}

const BookForm: React.FC<BookFormProps> = (props: BookFormProps) => {
    const [loading, setLoading] = useState<boolean>();
    const [error, setError] = useState<string>("");

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
                                        <h3>Section :</h3>
                                    </IonLabel>
                                    <IonSelect placeholder="ex">
                                        {/* {sectionList.map((value, index) => (
                                            <IonSelectOption key={index} value={value.label}>{value.label}</IonSelectOption>
                                        ))} */}
                                    </IonSelect>
                                </IonItem>
                                <IonItem>
                                    <IonLabel>
                                        <h3>Tags :</h3>
                                    </IonLabel>
                                    <IonSelect multiple placeholder="Cuisine, Animaux" >
                                        {/* {tagList.map((value, index) => (
                                            <IonSelectOption key={index} value={value.label}>{value.label}</IonSelectOption>
                                        ))} */}
                                    </IonSelect>
                                </IonItem>
                                <IonItem>
                                    <IonLabel>
                                        <h3>Prix :</h3>
                                    </IonLabel>
                                    <IonSelect placeholder="(en €)">
                                        <IonSelectOption value={1.00}>1.00 €</IonSelectOption>
                                        <IonSelectOption value={0.50}>0.50 €</IonSelectOption>
                                    </IonSelect>
                                </IonItem>
                                {error && <IonItem color={'danger'}>{error}</IonItem>}
                                <IonButton expand="full">
                                    {loading && <IonSpinner name="bubbles" />}
                                    Ajouter
                                </IonButton>
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
    )
}
export default BookForm



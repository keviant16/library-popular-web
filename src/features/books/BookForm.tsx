import { IonCol, IonGrid, IonImg, IonItem, IonLabel, IonList, IonListHeader, IonNote, IonRadio, IonRadioGroup, IonRange, IonRow, IonSelect, IonSelectOption, useIonViewWillEnter } from '@ionic/react';
import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import GoogleBook from '../../interface/GoogleBook';
import Section from '../../interface/Section';
import { getAllSections } from '../../services/SectionService';

interface BookFormProps {
    book: GoogleBook
}

const BookForm: React.FC<BookFormProps> = (props: BookFormProps) => {
    const [sections, setSections] = useState<Section>();

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

    async function getAllSection() {
        let response = await getAllSections()
        setSections(response)
        console.log(sections);
    }

    useEffect(() => {
        getAllSection()
    }, []);

    return (
        <form onSubmit={formik.handleSubmit}>
            <IonGrid>
                <IonRow>
                    <IonCol>
                        <IonImg
                            alt={'page de couverture du livre ' + props.book.volumeInfo.title}
                            src={props.book.volumeInfo.imageLinks?.thumbnail} />
                    </IonCol>
                    <IonCol>
                        <IonList>
                            <IonItem>
                                <IonLabel>
                                    <h3>Titre</h3>
                                    <p>{props.book.volumeInfo.title}</p>
                                </IonLabel>
                            </IonItem>
                            {props.book.volumeInfo.subtitle &&
                                <IonItem>
                                    <IonLabel>
                                        <h3>Sous-titre</h3>
                                        <p>{props.book.volumeInfo.subtitle}</p>
                                    </IonLabel>
                                </IonItem>
                            }
                            <IonItem>
                                <IonLabel>
                                    <h3>Auteur(s)</h3>
                                    <p>
                                        {props.book.volumeInfo.authors.map((author: string, idx: number) =>
                                            idx < props.book.volumeInfo.authors.length - 1 ? author + ", " : author
                                        )}
                                    </p>
                                </IonLabel>
                            </IonItem>

                            <IonItem>
                                <IonLabel>
                                    <h3>Nombre de page</h3>
                                    <p>{props.book.volumeInfo.pageCount}</p>
                                </IonLabel>
                            </IonItem>

                            <IonItem>
                                <IonLabel>
                                    <h3>Date de publication</h3>
                                    <p>{props.book.volumeInfo.publishedDate}</p>
                                </IonLabel>
                            </IonItem>

                            {props.book.volumeInfo.publisher &&
                                <IonItem>
                                    <IonLabel>
                                        <h3>Editeur</h3>
                                        <p>{props.book.volumeInfo.publisher}</p>
                                    </IonLabel>
                                </IonItem>
                            }
                        </IonList>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                        <IonList>
                            <IonItem>
                                <IonLabel>
                                    <h3>Section</h3>
                                </IonLabel>
                                <IonSelect>
                                    <IonSelectOption value="apples">Apples</IonSelectOption>
                                    <IonSelectOption value="oranges">Oranges</IonSelectOption>
                                    <IonSelectOption value="bananas">Bananas</IonSelectOption>
                                </IonSelect>
                            </IonItem>

                            <IonItem>
                                <IonLabel slot="start">
                                    <h3>Prix</h3>
                                    <p>de 0.50 € à 1.00 €</p>
                                </IonLabel>
                                <IonRange pin={true} pinFormatter={(value: number) => `${value} €`} ticks={true} snaps={true} min={0.5} max={1} />
                            </IonItem>

                            <IonItem>
                                <IonLabel slot="start">
                                    <h3>Quantité</h3>
                                    <p>de 1 à 10 livres</p>
                                </IonLabel>
                                <IonRange ticks={true} snaps={true} min={1} max={10} pin={true} pinFormatter={(value: number) => `${value}`} />
                            </IonItem>
                        </IonList>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                        <p>{props.book.volumeInfo.description}</p>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </form >
    )
}
export default BookForm


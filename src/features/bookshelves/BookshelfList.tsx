import { IonAccordion, IonAccordionGroup, IonButton, IonIcon, IonInput, IonItem, IonLabel, IonList, IonSpinner } from "@ionic/react"
import { add, arrowBack } from "ionicons/icons";
import { useRef } from "react";
import { useCreateBookshelfMutation, useGetAllBookshelvesQuery } from "../../app/api/api";
import ListHeader from "../../components/ListHeader";
import Bookshelf from "../../interface/Bookshelf"
import BookshelfItem from "./BookshelfItem";

const BookshelfList: React.FC = () => {
    const { data, error, isLoading } = useGetAllBookshelvesQuery('')
    const [createBookshelf, { isLoading: isCreating }] = useCreateBookshelfMutation()
    const accordionGroup = useRef<null | HTMLIonAccordionGroupElement>(null);
    const inputRef = useRef<any>(null);

    const handleClick = async () => {
        if (!inputRef.current?.value) return
        await createBookshelf({ name: inputRef.current?.value, qty: 0 })
    }

    const toggleAccordion = () => {
        if (!accordionGroup.current) return;

        const nativeEl = accordionGroup.current;

        if (nativeEl.value === 'second') {
            nativeEl.value = undefined;
        } else {
            nativeEl.value = 'second';
        }
    };

    return (
        <IonList>
            <ListHeader icon={arrowBack} header={"étagères"}
                addButton={
                    <IonButton onClick={toggleAccordion}>
                        <IonIcon icon={add} />
                    </IonButton>
                }
            />
            {error ? (
                <IonItem>
                    <IonLabel color={"danger"}>Oh non, il y a eu une erreur</IonLabel>
                </IonItem>
            ) : isLoading ? (
                <IonItem lines="none">
                    <IonSpinner name="lines" />
                </IonItem>
            ) : data ? (
                <>
                    <IonAccordionGroup ref={accordionGroup}>
                        <IonAccordion value="second">
                            <div className="ion-padding" slot="content">
                                <IonItem color={"light"} lines="none">
                                    <IonInput ref={inputRef} placeholder="Entrer le nom du étagères" />
                                    <IonButton color={"primary"} onClick={handleClick} type="submit">
                                        {isCreating
                                            ? <IonSpinner name="lines" className="custom" />
                                            : <IonIcon icon={add} />
                                        }
                                    </IonButton>
                                </IonItem>
                            </div>
                        </IonAccordion>
                    </IonAccordionGroup>

                    {data.map((bookshelf: Bookshelf) => <BookshelfItem key={bookshelf.id} bookshelf={bookshelf} />)}
                </>
            ) : null
            }
        </IonList>
    )
}




export default BookshelfList
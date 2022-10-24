import { IonButton, IonIcon, IonItem, IonLabel, IonList } from "@ionic/react";
import { removeCircleOutline } from "ionicons/icons";
import { FunctionComponent } from "react";
import BookshelfSelect from "../bookshelves/BookshelfSelect";
import TagSelect from "../tags/TagSelect";

interface BookFiltreProps { }

const BookFiltre: FunctionComponent<BookFiltreProps> = () => {
    return (
        <IonList>
            <IonItem>
                <IonLabel>Filtres :</IonLabel>
                <IonButton color={"secondary"}>
                    <IonIcon icon={removeCircleOutline} />
                    Retirer filter
                </IonButton>
            </IonItem>
            <BookshelfSelect />
            <TagSelect />
        </IonList>
    );
}

export default BookFiltre;
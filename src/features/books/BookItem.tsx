import { IonItem, IonThumbnail, IonImg, IonLabel } from "@ionic/react";
import Author from "../../interface/Author";
import Book from "../../interface/Book";


interface BookItemProps {
    book: Book,
}

const BookItem: React.FC<BookItemProps> = (props: BookItemProps) => {
    return (
        <IonItem button>
            <IonThumbnail slot="start">
                <IonImg
                    alt={"couverture-du-livre" + props.book.title}
                    src={props.book.image ? props.book.image : "https://ionicframework.com/docs/demos/api/thumbnail/thumbnail.svg"}
                />
            </IonThumbnail>
            <IonLabel>
                <h2>{props.book.title}</h2>
                <p>{props.book.authors && props.book.authors.map((author: Author, idx: number) => idx < props.book.authors.length - 1 ? author.name + ", " : author.name)}</p>
            </IonLabel>
        </IonItem>

    )
}

export default BookItem;
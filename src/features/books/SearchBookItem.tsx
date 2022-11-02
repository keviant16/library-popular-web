import { IonImg, IonItem, IonLabel, IonNavLink, IonThumbnail } from "@ionic/react";
import { FunctionComponent, RefObject } from "react";
import Book from "../../interface/Book";
import BookForm from "./BookForm/BookForm";
import BookItem from "./BookItem";

interface SearchBookItemProps {
  book: Book
  modal: RefObject<HTMLIonModalElement>
  editable?: boolean
}




const SearchBookItem: FunctionComponent<SearchBookItemProps> = (props) => {
  return (
    <IonNavLink
      routerDirection="forward"
      component={() => <BookForm book={props.book} modal={props.modal} editable={props.editable} />}
    >
      {props.editable ?
        <BookItem
          key={props.book.id}
          book={props.book}
          editable={props.editable}
        />
        :
        <IonItem button>
          <IonThumbnail slot="start">
            <IonImg
              alt={"couverture-du-livre" + props.book.title}
              src={props.book.image ? props.book.image : "https://ionicframework.com/docs/demos/api/thumbnail/thumbnail.svg"}
            />
          </IonThumbnail>
          <IonLabel>
            <h3>{props.book.title}</h3>
            <p>
              {props.book.authors &&
                props.book.authors.map((authorName: string, idx: number) =>
                  idx < props.book.authors.length - 1 ? authorName + ", " : authorName)
              }
            </p>
          </IonLabel>
          <IonLabel slot="end">
            {props.book.price && <p>{props.book.price} €</p>}
          </IonLabel>
        </IonItem>
      }
    </IonNavLink>
  );
}

export default SearchBookItem;
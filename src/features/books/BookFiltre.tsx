import { IonButton, IonIcon, IonItem, IonLabel, IonList } from "@ionic/react";
import { removeCircleOutline } from "ionicons/icons";
import { FunctionComponent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initBookFilter, setBookFilter } from "../../app/slice/bookSlice";
import BookshelfSelect from "../bookshelves/BookshelfSelect";
import TagSelect from "../tags/TagSelect";

interface BookFiltreProps { }

const BookFiltre: FunctionComponent<BookFiltreProps> = () => {
  const bookFilter = useSelector((state: any) => state.book.bookFilter)
  const dispatch = useDispatch()

  const handleResetFilter = () => {
    dispatch(initBookFilter({ bookshelf: "", tags: [] }))
  }

  const handleSelect = (e: any) => {
    dispatch(setBookFilter({ name: e.target.name, value: e.target.value }))
  }

  return (
    <IonList>
      <IonItem>
        <IonLabel>Filtres :</IonLabel>
        <IonButton
          color={"secondary"}
          onClick={handleResetFilter}
        >
          <IonIcon icon={removeCircleOutline} />
          Retirer filter
        </IonButton>
      </IonItem>
      <BookshelfSelect
        value={bookFilter.bookshelf}
        name={"bookshelf"}
        handleChange={handleSelect}
      />
      {/* <TagSelect
        value={bookFilter.tags}
        name={"tags"}
        handleChange={handleSelect}
      /> */}
    </IonList>
  );
}

export default BookFiltre;
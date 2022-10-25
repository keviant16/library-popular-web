import { IonItem, IonLabel, IonSelect, IonSelectOption } from "@ionic/react";
import { FunctionComponent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetAllTagsQuery } from "../../app/api/api";
import { setBookForm } from "../../app/slice/bookSlice";
import Error from "../../components/Error";
import Spinner from "../../components/Spinner";
import Tag from "../../interface/Tag";

interface TagSelectProps { }

const TagSelect: FunctionComponent<TagSelectProps> = () => {
  const { data, error, isLoading } = useGetAllTagsQuery('')
  const bookForm = useSelector((state: any) => state.book.bookForm)
  const dispatch = useDispatch()

  const handleBookForm = (e: any) => {
    dispatch(setBookForm({ name: e.target.name, value: e.target.value }))
  }

  if (isLoading) return <Spinner />
  if (error) return <Error />

  return (
    <IonItem>
      <IonLabel>Tag</IonLabel>
      <IonSelect
        multiple
        value={bookForm.tags}
        name="tags"
        onIonChange={handleBookForm}>
        {data && data.map((tag: Tag) => (
          <IonSelectOption key={tag.id} value={tag.name}>
            {tag.name}
          </IonSelectOption>
        ))}
      </IonSelect>
    </IonItem>
  );
}

export default TagSelect;
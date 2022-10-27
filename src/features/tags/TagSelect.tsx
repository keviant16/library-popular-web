import { IonItem, IonLabel, IonSelect, IonSelectOption } from "@ionic/react";
import { FunctionComponent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetAllTagsQuery } from "../../app/api/api";
import { setBookForm } from "../../app/slice/bookSlice";
import Error from "../../components/Error";
import Spinner from "../../components/Spinner";
import Tag from "../../interface/Tag";

interface TagSelectProps {
  value: string,
  name: string,
  handleChange: (e: any) => void
}

const TagSelect: FunctionComponent<TagSelectProps> = (props) => {
  const { data, error, isLoading } = useGetAllTagsQuery('')

  if (isLoading) return <Spinner />
  if (error) return <Error />

  return (
    <IonItem>
      <IonLabel>Tags</IonLabel>
      <IonSelect
        multiple
        value={props.value}
        name={props.name}
        onIonChange={props.handleChange}>
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
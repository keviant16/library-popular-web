import { IonItem, IonLabel, IonSelect, IonSelectOption } from "@ionic/react";
import { FunctionComponent } from "react";
import { useGetAllTagsQuery } from "../../app/api/api";
import Error from "../../components/Error";
import Spinner from "../../components/Spinner";
import Tag from "../../interface/Tag";

interface TagSelectProps { }

const TagSelect: FunctionComponent<TagSelectProps> = () => {
  const { data, error, isLoading } = useGetAllTagsQuery('')

  if (isLoading) return <Spinner />
  if (error) return <Error />

  return (
    <IonItem>
      <IonLabel>Tag</IonLabel>
      <IonSelect multiple>
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
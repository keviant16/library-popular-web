import { IonAccordion, IonAccordionGroup, IonButton, IonIcon, IonInput, IonItem, IonLabel, IonList, IonSpinner } from "@ionic/react";
import { useCreateTagMutation, useGetAllTagsQuery } from "../../app/api/api";
import ListHeader from "../../components/ListHeader";
import { add, arrowBack } from "ionicons/icons";
import { useRef } from "react";
import Tag from "../../interface/Tag";
import TagItem from "./TagItem";
import Spinner from "../../components/Spinner";
import Error from "../../components/Error";

const TagList: React.FC = () => {
  const { data, error, isLoading } = useGetAllTagsQuery('')
  const [createTag, { isLoading: isCreating }] = useCreateTagMutation()
  const accordionGroup = useRef<null | HTMLIonAccordionGroupElement>(null);
  const inputRef = useRef<any>(null);

  const handleClick = async () => {
    if (!inputRef.current?.value) return
    await createTag({ name: inputRef.current?.value, qty: 0 })
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
      <ListHeader icon={arrowBack} header={"Tags"}
        addButton={
          <IonButton onClick={toggleAccordion}>
            <IonIcon icon={add} />
          </IonButton>
        }
      />
      {error ? (
        <Error />
      ) : isLoading ? (
        <Spinner />
      ) : data ? (
        <>
          <IonAccordionGroup ref={accordionGroup}>
            <IonAccordion value="second">
              <div className="ion-padding" slot="content">
                <IonItem color={"light"} lines="none">
                  <IonInput ref={inputRef} placeholder="Entrer le nom du tag" />
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

          {data.map((tag: Tag) => <TagItem key={tag.id} tag={tag} />)}
        </>
      ) : null}
    </IonList>
  )
}

export default TagList;
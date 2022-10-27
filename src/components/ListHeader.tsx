import { IonListHeader, IonButton, IonIcon, IonLabel, IonAccordion, IonAccordionGroup } from "@ionic/react";
import { filter } from "ionicons/icons";
import { FunctionComponent, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initBookForm } from "../app/slice/bookSlice";
import BookFiltre from "../features/books/BookFiltre";
import BookFormSegment1 from "../features/books/BookForm/BookFormSegment1";

interface ListHeaderProps {
  icon: string | undefined
  header: string
  search?: any
  fitreActive?: boolean
  hideReturn?: boolean
  hideAddBook?: boolean
}

const ListHeader: FunctionComponent<ListHeaderProps> = (props) => {
  const accordionGroup = useRef<null | HTMLIonAccordionGroupElement>(null);

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
    <>
      <IonListHeader>
        {!props.hideReturn &&
          <IonButton href="/tableau-de-bord">
            <IonIcon icon={props.icon} />
          </IonButton>
        }

        <IonLabel>
          <h1>{props.header}</h1>
        </IonLabel>
        {props.search}

        {props?.fitreActive &&
          <IonButton color={"primary"} onClick={toggleAccordion}>
            <IonIcon icon={filter} />
          </IonButton>
        }

      </IonListHeader>
      <IonAccordionGroup ref={accordionGroup}>
        <IonAccordion value="second">
          <div className="ion-padding" slot="content">
            <BookFiltre />
          </div>
        </IonAccordion>
      </IonAccordionGroup>
    </>
  );
}

export default ListHeader;
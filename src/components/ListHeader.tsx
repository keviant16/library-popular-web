import { IonListHeader, IonButton, IonIcon, IonLabel, IonAccordion, IonAccordionGroup } from "@ionic/react";
import { filter, search } from "ionicons/icons";
import { FunctionComponent, useRef, useState } from "react";
import BookFiltre from "../features/books/BookFiltre";

interface ListHeaderProps {
  icon: string | undefined
  header: string
  search?: any
  fitreActive?: boolean
  hideReturn?: boolean
  hideAddBook?: boolean
  searchActive?: boolean
}

const ListHeader: FunctionComponent<ListHeaderProps> = (props) => {
  const accordionGroup = useRef<null | HTMLIonAccordionGroupElement>(null);
  const searchRef = useRef<null | any>(null);
  const [isSearchToogle, setIsSearchToogle] = useState(false);

  console.log(search);


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

        {isSearchToogle ? props.search :
          <IonLabel>
            <h1>{props.header}</h1>
          </IonLabel>
        }

        {props?.searchActive &&
          <IonButton color={"primary"} onClick={() => setIsSearchToogle(!isSearchToogle)}>
            <IonIcon icon={search} />
          </IonButton>
        }



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
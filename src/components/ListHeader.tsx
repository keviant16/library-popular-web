import { IonListHeader, IonButton, IonIcon, IonLabel, IonAccordion, IonAccordionGroup, IonItem, IonList, IonSelect, IonSelectOption } from "@ionic/react";
import { filter } from "ionicons/icons";
import { FunctionComponent, useRef } from "react";

interface ListHeaderProps {
  icon: string | undefined
  header: string
  search?: any
  fitreActive?: boolean
  hideReturn?: boolean
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
            <IonList>
              <IonItem>
                <IonLabel>Etagères</IonLabel>
                <IonSelect interface="popover">
                  <IonSelectOption value="apples">Apples</IonSelectOption>
                  <IonSelectOption value="oranges">Oranges</IonSelectOption>
                  <IonSelectOption value="bananas">Bananas</IonSelectOption>
                </IonSelect>
              </IonItem>
              <IonItem>
                <IonLabel>Tags</IonLabel>
                <IonSelect interface="popover" multiple>
                  <IonSelectOption value="apples">Apples</IonSelectOption>
                  <IonSelectOption value="oranges">Oranges</IonSelectOption>
                  <IonSelectOption value="bananas">Bananas</IonSelectOption>
                </IonSelect>
              </IonItem>
            </IonList>
          </div>
        </IonAccordion>
      </IonAccordionGroup>
    </>
  );
}

export default ListHeader;
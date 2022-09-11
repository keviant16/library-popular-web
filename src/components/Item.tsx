import { IonButton, IonButtons, IonIcon, IonItem, IonLabel } from "@ionic/react"
import { pencil, trash } from "ionicons/icons"
import Section from "../interface/Section"

interface ItemProps {
    resourceId: number,
    label: string,
    bookNumber: number,
    deleteItem: any,
    editItem: any
}

const Item: React.FC<ItemProps> = (item: ItemProps) => {
    return (
        <IonItem>
            <IonLabel>
                <h2>{item.label}</h2>
                <p>{item.bookNumber} {item.bookNumber > 0 ? "livres" : "livre"}</p>
            </IonLabel>
            <IonButtons>
                <IonButton onClick={() => console.log("show")} slot="end" color={"warning"} fill="solid">
                    <IonIcon slot="icon-only" icon={pencil} />
                </IonButton>
                <IonButton onClick={() => item.deleteItem(item.resourceId)} slot="end" color={"danger"} fill="solid">
                    <IonIcon slot="icon-only" icon={trash} />
                </IonButton>
            </IonButtons>
        </IonItem>
    )
}

export default Item;

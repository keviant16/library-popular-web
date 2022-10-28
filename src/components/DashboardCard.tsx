import { IonCard, IonItem, IonCardHeader, IonCardSubtitle, IonCardTitle } from "@ionic/react";
import { FunctionComponent } from "react";

interface DashboardCardProps {
    subtitle: string,
    title: string | number
    href?: string
    disabled?: boolean
}

const DashboardCard: FunctionComponent<DashboardCardProps> = (props) => {

    return (
        <IonCard>
            <IonItem href={props.href} disabled={props.disabled}>
                <IonCardHeader>
                    <IonCardSubtitle>{props.subtitle}</IonCardSubtitle>
                    <IonCardTitle>{props.title}</IonCardTitle>
                </IonCardHeader>
            </IonItem>
        </IonCard >
    );
}

export default DashboardCard;
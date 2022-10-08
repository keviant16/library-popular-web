import { IonCard, IonItem, IonCardHeader, IonCardSubtitle, IonCardTitle } from "@ionic/react";
import { FunctionComponent } from "react";

interface DashboardCardProps {
    subtitle: string,
    title: string | number
    href?: string
    isRole?: boolean
    type?: string
}

const DashboardCard: FunctionComponent<DashboardCardProps> = (props: DashboardCardProps) => {
    const check_type_and_role = () => {
        if (props.type === "admin" && !props.isRole) return true
        if (props.type === "volunteer" && !props.isRole) return true
        return false
    }

    return (
        <IonCard>
            <IonItem href={props.href} disabled={check_type_and_role()}>
                <IonCardHeader>
                    <IonCardSubtitle>{props.subtitle}</IonCardSubtitle>
                    <IonCardTitle>
                        {props.title}
                    </IonCardTitle>
                </IonCardHeader>
            </IonItem>
        </IonCard >
    );
}

export default DashboardCard;
import { IonAccordion, IonItem, IonLabel } from "@ionic/react";

interface AccordionProps {
    value: string,
    label: string,
    content: string
}

const AccordionStyle = {
    // borderRadius: 25,
    margin: 5,
    boxShadow: "0 5px 10px gray"
}

const AccordionContentStyle = {
    backgroundColor: "rgb(232, 112, 74, 0.5)"
}

const Accordion: React.FC<AccordionProps> = (props: AccordionProps) => {

    return (
        <IonAccordion value={props.value} style={AccordionStyle}>
            <IonItem slot="header" color="secondary">
                <IonLabel>{props.label}</IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content" style={AccordionContentStyle}>
                {props.content}
            </div>
        </IonAccordion >
    );
};

export default Accordion;

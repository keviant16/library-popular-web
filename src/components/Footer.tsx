import { IonFooter, IonToolbar, IonTitle } from "@ionic/react";

interface FooterProps { }


const Footer: React.FC<FooterProps> = (props: FooterProps) => {

    return (
        <IonFooter>
            <IonToolbar>
                <IonTitle>
                    <h1>
                        Footer
                    </h1>
                </IonTitle>
            </IonToolbar>
        </IonFooter>
    );
};

export default Footer;


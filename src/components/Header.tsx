import React from 'react';
import { IonHeader, IonToolbar, IonButton, IonButtons, IonIcon, IonMenuToggle, IonItem, IonLabel, IonThumbnail } from '@ionic/react';
import { menu } from 'ionicons/icons';
import library_logo from "../assets/logos/library-logo.png";


export const Header: React.FC = () => (
    <IonHeader>
        <IonToolbar>
            <IonButtons slot="end">
                <IonMenuToggle>
                    <IonButton>
                        <IonIcon slot="icon-only" icon={menu}></IonIcon>
                    </IonButton>
                </IonMenuToggle>
            </IonButtons>


            <div style={{ textAlign: "center", display: "flex", justifyContent: "center" }}>
                <IonItem lines="none">
                    <img alt="Silhouette of mountains" src={library_logo} />
                    <IonLabel>
                        <h1>Librairie Populaire</h1>
                    </IonLabel>
                </IonItem>
            </div>

        </IonToolbar>
    </IonHeader>
);
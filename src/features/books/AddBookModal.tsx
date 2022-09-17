import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonFab, IonFabButton, IonGrid, IonHeader, IonIcon, IonImg, IonInput, IonItem, IonItemDivider, IonItemGroup, IonLabel, IonList, IonListHeader, IonModal, IonNav, IonRow, IonSearchbar, IonSelect, IonSelectOption, IonThumbnail, IonTitle, IonToolbar } from "@ionic/react"
import { OverlayEventDetail } from "@ionic/react/dist/types/components/react-component-lib/interfaces";
import { add } from "ionicons/icons"
import React, { useRef, useState } from "react";
import SearchGoogleBook from "./SearchGoogleBook";

const AddBookModal = () => {
    const modal = useRef<HTMLIonModalElement>(null);
    const input = useRef<HTMLIonInputElement>(null);




    function confirm() {
        modal.current?.dismiss(input.current?.value, 'confirm');
    }



    return (
        <React.Fragment>
            <IonFab id="open-modal" vertical="bottom" horizontal="end" slot="fixed">
                <IonFabButton >
                    <IonIcon icon={add} />
                </IonFabButton>
            </IonFab>
            <IonModal ref={modal} trigger="open-modal">

                <IonHeader>
                    <IonToolbar>
                        <IonButtons slot="end">
                            <IonButton></IonButton>
                            <IonButton onClick={() => modal.current?.dismiss()}>Fermer</IonButton>
                        </IonButtons>
                    </IonToolbar>
                </IonHeader>
                <IonContent className="ion-padding">

                    <IonNav root={() => <SearchGoogleBook />}></IonNav>


                    {/* <IonGrid>
                        <IonRow>
                            <IonCol size="12" sizeSm="5">
                                <IonImg alt="couverture-du-livre" src="https://ionicframework.com/docs/demos/api/thumbnail/thumbnail.svg" />
                            </IonCol>
                            <IonCol size="12" sizeSm="7">
                                <IonList>
                                    <IonItem>
                                        <IonLabel>
                                            <h3>Titre :</h3>
                                            <p>data</p>
                                        </IonLabel>
                                    </IonItem>
                                    <IonItem>
                                        <IonLabel>
                                            <h3>Sous-titre :</h3>
                                            <p>data</p>
                                        </IonLabel>
                                    </IonItem>
                                    <IonItem>
                                        <IonLabel>
                                            <h3>Auteur(s) :</h3>
                                            <p>data</p>
                                        </IonLabel>
                                    </IonItem>
                                </IonList>
                            </IonCol>

                            <IonCol size="12" sizeSm="12">
                                <IonList>
                                    <IonItem>
                                        <IonLabel>
                                            <h3>Section :</h3>
                                        </IonLabel>
                                        <IonSelect placeholder="Histoire">
                                            <IonSelectOption value="apples">Apples</IonSelectOption>
                                            <IonSelectOption value="oranges">Oranges</IonSelectOption>
                                            <IonSelectOption value="bananas">Bananas</IonSelectOption>
                                        </IonSelect>
                                    </IonItem>
                                    <IonItem>
                                        <IonLabel>
                                            <h3>Tags :</h3>
                                        </IonLabel>
                                        <IonSelect multiple placeholder="Cuisine, Animaux">
                                            <IonSelectOption value="apples">Apples</IonSelectOption>
                                            <IonSelectOption value="oranges">Oranges</IonSelectOption>
                                            <IonSelectOption value="bananas">Bananas</IonSelectOption>
                                        </IonSelect>

                                    </IonItem>

                                    <IonButton expand="full">Ajouter</IonButton>

                                    <IonItemGroup>
                                        <IonItemDivider>
                                            <IonLabel>Information supplementaire</IonLabel>
                                        </IonItemDivider>
                                        <IonItem>
                                            <IonLabel>
                                                <h3>Description :</h3>
                                                <p>data</p>
                                            </IonLabel>
                                        </IonItem>
                                        <IonItem>
                                            <IonLabel>
                                                <h3>Editeur :</h3>
                                                <p>data</p>
                                            </IonLabel>
                                        </IonItem>
                                        <IonItem>
                                            <IonLabel>
                                                <h3>Date de publication :</h3>
                                                <p>data</p>
                                            </IonLabel>
                                        </IonItem>
                                        <IonItem>
                                            <IonLabel>
                                                <h3>Nombre de livre :</h3>
                                                <p>data</p>
                                            </IonLabel>
                                        </IonItem>
                                    </IonItemGroup>
                                </IonList>
                            </IonCol>
                        </IonRow>
                    </IonGrid> */}
                </IonContent>
            </IonModal>
        </React.Fragment >
    )
}
export default AddBookModal
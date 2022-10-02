import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonGrid, IonImg, IonRow } from "@ionic/react"

const NewBookList: React.FC = () => {

    return (
        <IonGrid >
            <IonRow className="ion-justify-content-center">
                <IonCol size="12" sizeSm="10">
                    <h1>Nouveautés !</h1>
                    <p>Voici la liste des livres ajoutées cette semaine.</p>
                </IonCol>
            </IonRow>
            <IonRow className="ion-justify-content-center">
                <IonCol size="12" sizeSm="3">
                    <IonCard>
                        <IonImg src="https://ionicframework.com/docs/demos/api/thumbnail/thumbnail.svg" />
                        <IonCardHeader>
                            <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                            <IonCardTitle>Card Title</IonCardTitle>
                        </IonCardHeader>

                        <IonCardContent>
                            Keep close to Nature's heart... and break clear away, once in awhile,
                            and climb a mountain or spend a week in the woods. Wash your spirit clean.
                        </IonCardContent>
                    </IonCard>
                </IonCol>
                <IonCol size="12" sizeSm="3">
                    <IonCard>
                        <IonImg src="https://ionicframework.com/docs/demos/api/thumbnail/thumbnail.svg" />
                        <IonCardHeader>
                            <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                            <IonCardTitle>Card Title</IonCardTitle>
                        </IonCardHeader>

                        <IonCardContent>
                            Keep close to Nature's heart... and break clear away, once in awhile,
                            and climb a mountain or spend a week in the woods. Wash your spirit clean.
                        </IonCardContent>
                    </IonCard>
                </IonCol>
                <IonCol size="12" sizeSm="3">
                    <IonCard>
                        <IonImg src="https://ionicframework.com/docs/demos/api/thumbnail/thumbnail.svg" />
                        <IonCardHeader>
                            <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                            <IonCardTitle>Card Title</IonCardTitle>
                        </IonCardHeader>

                        <IonCardContent>
                            Keep close to Nature's heart... and break clear away, once in awhile,
                            and climb a mountain or spend a week in the woods. Wash your spirit clean.
                        </IonCardContent>
                    </IonCard>
                </IonCol>
                <IonCol size="12" sizeSm="3">
                    <IonCard>
                        <IonImg src="https://ionicframework.com/docs/demos/api/thumbnail/thumbnail.svg" />
                        <IonCardHeader>
                            <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                            <IonCardTitle>Card Title</IonCardTitle>
                        </IonCardHeader>

                        <IonCardContent>
                            Keep close to Nature's heart... and break clear away, once in awhile,
                            and climb a mountain or spend a week in the woods. Wash your spirit clean.
                        </IonCardContent>
                    </IonCard>
                </IonCol>
            </IonRow>
        </IonGrid >
    )
}

export default NewBookList
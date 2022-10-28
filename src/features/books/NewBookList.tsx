import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonGrid, IonImg, IonRow } from "@ionic/react"

const NewBookCard = ({ src, title, subtitle, content }: any) => {
    return (
        <IonCard>
            <IonImg src={src} />
            <IonCardHeader>
                <IonCardSubtitle>{subtitle}</IonCardSubtitle>
                <IonCardTitle>{title}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>{content}</IonCardContent>
        </IonCard>
    )
}

const NewBookList: React.FC = () => {

    return (
        <IonGrid>
            <IonRow className="ion-justify-content-center horizontal-scrollbar">
                <IonCol size="12" sizeSm="12">
                    <h1>Nouveautés !</h1>
                    <p>Voici la liste des livres ajoutées cette semaine.</p>
                </IonCol>
            </IonRow>
            <IonRow className="ion-justify-content-center">
                <IonCol size="12" sizeSm="3">
                    <NewBookCard
                        src="https://ionicframework.com/docs/demos/api/thumbnail/thumbnail.svg"
                        title="Card Title"
                        subtitle="Card Subtitle"
                        content="Keep close to Nature's heart... and break clear away, once in awhile,
                        and climb a mountain or spend a week in the woods. Wash your spirit clean."
                    />
                </IonCol>
                <IonCol size="12" sizeSm="3">
                    <NewBookCard
                        src="https://ionicframework.com/docs/demos/api/thumbnail/thumbnail.svg"
                        title="Card Title"
                        subtitle="Card Subtitle"
                        content="Keep close to Nature's heart... and break clear away, once in awhile,
                        and climb a mountain or spend a week in the woods. Wash your spirit clean."
                    />
                </IonCol>
                <IonCol size="12" sizeSm="3">
                    <NewBookCard
                        src="https://ionicframework.com/docs/demos/api/thumbnail/thumbnail.svg"
                        title="Card Title"
                        subtitle="Card Subtitle"
                        content="Keep close to Nature's heart... and break clear away, once in awhile,
                        and climb a mountain or spend a week in the woods. Wash your spirit clean."
                    />
                </IonCol>
                <IonCol size="12" sizeSm="3">
                    <NewBookCard
                        src="https://ionicframework.com/docs/demos/api/thumbnail/thumbnail.svg"
                        title="Card Title"
                        subtitle="Card Subtitle"
                        content="Keep close to Nature's heart... and break clear away, once in awhile,
                        and climb a mountain or spend a week in the woods. Wash your spirit clean."
                    />
                </IonCol>
            </IonRow>
        </IonGrid >
    )
}

export default NewBookList
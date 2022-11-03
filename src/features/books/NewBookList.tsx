import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonGrid, IonImg, IonItem, IonList, IonRow } from "@ionic/react"
import { useGetNewBooksQuery } from "../../app/api/api"
import Error from "../../components/Error"
import Spinner from "../../components/Spinner"
import Book from "../../interface/Book"

const NewBookCard = ({ src, title, subtitle, content }: any) => {
  return (
    <IonCard>
      <IonImg src={src} alt="new-book" />
      <IonCardHeader>
        <IonCardSubtitle>{subtitle}</IonCardSubtitle>
        <IonCardTitle>{title}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>{content}</IonCardContent>
    </IonCard>
  )
}

const NewBookList: React.FC = () => {
  const { data, error, isLoading } = useGetNewBooksQuery('')

  return (
    <IonGrid>
      <IonRow className="ion-justify-content-center">
        <IonCol size="12" sizeSm="12">
          <h1>Nouveautés !</h1>
          <p>Voici la liste des livres ajoutées cette semaine.</p>
        </IonCol>
      </IonRow>
      <IonRow>
        {error
          ? <Error />
          : isLoading ?
            <Spinner />
            : data ? data.map((book: Book) => (
              <IonCol key={book.id} size="12" sizeSm="4">
                <NewBookCard
                  src={book.image}
                  title={book.title}
                  subtitle={book.subtitle}
                  content={book.description}
                />
              </IonCol>
            )) : null
        }
      </IonRow>
    </IonGrid >
  )
}

export default NewBookList
import { IonButton, IonButtons, IonIcon, IonInput, IonItem, IonLabel, IonSpinner, useIonAlert } from "@ionic/react"
import { checkmark, pencil, trash } from "ionicons/icons";
import { useState } from "react";
import { useDeleteBookshelfMutation, useUpdateBookshelfMutation } from "../../app/api/api";
import Bookshelf from "../../interface/Bookshelf";

interface BookshelfProps {
  bookshelf: Bookshelf,
}

const BookshelfItem: React.FC<BookshelfProps> = (props: BookshelfProps) => {
  const [editing, setEditing] = useState<boolean>(false);
  const [input, setInput] = useState<string>();
  const [error, setError] = useState<string>();
  const [deleteBookshelf, { isLoading: isDeleting }] = useDeleteBookshelfMutation()
  const [updateBookshelf, { isLoading: isUpdating }] = useUpdateBookshelfMutation()
  const [presentAlert] = useIonAlert();

  const handleChange = (e: any) => {
    setInput(e.detail.value!)
    setError("")
  }

  const handleDelete = () => {
    presentAlert({
      header: "Attention !",
      subHeader: `Etes vous sur de vouloir supprimer la section ${props.bookshelf.name} ?`,
      buttons: [
        { text: 'Annuler', role: 'cancel' },
        {
          text: 'Confirmer',
          role: 'confirm',
          handler: async () => deleteBookshelf(props.bookshelf),
        },
      ],
    })
  }

  const editOnOnClick = async () => {
    if (!input) return setError("Le champs est vide")
    await updateBookshelf({ id: props.bookshelf.id, name: input, qty: props.bookshelf.qty })
    setEditing(!editing)
  }

  const toogleEditOnClick = async () => {
    setEditing(!editing)
    setInput(props.bookshelf.name);
    setError("")
  }

  return (
    <IonItem>
      {isUpdating || isDeleting
        ? <IonSpinner name="bubbles" />
        : editing ?
          <>
            <IonInput
              value={input}
              onIonChange={(e) => handleChange(e)}
              clearInput
            />
            {error &&
              <IonLabel slot="error" color={"danger"}>{error}</IonLabel>
            }
          </>
          :
          <IonLabel>
            <h2>{props.bookshelf.name + " (" + props.bookshelf.qty + ")"}</h2>
          </IonLabel>
      }

      <IonButtons slot='end'>
        {editing &&
          <IonButton onClick={editOnOnClick} color={"success"} fill="solid">
            <IonIcon slot="icon-only" icon={checkmark} />
          </IonButton>
        }
        <IonButton onClick={toogleEditOnClick} color={"warning"} fill="solid">
          <IonIcon slot="icon-only" icon={pencil} />
        </IonButton>
        <IonButton onClick={handleDelete} color={"danger"} fill="solid">
          <IonIcon slot="icon-only" icon={trash} />
        </IonButton>
      </IonButtons>
    </IonItem >
  )
}

export default BookshelfItem;

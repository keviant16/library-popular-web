import { IonButton, IonButtons, IonIcon, IonInput, IonItem, IonLabel, IonSpinner, useIonAlert } from "@ionic/react"
import { checkmark, close, pencil, trash } from "ionicons/icons";
import { useState } from "react";
import { useDeleteTagMutation, useUpdateTagMutation } from "../../app/api/api";
import Tag from "../../interface/Tag";

interface TagItemProps {
  tag: Tag,
}

const TagItem: React.FC<TagItemProps> = (props: TagItemProps) => {
  const [editing, setEditing] = useState<boolean>(false);
  const [input, setInput] = useState<string>();
  const [error, setError] = useState<string>();
  const [deleteTag, { isLoading: isDeleting }] = useDeleteTagMutation()
  const [updateTag, { isLoading: isUpdating }] = useUpdateTagMutation()
  const [presentAlert] = useIonAlert();

  const handleChange = (e: any) => {
    setInput(e.detail.value!)
    setError("")
  }

  const handleDelete = () => {
    presentAlert({
      header: "Attention !",
      subHeader: `Etes vous sur de vouloir supprimer la tag ${props.tag.name} ?`,
      buttons: [
        { text: 'Annuler', role: 'cancel' },
        {
          text: 'Confirmer',
          role: 'confirm',
          handler: async () => deleteTag(props.tag)
        },
      ],
    })
  }

  const editOnClick = async () => {
    if (!input) return setError("Le champs est vide")
    await updateTag({ id: props.tag.id, name: input, qty: props.tag.qty })
    setEditing(!editing)
  }

  const toogleEditOnClick = () => {
    setEditing(!editing)
    setInput(props.tag.name);
    setError("")
  }

  return (
    <IonItem>
      {isUpdating || isDeleting
        ? <IonSpinner name="lines" className="custom" />
        : editing
          ?
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
            <h2>{props.tag.name + " (" + props.tag.qty + ")"}</h2>
          </IonLabel>
      }

      <IonButtons slot='end'>
        {editing &&
          <IonButton onClick={editOnClick} color={"success"} fill="solid">
            <IonIcon slot="icon-only" icon={checkmark} />
          </IonButton>
        }
        <IonButton onClick={toogleEditOnClick} color={editing ? "medium" : "warning"} fill="solid">
          <IonIcon slot="icon-only" icon={editing ? close : pencil} />
        </IonButton>
        <IonButton onClick={handleDelete} color={"danger"} fill="solid">
          <IonIcon slot="icon-only" icon={trash} />
        </IonButton>
      </IonButtons>
    </IonItem >
  )
}

export default TagItem;

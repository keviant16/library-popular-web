import { IonList, IonListHeader, IonLabel, IonItem, IonInput, IonButton, IonIcon, IonSpinner } from "@ionic/react";
import { add } from "ionicons/icons";
import { useEffect, useState } from "react";
import Tag from "../../interface/Tag";
import { addTag, getAllTags } from "../../services/TagService";
import TagItem from "./TagItem";

const TagList: React.FC = () => {
    const [input, setInput] = useState<string>();
    const [error, setError] = useState<string>();
    const [loading, setLoading] = useState<boolean>(false);
    const [tagList, setTagList] = useState<any>([]);

    useEffect(() => {
        setLoading(true)
        initTagList()
    }, []);

    const handleOnChange = (e: any) => {
        setInput(e.detail.value!)
        setError("")
    }

    const initTagList = async () => {
        const tags: any = await getAllTags();
        setTagList(tags)
        setLoading(false)
    }

    const addTagOnClick = async () => {

        if (!input) {
            setError("Le champs est vide")
            return
        }

        setLoading(true)
        const newTag: Tag = { label: input, bookNumber: 0, resourceId: null }
        const status: number | undefined = await addTag(newTag);

        if (status === 409) {
            setError("Le tag " + input + " existe déjà.")
            setLoading(false)
            return
        }

        initTagList()
    }

    return (
        <IonList>
            <IonListHeader>
                <IonLabel>
                    <h1>Tags</h1>
                    <p>D'Ici vous pouvez ajouter, modifer et supprimer un tag de la librairie</p>
                </IonLabel>
            </IonListHeader>
            <IonItem>
                <IonInput
                    value={input}
                    placeholder="Ajouter une nouvelle section ici ..."
                    onIonChange={(e) => handleOnChange(e)} />
                {error &&
                    <IonLabel slot="error" color={"danger"}>{error}</IonLabel>
                }
                <IonButton
                    onClick={addTagOnClick}
                    slot="end"
                    color={"primary"}
                    fill="solid">
                    <IonIcon slot="icon-only" icon={add} />
                </IonButton>
            </IonItem>

            {loading ? <IonSpinner name="bubbles" /> :
                tagList.map((tag: Tag) => (
                    <TagItem
                        key={tag.resourceId}
                        tag={tag}
                        callback={initTagList}
                    />
                ))}

        </IonList>
    )
}

export default TagList;
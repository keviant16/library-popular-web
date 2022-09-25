import { IonList, IonListHeader, IonLabel, IonItem, IonInput, IonButton, IonIcon, IonSpinner } from "@ionic/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTags } from "../../app/features/tag/tagSlice";
import Tag from "../../interface/Tag";
import { getAllTags } from "../../services/TagService";
import TagItem from "./TagItem";

const TagList: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const tags = useSelector((state: any) => state.tag.tags)
    const dispatch = useDispatch()

    useEffect(() => {
        const initOnStart = async () => {
            const response: Tag[] = await getAllTags();
            dispatch(setTags(response))
            setLoading(false)
        }
        setLoading(true)
        initOnStart()
    }, [dispatch]);

    return (
        <IonList>
            <IonListHeader>
                <IonLabel>
                    <h1>Tags</h1>
                    <p>D'Ici vous pouvez ajouter, modifer et supprimer un tag de la librairie</p>
                </IonLabel>
            </IonListHeader>
            {loading ? <IonSpinner name="bubbles" /> :
                tags.map((tag: Tag) => (
                    <TagItem key={tag.id} tag={tag} />
                ))}
        </IonList>
    )
}

export default TagList;
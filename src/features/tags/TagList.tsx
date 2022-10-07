import { IonList, IonListHeader, IonLabel, } from "@ionic/react";
import { useSelector } from "react-redux";
import Tag from "../../interface/Tag";
import TagItem from "./TagItem";

const TagList: React.FC = () => {
    const tags = useSelector((state: any) => state.tag.tags)

    return (
        <IonList>
            <IonListHeader>
                <IonLabel>
                    <h1>Tags</h1>
                </IonLabel>
            </IonListHeader>
            {tags.map((tag: Tag) => (
                <TagItem key={tag.id} tag={tag} />
            ))}
        </IonList>
    )
}

export default TagList;
import { IonList } from "@ionic/react";
import { arrowBack } from "ionicons/icons";
import { useSelector } from "react-redux";
import ListHeader from "../../components/ListHeader";
import Tag from "../../interface/Tag";
import TagItem from "./TagItem";

const TagList: React.FC = () => {
    const tags = useSelector((state: any) => state.tag.tags)

    return (
        <IonList>
            <ListHeader icon={arrowBack} header={"Tags"} />
            {tags.map((tag: Tag) => (
                <TagItem key={tag.id} tag={tag} />
            ))}
        </IonList>
    )
}

export default TagList;
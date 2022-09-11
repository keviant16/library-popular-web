import { IonButton } from "@ionic/react";

interface ButtonProps {
    content: string | undefined,
    onClick: any | undefined,
    disabeled: boolean | undefined,
    color: string | undefined
}

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
    return (
        <IonButton color={props.color} onClick={props.onClick}>{props.content}</IonButton>
    );
};

export default Button;

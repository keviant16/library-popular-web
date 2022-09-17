import { IonCol, IonContent, IonGrid, IonNav, IonPage, IonRow } from '@ionic/react';
import { useState } from 'react';
import { Header } from '../../components/Header';


const AddBook: React.FC = () => {
    const [input, setInput] = useState<string>();

    return (
        <IonPage>
            <Header />
            <IonContent>
                <IonGrid fixed>
                    <IonRow>
                        <IonCol>input...</IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            ggbook..
                        </IonCol>
                        <IonCol>
                            BookForm..
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default AddBook;

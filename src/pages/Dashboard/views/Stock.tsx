import { IonButton, IonButtons, IonContent, IonFab, IonFabButton, IonHeader, IonIcon, IonModal, IonNav, IonPage, IonToolbar } from '@ionic/react';
import { scan, stopCircleOutline } from 'ionicons/icons';
import { useEffect, useRef, useState } from 'react';
import { Header } from '../../../components/Header';
import BookList from '../../../features/books/BookList';
import BookModal from '../../../features/books/BookModal';
import { BarcodeScanner } from "@capacitor-community/barcode-scanner";
import BookSearchList from '../../../features/books/BookSearchList';

const Stock: React.FC = () => {
  const [hideBg, setHideBg] = useState<string>("");
  const [input, setInput] = useState<string | undefined>("");
  const [isOpen, setIsOpen] = useState(false);
  const modal = useRef<HTMLIonModalElement>(null);

  const startScan = async () => {
    BarcodeScanner.hideBackground(); // make background of WebView transparent
    setHideBg("hideBg");

    const result = await BarcodeScanner.startScan(); // start scanning and wait for a result
    stopScan();

    // if the result has content
    if (result.hasContent) {
      setInput(result.content)
      setIsOpen(true)
      // log the raw scanned content
    }
  };

  const stopScan = () => {
    BarcodeScanner.showBackground();
    BarcodeScanner.stopScan();
    setHideBg("");
  };

  useEffect(() => {
    const checkPermission = async () => {
      const status = await BarcodeScanner.checkPermission({ force: true });

      if (status.granted) {
        return true;
      }
    };

    checkPermission();

    return () => { };
  }, []);

  return (
    <IonPage>
      {hideBg ?
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="end">
              <IonButton color="danger" hidden={!hideBg} onClick={stopScan}>
                <IonIcon icon={stopCircleOutline} slot="start" />
                Stop Scan
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        : <Header />}
      <IonContent className={hideBg}>

        {hideBg ?
          <div hidden={!hideBg} className="scan-box" /> :
          <>
            <BookList hideAddBook />
            <BookModal />
            <IonFab vertical="bottom" horizontal="start" slot="fixed">
              <IonFabButton onClick={startScan} hidden={!!hideBg}>
                <IonIcon icon={scan} />
              </IonFabButton>
              <IonModal ref={modal} isOpen={isOpen}>
                <IonNav root={() => <BookSearchList modal={modal} isbn={input} />} />
              </IonModal>
            </IonFab>
          </>
        }
      </IonContent>
    </IonPage>
  );
};

export default Stock;

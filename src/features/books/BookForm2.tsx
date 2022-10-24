import { IonBackButton, IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonImg, IonItem, IonLabel, IonList, IonRow, IonSelect, IonSelectOption, IonSpinner, IonTitle, IonToolbar } from '@ionic/react';
import { RefObject, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGetAllBookshelvesQuery } from '../../app/api/api';
import { pushBook, updateBook, } from '../../app/slice/bookSlice';
import Book from '../../interface/Book';
import Bookshelf from '../../interface/Bookshelf';
import Tag from '../../interface/Tag';
import { addBook, editBook } from '../../services/BookService';
import { handleStatusValue } from '../../utils/Utils';
import { BookFormItem } from './BookFormItem';

interface BookFormProps {
  modal: RefObject<HTMLIonModalElement>
  book: Book
  editable?: boolean
}

const BookForm2: React.FC<BookFormProps> = (props: BookFormProps) => {
  const { data: bookshelves, error: bookshelvesError, isLoading: isBookshelvesLoading } = useGetAllBookshelvesQuery('')
  const [loading, setLoading] = useState<boolean>();
  const [loading2, setLoading2] = useState<boolean>();
  const [error, setError] = useState<string>("");
  const [bookForm, setBookForm] = useState({
    bookshelf: props.book.bookshelf,
    price: props.book.price ? props.book.price : 0.50,
    tags: props.book.tags && props.book.tags
  });

  const addBookOnClick = async () => {
    if (!bookForm.bookshelf) return setError("Etagère est vide")

    const new_book: Book = {
      ...props.book,
      price: bookForm.price,
      bookshelf: bookForm.bookshelf,
      tags: bookForm.tags,
      status: "IN_STOCK",
      donatedMoney: 0.00
    }

    const response_book_or_status: Book | number = await addBook(new_book)
    setLoading(false)
    if (typeof response_book_or_status === "number") return setError("error" + response_book_or_status)
    props.modal.current?.dismiss()
  }

  const editBookOnClick = async () => {
    setLoading(true)

    const current_book: Book = {
      ...props.book,
      price: bookForm.price,
      bookshelf: bookForm.bookshelf,
      tags: bookForm.tags,
    }
    const response_book_or_status: Book | number = await editBook(current_book, props.book.id)
    setLoading(false)

    if (typeof response_book_or_status === "number") return setError("error" + response_book_or_status)
    props.modal.current?.dismiss()
  }

  const toogleStatusBookOnClick = async () => {
    setLoading2(true)

    const current_book: Book = {
      ...props.book,
      status: props.book.status === "GONE" ? "IN_STOCK" : "GONE"
    }

    const response_book_or_status: Book | number = await editBook(current_book, props.book.id)
    setLoading(false)

    if (typeof response_book_or_status === "number") return setError("error" + response_book_or_status)
    props.modal.current?.dismiss()
  }

  return (
    <>
      <IonHeader>
        <IonToolbar>
          {props.editable ?
            <IonTitle>
              <h3>Modifier</h3>
            </IonTitle>
            :
            <>
              <IonButtons slot='start'>
                <IonBackButton></IonBackButton>
              </IonButtons>
              <IonTitle>
                <h3>2. Ajouter</h3>
              </IonTitle>
            </>
          }
          <IonButtons slot='end'>
            <IonButton onClick={() => props.modal.current?.dismiss()}>Fermer</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader >
      <IonContent className="ion-padding">
        <IonGrid>
          <IonRow>
            <IonCol sizeSm="3">
              <IonImg alt={"couverture-du-livre" + props.book.title}
                className="thumbnaill"
                src={props.book.image ? props.book.image : "https://ionicframework.com/docs/demos/api/thumbnail/thumbnail.svg"} />
            </IonCol>
            <IonCol sizeSm="9">
              <IonList>
                <BookFormItem head="Titre" content={<p>{props.book.title}</p>} />
                <BookFormItem head="Auteur" content={
                  <ul>
                    {props.book.authors && props.book.authors.map((authorName: string, idx: number) => (
                      <li key={idx}><p>{authorName}</p></li>
                    ))}
                  </ul>
                } />
              </IonList>
            </IonCol>
            <IonCol size="12" sizeSm="12">
              <IonList>
                <BookFormItem head="Sous-titre" content={<p>{props.book.subtitle ? props.book.subtitle : "-"}</p>} />
                <BookFormItem head="Description" content={<p>{props.book.description ? props.book.description : "-"}</p>} />

                <BookFormItem head="Editeur" content={<p>{props.book.publisher ? props.book.publisher : "-"}</p>} />
                <BookFormItem head="Date de publication " content={<p>{props.book.publishedDate ? props.book.publishedDate : "-"}</p>} />
                <BookFormItem head="Nombre de page" content={<p>{props.book.pageCount ? props.book.pageCount : "-"}</p>} />

                {props.editable &&
                  <>
                    <BookFormItem head="Argent des donnations" content={<p>{props.book.donatedMoney} €</p>} />
                    <BookFormItem head="Status" content={<p>{props.book.status && handleStatusValue(props.book.status)}</p>} />
                  </>
                }

                <BookFormItem head="Etagère" select={
                  <IonSelect name='bookshelf' value={bookForm.bookshelf}
                    onIonChange={(e) => setBookForm(prev => ({ ...prev, bookshelf: e.detail.value }))}
                  >
                    {/* {bookshelves.map((bookshelf: Bookshelf) => (
                                            <IonSelectOption key={bookshelf.id} value={bookshelf.name}>{bookshelf.name}</IonSelectOption>
                                        ))} */}
                  </IonSelect>
                } />

                <BookFormItem head="Tags" select={
                  <IonSelect multiple name="tags" value={bookForm.tags}
                    onIonChange={(e) => setBookForm(prev => ({ ...prev, tags: e.detail.value }))}
                  >
                    {/* {tags.map((tag: Tag) => (
                                            <IonSelectOption key={tag.id} value={tag.name}>{tag.name}</IonSelectOption>
                                        ))} */}
                  </IonSelect>
                } />

                <BookFormItem head="Prix" select={
                  <IonSelect
                    name="price"
                    value={bookForm.price}
                    placeholder="(en €)"
                    onIonChange={(e) => setBookForm(prev => ({ ...prev, price: e.detail.value }))}
                  >
                    <IonSelectOption value={1.00}>1.00 €</IonSelectOption>
                    <IonSelectOption value={0.50}>0.50 €</IonSelectOption>
                  </IonSelect>
                } />


                {error &&
                  <IonItem>
                    <IonLabel slot="error" color={"danger"}>{error}</IonLabel>
                  </IonItem>
                }

                {props.editable ?
                  <>
                    <IonButton expand="full"
                      onClick={editBookOnClick}
                      color={"primary"}
                      size="default"
                      fill="solid"
                    >
                      {loading ? <IonSpinner name="bubbles" /> : "Editer"}
                    </IonButton>
                    <IonButton expand="full"
                      onClick={toogleStatusBookOnClick}
                      color={props.book.status === "GONE" ? "success" : "danger"}
                      size="default"
                      fill="solid"
                    >
                      {loading2 ? <IonSpinner name="bubbles" /> : props.book.status === "GONE" ? "Restorer" : "Retirer"}
                    </IonButton>
                  </>
                  :
                  <IonButton expand="full"
                    onClick={addBookOnClick}
                    color={"primary"}
                    size="default"
                    fill="solid"
                  >
                    {loading ? <IonSpinner name="bubbles" /> : "Ajouter"}
                  </IonButton>
                }
              </IonList>
            </IonCol>
          </IonRow>
        </IonGrid>

      </IonContent>
    </>
  )
}
export default BookForm2



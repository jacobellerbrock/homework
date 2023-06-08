import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/font/botstrap-icons.css'
import { Book } from './models/book'
import BookForm from './components/BookForm'
import BookTable from './components/BookTable'
import {useEffect, useState} from "react";
import LibraryService from "./services/book-service";

function App() {

  const [books, setBooks] = useState([]);
  const [bookToEdit, setBookToEdit] = useState(null);

  useEffect(
      () => {
        if (!books.length) {
          onInitialLoad();
        }
      },[]);

  async function onInitialLoad() {
    try {
      const books = await LibraryService.fetchBooks();
      setBooks(books);
    } catch (err) {
      console.log(err);
    }
  }

  async function onBookCreated(book) {
    // setBookToEdit(null);
    // setBooks([...books, book]);
    const newbook = await LibraryService.createBook(new Book(null, book.title, book.author, book.isbn));
    setBooks([...books, newbook]);
  }

  async function onBookDelete(book) {
    // setBooks(books.filter((x) => x.isbn !== book.isbn));
    await LibraryService.deleteBook(book.id);
    setBooks(books.filter((x) => book.id !== x.id));
  }

  async function onBookEdit(book) {
    // setBookToEdit(book);
    // setBooks(books.filter((x) => x.isbn !== book.isbn));
    await LibraryService.updateBook(book);
    setBooks(books.filter((x) => book.id!== x.id));
  }

  return (
    <div className={"text-center"}>
      <div className={'card p-4'}>
        <BookForm onBookCreated={onBookCreated} bookToEdit={bookToEdit}></BookForm>
        <BookTable books={books}
        onBookDelete={onBookDelete}
        onBookEdit={onBookEdit}></BookTable>
      </div>
    </div>
  );
}

export default App;

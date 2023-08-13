import React, { createContext, useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const BookContext = createContext();
const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    { title: "The Great Gatsby", author: "Scott Fitzgerald", id: 1 },
    { title: "Pride and Prejudice", author: "Jane Austen", id: 2 },
  ]);

  const addBook = (title, author) => {
    setBooks([...books, { title: title, author: author, id: uuidv4() }]);
  };

  const removeBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <BookContext.Provider value={{ books, addBook, removeBook }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;

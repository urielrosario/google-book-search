import React, { useState, useEffect } from "react";
import API from "../utils/API";
import Saved from "../components/Saved";

function SaveBooks() {
  // const [formObject, setFormObject] = useState({});
  const [books, setBooks] = useState([]);

  function loadBooks() {
    API.getBooks()
      .then((res) => setBooks(res.data))
      .catch((err) => console.log(err));
  }
  useEffect(() => {
    loadBooks();
  }, []);

  return (
    <>
      <div>
        <ul>
          {books.map((book) => {
            return (
              <Saved
                title={book.title}
                authors={book.authors}
                description={book.description}
                link={book.link}
                image={book.image}
                key={book._id}
                id={book._id}
              />
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default SaveBooks;

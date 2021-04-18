import React, { Component } from "react";
import API from "../utils/API";
import Saved from "../components/Saved/index";

function savedBooks() {
  const [books, setBooks] = useState([]);
  const [formObject, setFormObject] = useState({});

  function loadBooks() {
    API.getBooks()
      .then((res) => setBooks(res.data))
      .catch((err) => console.log(err));
  }
  useEffect(() => {
    loadBooks;
  }, []);

  return (
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
  );
}

export default savedBooks;

import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import Jumbotron from "../Jumbotron";
import DeleteBtn from "../DeleteBtn";

function Saved(props) {
  const [book, setBook] = useState([]);

  useEffect(() => {
    loadBooks();
  }, []);

  function deleteBook(id) {
    API.deleteBook(id)
      .then((res) => loadBooks())
      .catch((err) => console.log(err));
  }

  function loadBooks() {
    API.getBooks()
      .then((res) => {
        setBook(res.data);
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      <div>
        <Jumbotron>
          <p className="lead">Saved Books</p>
          <Jumbotron>
            {book.length ? (
              <ul className="list-group">
                {book.map((book) => (
                  <li className="list-group-item" key={book._id}>
                    <p className="lead d-inline">{book.title}</p>
                    <DeleteBtn onClick={() => deleteBook(book._id)} />
                    <a
                      className="btn btn-success mr-1"
                      style={{ float: "right" }}
                      href={book.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View
                    </a>
                    <p className="lead">Written by {book.authors}</p>
                    <img
                      src={book.image}
                      className="img-thumbnail float-left mr-3"
                      alt="Book"
                    ></img>
                    <p className="lead">{book.description}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <h3>No Saved Books</h3>
            )}
          </Jumbotron>
        </Jumbotron>
      </div>
    </>
  );
}
export default Saved;

import React, { useState, useEffect } from "react";
import API from "../utils/API";
import Jumbotron from "../components/Jumbotron";
import { FormBtn, Input } from "../components/Form";
import { SaveBtn } from "../components/SaveBtn";
// import DeleteBtn from "../components/DeleteBtn";

function Home() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    searchBooks();
  }, []);

  const handleInputChange = (e) => {
    const { value } = e.target;
    setSearch(value);
  };
  function handleFormSubmit(e) {
    e.preventDefault();
    console.log(search);
    searchBooks(search);
  }

  const searchBooks = (book) => {
    API.getBook(book)
      .then((res) => {
        console.log(res);
        setResults(res.data.items);
      })
      .catch((err) => console.log(err));
  };

  const saveBook = (id) => {
    const saveBook = results.filter((result) => result.id === id);

    const [bookObject] = saveBook;

    API.saveBook({
      title: bookObject.volumeInfo.title,
      link: bookObject.volumeInfo.infoLink,
      authors: bookObject.volumeInfo.authors,
      description: bookObject.volumeInfo.description,
      image: bookObject.volumeInfo.imageLinks,
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div>
        <Jumbotron>
          <p>Book Search</p>
          <p>Book</p>
          <form>
            <Input onChange={handleInputChange} />
            <FormBtn onClick={handleFormSubmit} children="Search" />
          </form>
        </Jumbotron>
        <Jumbotron>
          <p>Results</p>
          <Jumbotron>
            {results.length ? (
              <ul className="list-group">
                {results.map((result) => (
                  <li className="list-group-item" key={result.id}>
                    <p className="lead d-inline">{result.volumeInfo.title}</p>
                    <SaveBtn onClick={() => saveBook(result.id)} />
                    <a
                      className="btn btn-success mr-1"
                      href={result.volumeInfo.infoLink}
                      rel="save"
                    >
                      View
                    </a>
                    <p>Written by {result.volumeInfo.authors}</p>
                    {result.volumeInfo.imageLinks ? (
                      <img
                        src={result.volumeInfo.imageLinks.smallThumbnail}
                        className="img-thumbnail float-left mr-3"
                        alt="Book"
                      ></img>
                    ) : (
                      <img
                        src="https://via.placeholder.com/200"
                        className="img-thumbnail float-left mr-3"
                        alt="Book"
                      ></img>
                    )}
                    <p>{result.volumeInfo.description}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Jumbotron>
        </Jumbotron>
      </div>
    </>
  );
}
export default Home;

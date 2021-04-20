import React from "react";

const ResultList = (props) => {
  return (
    <>
      <div>
        <h2>{props.title}</h2>
        <p>Written by: {props.authors}</p>
        <div>
          <img src={props.image} alt="thumbnail"></img>
          <p>{props.description}</p>
        </div>
        <div>
          <button className="btn">
            <a href={props.link}>Link</a>
          </button>
          <button className="btn" onClick={() => props.saveBook(props)}>
            <a type="submit" href="/">
              Save
            </a>
          </button>
        </div>
      </div>
    </>
  );
};

export default ResultList;

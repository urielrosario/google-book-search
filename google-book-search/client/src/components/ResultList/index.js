import React from "react";

const ResultList = (props) => {
  return (
    <div>
      {props.list.map((element) => (
        <h1>{element.volumeInfo.title}</h1>
      ))}
    </div>
  );
};

export default ResultList;

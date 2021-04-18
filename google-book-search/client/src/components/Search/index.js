import React from "react";

export default function Search(props) {
  return (
    <div className="form-group">
      <input className="form-control" onChange={props.searchFn} />
      <button className="btn btn-danger" onClick={props.clickFn}>
        Search!
      </button>
    </div>
  );
}

import React from "react";

export function Input(props) {
  return (
    <div className="form-group">
      <input className="form-control" onChange={props.onChange} />
    </div>
  );
}

export function TextArea(props) {
  return (
    <div className="form-group">
      <textarea className="form-control" rows="20" {...props} />
    </div>
  );
}

export function FormBtn(props) {
  return (
    <button
      onClick={props.onClick}
      style={{ float: "right", marginBottom: 10 }}
      className="btn btn-success"
    >
      {props.children}
    </button>
  );
}

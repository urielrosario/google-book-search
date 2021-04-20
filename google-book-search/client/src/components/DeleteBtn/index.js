import React from "react";

function DeleteBtn(props) {
  return (
    <span className="delete-btn" {...props} role="button">
      ✗
    </span>
  );
}

export default DeleteBtn;

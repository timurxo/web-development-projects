import React from "react";

function Note(props) {
  // delete by id
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <p>{props.content}</p>

      <button className="btn" onClick={handleClick}>
        <i className="fa fa-trash" />
      </button>
    </div>
  );
}

export default Note;

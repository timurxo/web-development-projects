import React, { useState } from "react";

function InputArea(props) {
  const [newItem, setNewItem] = useState("");

  // get new item from user
  function handleChange(event) {
    const item = event.target.value;
    setNewItem(item);
  }

  // button click - add new item to array & clear input
  function handleClick() {
    props.addNew(newItem);
    setNewItem("");
  }

  const [isMouseOver, setMouseOver] = useState(false);

  function handleMouseOut() {
    setMouseOver(false);
  }

  function handleMouseOver() {
    setMouseOver(true);
  }

  return (
    <div className="form">
      <input onChange={handleChange} type="text" value={newItem} />
      <button
        onClick={handleClick}
        style={{ backgroundColor: isMouseOver ? "#40bad5" : "#ddf3f5" }}
        onMouseOut={handleMouseOut}
        onMouseOver={handleMouseOver}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;

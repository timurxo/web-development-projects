import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";

function App() {
  const [items, setItems] = useState(["Click on item to delete it"]);

  function addItem(inputItem) {
    // add new item to the list of existing items
    setItems(prevItem => {
      return [...prevItem, inputItem];
    });
  }

  // delete item with unique id
  function deleteItem(id) {
    setItems(prevItem => {
      // find item with specified id
      return prevItem.filter((item, index) => {
        // return everything but item with found id
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To Do List</h1>
      </div>
      <InputArea addNew={addItem} />
      <div>
        <ul>
          {/* traverse each item in array */}
          {items.map((todoItem, index) => (
            <ToDoItem
              key={index}
              id={index}
              text={todoItem}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

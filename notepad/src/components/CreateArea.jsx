import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState("");

  function handleChange(event) {
    // access name and value of textarea
    const { name, value } = event.target;
    // make note = old content + new content
    setNote(prevValue => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  const [pl, setPl] = useState("Make a note...");

  function submitNote(event) {
    if (note.content !== "") {
      setPl("Make a note...");
      props.addNew(note);
      setNote({
        title: "",
        content: ""
      });
    } else {
      setPl("Note is empty!");
    }

    event.preventDefault();
  }

  return (
    <div>
      <form>
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder={pl}
          rows="3"
        />

        <button className="btn" onClick={submitNote}>
          <ion-icon className="btn-icon" name="add-outline" />
        </button>
      </form>
    </div>
  );
}

export default CreateArea;

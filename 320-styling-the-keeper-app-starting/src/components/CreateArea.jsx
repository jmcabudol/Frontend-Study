import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
import { Zoom } from "@mui/material";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });
  const [isVisible,setVisible]= React.useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }


  function handleVisibility(){
      setVisible(true)
  }


  return (
    <div>
      <form className="create-note" >
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
    
          style={
            {display: isVisible ? "" : "none"}
          }
        />
        <textarea
    
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          onClick={handleVisibility}
          rows={isVisible ? 3 : 1}
        />
        <Zoom in={isVisible}>  
          <Fab onClick={submitNote}  >
            <AddIcon/>
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;

import React from "react";

function CreateArea(props) {

const [note,setNote] = React.useState({
  title:"",
  content: ""
});

function handleChange(){

  const {name,value } = event.target;

  setNote((prevNote)=>{
    return {
      ...prevNote,
      [name]:value
    }
  })
}

function handleSubmit(event){
  props.onAdd(note)
  setNote({
    title:"",
    content: ""
  })
  event.preventDefault();
}

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="title" placeholder="Title" 
          onChange={handleChange} value={note.title}/>
        <textarea onChange={handleChange} name="content"
         placeholder="Take a note..." rows="3"  value={note.content}/>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default CreateArea;

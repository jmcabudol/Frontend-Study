import React from "react";


function ToDolist(props){


    return(
        <div onClick = {()=>{
            props.onChecked(props.id)
        }}>
            <li>{props.text}</li>
        </div>
        
    )
}

export default ToDolist;
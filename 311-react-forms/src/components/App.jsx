import React, { useState } from "react";

function App() {
  const [name, setName] = React.useState("");
  const [userName, setUserName] = React.useState("");

  function handleOnChange(event) {
    setName(event.target.value);
  }

  function handleUserName(event) {
    setUserName(name);

    event.preventDefault();
  }

  return (
    <div className="container">
      <h1> Hello {userName}</h1>
      <form onSubmit={handleUserName}>
        <input
          onChange={handleOnChange}
          type="text"
          placeholder="What's your name?"
          value={name}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;

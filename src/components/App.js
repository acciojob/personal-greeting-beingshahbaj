
import { useState } from "react";
import React from "react";
import './../styles/App.css';

const App = () => {
  const [name , setName] = useState("");
   function handel(e){
    let text ="hello" + " "  + (e.target.value) + " " +  "!";

    setName(text)
   }
  return (
    <div>
       <h1>Enter your name</h1>
       <input type="text" onChange={handel}></input>
        <p>{name}</p>
    </div>
  )
}

export default App

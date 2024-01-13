
import { useState } from "react";
import React from "react";
import './../styles/App.css';

const App = () => {
  const [name , setName] = useState("");
   function handel(e){
    let text ="Hello" + " "  + (e.target.value) +  "!";

    setName(text)
   }
  return (
    <div>
       <p>Enter your name:</p>
       <input type="text" onChange={handel}></input>
        <p>{name}</p>
    </div>
  )
}

export default App

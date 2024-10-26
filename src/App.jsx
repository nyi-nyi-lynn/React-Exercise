import { useEffect, useState } from "react";
import "./App.css";

function App() {
    const [name,setName] = useState("");

    useEffect(()=>{
      console.log(name);  
    },[name]);
    
  return (
      <>
        <h1>React App</h1>
        <label htmlFor="name">Enter your name</label>
        <input type="text" onChange={(e)=>{setName(e.target.value)}} />
      </>
  );
}

export default App;

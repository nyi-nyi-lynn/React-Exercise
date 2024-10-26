import {  useState } from "react";
import "./App.css";

function App() {
  const [num, setNum] = useState(0);

  return (
    <>
      <h1>Number Count React App</h1>
      <div className="container">
        <button onClick={
          (e)=>{
            setNum((prev)=>prev+1)
          }
        }>+</button>
        <span>{num}</span>
        <button className="minus" onClick={(e)=>{
          setNum((prev)=>prev -1)
        }}>-</button>
      </div>
    </>
  );
}

export default App;

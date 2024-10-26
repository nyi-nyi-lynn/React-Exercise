import {  useReducer} from "react";
import "./App.css";
 const countReducer = (state,action)=>{
    switch(action.type){
      case "plus" : 
         return {...state , count:state.count++,};
      case "minus" :
        return {...state, count:state.count--};
        case "updateText" :
          return {...state,text:action.payload};
      default:
         throw new  Error();
    }
 };

function App() {
  const [state,dispatch] = useReducer(countReducer,{count:0,text:""});
  return (
    <div className="card">
      <h1>Number Count React App</h1>
      <input type="text" name="" id="" onChange={(e)=>dispatch({type: "updateText" , payload:e.target.value})} />
        <p>your text is {state.text}</p>
      <div className="container">
        <button onClick={(e)=>{dispatch({type:"plus"})}}>+</button>
        <span>{state.count}</span>
        <button className="minus" onClick={(e)=>{dispatch({type:"minus"})}}>-</button>
      </div>
    </div>
  );
}

export default App;

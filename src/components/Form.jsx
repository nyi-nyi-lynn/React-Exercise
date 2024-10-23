import React, { useState } from 'react'

const Form = () => {
  const[info,setInfo] = useState({
    name:"",
    live:"",
  });

  const trackName = (event)=>{
    setInfo({
        ...info,
        name: event.target.value,
    });
  }
  const trackLive = (event)=>{
    setInfo({
        ...info,
        live:event.target.value,
    })
  }
  const showLog = (event)=>{
    event.preventDefault();
    const data = {
        name:info.name,
        live:info.live
    }

    console.log(data);
    
  }
  return (
    <div>
        <form onSubmit={showLog} >
            <input type="text" name="name" id="" placeholder='name' onChange={trackName}/>
            <input type="text" name="live" id="" placeholder='live'  onChange={trackLive}/>
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Form
import React, { useState } from 'react'

const Form = (props) => {
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

    props.addNewStudent(data);
    info.name = "";
    info.live = "";
    
  }
  return (
    <div className='container'>
        <form onSubmit={showLog} >
            <input type="text" name="name" id="" placeholder='name' value={info.name} onChange={trackName}/>
            <input type="text" name="live" id="" placeholder='live' value={info.live} onChange={trackLive}/>
            <button type="submit">Add New student</button>
        </form>
    </div>
  )
}

export default Form
import React, { useState } from 'react'

const FormBox = (props) => {
  const [name,setName]  = useState("");
  const [email,setEmail] = useState("");
  const [live,setLive] = useState("");

  const getStuInfo = (event) =>{
    event.preventDefault();  
      if(
        name.trim().length === 0 ||
        email.trim().length === 0 ||
        live.trim().lenght === 0
      ){
        alert("please fill a valid value for all inputs")
        return;
      }
      const data = {
        name:name,
        email:email,
        live:live,
      }
      props.addNewStudent(data);
      
     setName("");
     setEmail("");
     setLive("");
  } 
  return (
    <div className='form-group'>
        <form action="" onSubmit={getStuInfo}>
            <label htmlFor="name" className='form-label'>Name</label>
            <input type="text" name="name" id=""  className='form-control' value={name} onChange={(e)=>setName(e.target.value)} />

            <label htmlFor="email"className='form-label'>Email</label>
            <input type="email" name="email" id="" className='form-control' value={email} onChange={(e)=>setEmail(e.target.value)} />

            <label htmlFor="live" className='form-label'>Live</label>
            <input type="text" name="live" id="" className='form-control' value={live} onChange={(e)=>setLive(e.target.value)} />

            <input type="submit" value="Add New Student" className='btn btn-primary' />
        </form>
    </div>
  )
}

export default FormBox
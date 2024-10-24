import React, { useRef } from 'react'

const FormBox = (props) => {
  // const [name,setName]  = useState("");
  // const [email,setEmail] = useState("");
  // const [live,setLive] = useState("");
  const nameInputRef = useRef();
  const liveInputRef = useRef();
  const emailInputRef = useRef();


  const getStuInfo = (event) =>{
    event.preventDefault();  
    
      if(
        nameInputRef.current.value.trim().length === 0 ||
        emailInputRef.current.value.trim().length === 0 ||
        liveInputRef.current.value.trim().lenght === 0
      ){
        alert("please fill a valid value for all inputs")
        return;
      }
      const data = {
        name:nameInputRef.current.value,
        email:emailInputRef.current.value,
        live:liveInputRef.current.value,
      }
      props.addNewStudent(data);
      
      nameInputRef.current.value = "";
      liveInputRef.current.value = "";
      emailInputRef.current.value = "";

   
  } 
  return (
    <div className='form-group'>
        <form action="" onSubmit={getStuInfo}>
            <label htmlFor="name" className='form-label'>Name</label>
            <input type="text" name="name" id=""  className='form-control' ref={nameInputRef}  />

            <label htmlFor="email"className='form-label'>Email</label>
            <input type="email" name="email" id="" className='form-control' ref={emailInputRef} />

            <label htmlFor="live" className='form-label'>Live</label>
            <input type="text" name="live" id="" className='form-control'  ref={liveInputRef} />

            <input type="submit" value="Add New Student" className='btn btn-primary' />
        </form>
    </div>
  )
}

export default FormBox
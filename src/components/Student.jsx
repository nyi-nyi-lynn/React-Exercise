import React from 'react'
import { useState } from 'react';

function Student(props) {

    let live = props.live;
    const showAlert = ()=>{
        alert('I am onclick event listener');
    }

    const [name,setName] = useState(props.name);
    
    const changeName = ()=>{
        setName("Name updated");
    }
  return (
    <ul>
        <li>name: {name}</li>
        <li>live : {live}</li>
        <button onClick={showAlert}>alert</button>
        <button onClick={changeName}>ChangeName</button>
    </ul>
  )
}

export default Student
import React, { useState } from 'react'
import "./Assignment.css"
import Formbox  from './components/Assignment/FormBox'
import CardBox from './components/Assignment/CardBox';
import List from './components/Assignment/List';

const Assignment = () => {
    const [students,setStudents] = useState([]);

    const addNewStudent= (student)=>{
       setStudents([
        ...students,student,
       ])  
    }
  return (
    <div className='container'>
       <CardBox>
         <Formbox addNewStudent={addNewStudent}/>
       </CardBox>
            <List students={students}/>
    </div>
  )
}

export default Assignment
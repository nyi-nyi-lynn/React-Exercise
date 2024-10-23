import "./App.css";

import Student from "./components/One/Student";
import Form from "./components/One/Form";
import { useState } from "react";

function App() {
  const [students,setStudent] = useState([ ]);

  const addNewStudent = (stuInfo) =>{
    console.log(stuInfo);
    setStudent([
      ...students,stuInfo
    ])
  }

  return (
    <div className="App">

      <section>
        {students.length > 0 ? students.map((student)=>(
          <Student name={student.name}  live={student.live} key={student.name} />
        )) : "No Student yet!"} 
      </section>
      <Form addNewStudent={addNewStudent}/>

    </div>
  );
}

export default App;

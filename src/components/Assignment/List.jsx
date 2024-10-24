import React from 'react'
import CardBox from './CardBox'

const List = (props) => {
  return (
    <>
      {props.students.length > 0 ? (
        <>
            {props.students.map((student) => (
                 <CardBox key={student.email}>
                    <div className="list-group">
                        <p>Name : {student.name}</p>
                        <p>Email : {student.email}</p>
                        <p>Live : {student.live}</p>
                    </div>
                 </CardBox>
            ))}
        </>
      ) : (
            <CardBox>
                <p>
               !!! There is no Student yet.Please add new student.
            </p>
            </CardBox>
      )
    
    }
    </>
  )
}

export default List
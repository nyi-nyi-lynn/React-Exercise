import React from 'react'
function Student(props) {

  return (
    <div className="container">
      <ul>
        <li>
          <div>
            <p>{props.name}</p>
            <p>{props.live}</p>
          </div>
        </li>
    </ul>
    </div>
  )
}
export default Student
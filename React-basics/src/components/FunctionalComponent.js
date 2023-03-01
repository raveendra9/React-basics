import React, { useState } from 'react'

function FunctionalComponent(props) {
   const[x,setX] = useState(0);

   const changeValue = () => {
    setX(x+1);
   }
   
  return (
    <div>
      <h1>Hi {props.name} Raveendra</h1>
      <h1>Count: {x}</h1>
      <button onClick={changeValue}>Increment</button>
    </div>
  )
}
export default FunctionalComponent
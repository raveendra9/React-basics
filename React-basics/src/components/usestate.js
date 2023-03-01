import React,{useState}from 'react'

const UsestatePractice = () => {
    const [data,setData] = useState('React course')

    function changeMessage() {
        setData('welcome to react js course')
    }
  return (
    <div>
       <h1>{data}</h1>
        <button onClick = {() =>changeMessage()}>Enroll</button>
    </div>
  )
}

export default UsestatePractice
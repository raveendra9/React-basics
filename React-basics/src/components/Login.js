import React,{useState} from 'react'

const Login = () => {
    const [data,setData]=useState('')
    const[result,setResult]=useState('')
    function handleUsername(e){
     setData(e.target.value)
    }
    function handlePassword(e){
      setResult(e.target.value)
    }
    const submitHandler =e =>{
      e.preventDefault()
      alert(`${data},${result}`)
    }
  return (
    <div>
      <form onSubmit={submitHandler}>
        <label>username</label>
        <input onChange={(e) => handleUsername(e)} type = "text" name="username" /><br />
        <label>password</label>
        <input onChange={(e) =>handlePassword(e)} type = "password" name="password" /><br />
        <input type = "submit" name="submit" />
      </form>
      <h1>{data}</h1>
      <h1>{result}</h1>
    </div>
  )
}

export default Login

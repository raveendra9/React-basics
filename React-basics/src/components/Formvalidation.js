import React,{ useState } from 'react'

const Formvalidation = () => {
    const[values,setValues]=useState({
        username:'',
        password:'',
        Fullname:'',
        gender:''
    });
    const[errors,setErrors]=useState({});

    function handleUsername(e){
      setValues(e.target.value)
    }

    function handlePassword(e){
      setValues(e.target.value)
    }
    function handleFullName(e){
      setValues(e.target.value)
    }
    function handleGender(e){
      setValues(e.target.value)
    }

    const submitHandler =e =>{
        e.preventDefault()
        setErrors(Validation(values));
    }

    function Validation(values) {
        let errors={};

        if(!values.Username){
            errors.Username='Username is required';
        }

        if(!values.password){
            errors.password='password is required';
        }
        if(!values.Fullname){
            errors.Fullname='Fullname is required';
        }
    }

  return (
    <div>
      <h2>Create Account</h2>
    <form onSubmit={submitHandler}>
        <div>
            <div>
            <label>username</label>
            <input type='text' placeholder='enter username' name='username' value={values.username} onChange={handleUsername}/>
            {/* {errors.username && <p>{errors.username}</p>} */}
            </div>
            <div>
            <label>password</label>
            <input type='text' placeholder='enter password' name='password' value={values.password} onChange={handlePassword} />
            </div>
            <div>
            <label>Fullname</label>
            <input type='text'placeholder='enter fullname' name='Fullname' value={values.Fullname} onChange={handleFullName} />
            </div>
            <input type="radio" value="MALE" name="gender" onChange={handleGender} /> Male
            <input type="radio" value="FEMALE" name="gender" onChange={handleGender} /> Female
        </div>
        <button type='submit'>Sign Up</button>
    </form>
    </div>
  )
}
export default Formvalidation;
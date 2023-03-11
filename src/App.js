// import logo from './logo.svg';
import {useEffect, useState} from 'react'
import './App.css';

function App() {
  const initial = {email:"",password:"",confirm:""}
  const [formValue, setFormValue] = useState(initial)
  const [formError , setFormError] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)
  const handleInput = (e) =>{
  const  {name , value} = e.target;
     setFormValue({...formValue, [name] : value})
    //  console.log(formValue)
  }
  const submitForm = (e) =>{
    e.preventDefault()
    setFormError(formValid(formValue))
    setIsSubmit(true)
  }
  useEffect(() =>{
    console.log(formError)
    if(Object.keys(formError).length === 0 && isSubmit ? alert("login successfully"): alert("form cannot be submitted") ){
      console.log(formValue)

    }
  }, [formError])
  const formValid = (value) =>{
     const error = {};
     const regEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
     if(!value.email){
      error.email = "Email is required"
     }else if (!regEx.test(value.email)){
      error.email = "email pattern is wrong"
     }
     if(!value.password){
      error.password = "password is required"
     }
     else if(value.password.length < 8){
      error.password = "password must have atleat 8 characters"
     }
     if(!value.confirm){
      error.confirm = "password is required"
     }else if(value.confirm != value.password){
      error.confirm = "password does not match"
     }
     return error
  }
  return(
    <div className="form-div">
 <form action="" className="ui" onSubmit={submitForm}>
  <div className=" ui input">
<label htmlFor="email">Email:</label>
<input type="text" name="email" autoComplete="off" value={formValue.email} onChange={handleInput} />
<p className='error'>{formError.email}</p>
</div>
  <div className="ui input">
<label htmlFor="password">password:</label>
<input type="password" name="password" value={formValue.password} onChange={handleInput}/>
<p className='error'>{formError.password}</p>
</div>
  <div className="ui input">
<label htmlFor="confirm">confirm Password:</label>
<input type="password" name="confirm" value={formValue.confirm} onChange={handleInput}/>
<p className='error'>{formError.confirm}</p>
</div>
<div>
  <button>Submit</button>
</div>
 </form>
 </div>
  )
}

export default App;

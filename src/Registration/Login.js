import './register.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function RegisterComponent() {
   const navigator= useNavigate()
    const [input1, setInput1] = useState('')
    const [input2, setInput2] = useState('')

  // handle submit
  const handleSubmit = (event) => {
    event.preventDefault();
    window.alert(`Hey my name is ${input1} and my password is ${input2}`);
  }

  const  handleChange = () => {
    let input11=document.getElementById('form2Example1')
      let input22=document.getElementById('form2Example2')
      
    let value1 = input11.value
    let value2 = input22.value
    
    //tracking the values (name as key, and value as val to a object)
    //making values an object with destructuring ...values
    setInput1(value1)
    setInput2(value2)
  }
  
  
  return (
    <form >
 
  <div className="form-outline mb-4">
    <input type="email" id="form2Example1" onChange={handleChange} className="form-control" />
    <label className="form-label" for="form2Example1">Email address</label>
  </div>

  
  <div className="form-outline mb-4">
    <input type="password" onChange={handleChange} id="form2Example2" className="form-control" />
    <label className="form-label" for="form2Example2">Password</label>
  </div>

  
  <div className="row mb-4">
    <div className="col d-flex justify-content-center">
      
      <div className="form-check">
        <input className="form-check-input"  type="checkbox" value="" id="form2Example31"  />
        <label className="form-check-label" for="form2Example31"> Remember me </label>
      </div>
    </div>

    <div className="col">
     
      <a href="#!">Forgot password?</a>
    </div>
  </div>

  <button type="button" className="btn btn-primary btn-block mb-4" onClick={handleSubmit}>Sign in</button>

 
  <div className="text-center">
    <p>Not a member? <a href="#!" class="btn btn-info" onClick={()=>{navigator('/register')}}>Register</a></p>
    <p>or sign up with:</p>
    <button type="button" className="btn btn-link btn-floating mx-1">
      <i className="fab fa-facebook-f"></i>
    </button>

    <button type="button" className="btn btn-link btn-floating mx-1">
      <i className="fab fa-google"></i>
    </button>

    <button  type="button" className="btn btn-link btn-floating mx-1">
      <i className="fab fa-twitter"></i>
    </button>

    <button type="button" className="btn btn-link btn-floating mx-1">
      <i className="fab fa-github"></i>
    </button>
  </div>
</form>
  )
}
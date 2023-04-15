import React, { useState } from 'react';
import "./App.css";


const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
   const [errors, setErrors] = useState('');
   const [success, setSuccess] = useState('');



  const handleSubmit = (event) => {
    event.preventDefault();
    if(name !== '' && email !=='' && password !== '' && confirmPassword !== ''){
      if(password == confirmPassword){
        setSuccess('Successfully Signed Up')
      setErrors('')
      setName('')
      setEmail('')
      setPassword('')
      setConfirmPassword('')
      }
      else{
        setSuccess('')
      setErrors('Password Should be same')
      
      }
    }
    else{
      setSuccess('')
      setErrors('Error : All fields are mandatory')
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Signup</h1>

      <div>
        <input
          type="text" placeholder='Full Name'
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div>
        <input
          type="email" placeholder='Email'
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>

      <div>
        <input
          type="password" placeholder='Password'
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <div>
        <input
          type="password" placeholder='Confirm Password'
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
        />
      </div>
      {errors !== "" && <div className='errormsg'>{errors}
        </div>}
        {success !== "" && <div className='sucessname'>{success}
        </div>}
      <button type="submit">Signup</button>
    </form>
  );
};

export default SignupForm;

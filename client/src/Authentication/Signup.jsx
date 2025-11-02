import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { signup } from '../APIs/authCalls.js'

function Signup() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [cpassword, setCpassword] = useState('')
  
  function handleSignin(){
    const values = signup(values)
    console.log(values)
  }

  return (
    <>
        <section className='auth-signin-container'>
            <h1>Sign Up</h1>
            <br /><br />
            <form action="/signin" onSubmit={handleSignin}>
                <label htmlFor='name'>Name<span style={{color: name.length > 0 ? 'grey' : 'red'}}>*</span></label><br />
                <input type="text" name="name" id="name" autoComplete='true' required value={name} onChange={(e) => setName(e.target.value)}/>
                <br /><br /><br />
                <label htmlFor='email'>Email <span style={{color: email.length > 0 ? 'grey' : 'red'}}>*</span></label><br />
                <input type="text" name="email" id="email" autoComplete='true' required value={email} onChange={(e) => setEmail(e.target.value)}/>
                <br /><br /><br />
                <label htmlFor='password'>Password <span style={{color: password.length > 0 ? 'grey' : 'red'}}>*</span></label><br />
                <input type="password" name="password" id="password" autoComplete='true' required value={password} onChange={(e) => setPassword(e.target.value)}/>
                <br /><br /><br />
                <label htmlFor='cpassword'>Confirm Password <span style={{color: cpassword.length > 0 ? 'grey' : 'red'}}>*</span></label><br />
                <input type="password" name="cpassword" id="cpassword" autoComplete='true' required value={cpassword} onChange={(e) => setCpassword(e.target.value)}/>
                <br /><br />
                <p>Have an account?<Link to='/signin'> Sign In</Link></p>
                <div className='reusable-size-div row'>
                    <button className='signin-button auth-btn' type="submit">Create Account</button>
                </div>
            </form>
        </section>
    </>
  )
}

export default Signup
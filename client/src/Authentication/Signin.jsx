import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import './Auth.css'
import { signin } from '../APIs/authCalls'

function Signin() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSignin = (e) => {
    e.preventDefault()
    const values = {
      'email' : email,
      'password' : password
    }
    const response = signin(values)
    console.log(response)
  }
  

  return (
    <>
        <section className='auth-signin-container'>
            <h1>Sign In</h1>
            <br /><br />
            <form action="/signin" method='POST' onSubmit={handleSignin}>
                <label htmlFor='email'>Email <span style={{color: email.length > 0 ? 'grey' : 'red'}}>*</span></label><br />
                <input type="text" name="email" id="email" autoComplete='true' required value={email} onChange={(e) => setEmail(e.target.value)}/>
                <br /><br /><br />
                <label htmlFor='password'>Password <span style={{color: password.length > 0 ? 'grey' : 'red'}}>*</span></label><br />
                <input type="password" name="password" id="password" autoComplete='true' required value={password} onChange={(e) => setPassword(e.target.value)}/>
                <br /><br />
                <p><Link to='/forgotpassword'>Fogot Password?</Link></p>
                <p>New User?<Link to='/signup'> Sign Up</Link></p>
                <div className='reusable-size-div row'>
                    <button className='signin-button auth-btn' type="submit">Let's Go</button>
                </div>
            </form>
        </section>
    </>
  )
}

export default Signin
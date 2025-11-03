import React, { useState } from 'react'
import { signinapi } from '../APIs/authCalls'
import {Link} from 'react-router-dom'
import './Auth.css'

function Signin() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
  
    const handleSignin = async(e) =>{
      e.preventDefault()
      const values = {
        'email':email,
        'password':password
      }
      const response = await signinapi(values)
      console.log(response)
    }

  return (
    <>
      <section className='div landing-main-container row'>
            <div className='sub-landing-container'>
                <div className='landing-nav div row-sb'>
                    <h3>Ticketo.</h3>
                </div>

                <div className='landing-auth-container div row'>
                    <div className='auth-form-container column'>
                      <div className='div'><h1>Sign In</h1></div>
                      <br /><br />
                      <form onSubmit={handleSignin}>
                        <label htmlFor="email">Email <span className='required' style={{color:email.length > 0 ? "grey" : "red"}}>*</span></label><br />
                        <input type="email" name="email" id="email"  required autoComplete='false' value={email} onChange={(e) => setEmail(e.target.value)}/><br /><br /><br />

                        <label htmlFor="password">Password <span className='required' style={{color:password.length > 8 ? "grey" : "red"}}>*</span></label><br />
                        <input type="password" name="password" id="password" required autoComplete='false' value={password} onChange={(e) => setPassword(e.target.value)}/><br /><br /><br />

                        <Link to='/forgotpassword'>Forgot Password</Link><br /><br />
                        <span className='inline-para'>Don't have an account?</span><Link to='/signup'> Sign Up</Link><br /><br /><br />
                        
                        <div className='div row'><button type='submit'>Let's Go</button></div>
                      </form>
                    </div>
                </div>
                <div className='landing-footer-container div'>
                    <span className='grey-text' to='/terms'>© Srikanth.inc | 2025</span>
                    <Link to='/terms'>Terms</Link>
                    <Link to='/privacy'>Privacy</Link>
                    <Link to='/faqs'>FAQ's</Link>
                </div>  
            </div>
        </section>
    </>
  )
}

export default Signin
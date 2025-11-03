import React, { useState } from 'react'
import { signupapi } from '../APIs/authCalls'
import {Link} from 'react-router-dom'

function Signup() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [cpassword, setCPassword] = useState('')

  const handleSignup = async(e) =>{
    e.preventDefault()
    const values = {
      'name':name,
      'email':email,
      'password':password
    }
    const response = await signupapi(values)
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
                      <div className='div'><h1>Sign Up</h1></div>
                      <br /><br />
                      <form onSubmit={handleSignup}>
                        <label htmlFor="name">Name <span className='required' style={{color:name.length > 0 ? "grey" : "red"}}>*</span></label><br />
                        <input type="text" name="name" id="name"  required autoComplete='false' value={name} onChange={(e) => setName(e.target.value)}/><br /><br /><br />

                        <label htmlFor="email">Email <span className='required' style={{color:email.length > 0 ? "grey" : "red"}}>*</span></label><br />
                        <input type="email" name="email" id="email"  required autoComplete='false' value={email} onChange={(e) => setEmail(e.target.value)}/><br /><br /><br />

                        <label htmlFor="password">Password <span className='required' style={{color:password.length > 8 ? "grey" : "red"}}>*</span></label><br />
                        <input type="password" name="password" id="password" required autoComplete='false' value={password} onChange={(e) => setPassword(e.target.value)}/><br /><br /><br />

                        <label htmlFor="cpassword">Confirm Password <span className='required' style={{color:cpassword.length > 8 ? "grey" : "red"}}>*</span></label><br />
                        <input type="password" name="cpassword" id="cpassword"  required autoComplete='false' value={cpassword} onChange={(e) => setCPassword(e.target.value)}/><br /><br /><br />
                        
                        <span className='inline-para'>Have an account?</span><Link to='/signin'> Sign In</Link><br /><br /><br /><br />
                        
                        <div className='div row'><button type='submit'>Create Account</button></div>
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
    // <div><input type="checkbox" name="checkbox" id="checkbox" />
    // <label htmlFor="checkbox"> I accept the Privacy Policy and <br />the Terms of Service</label><br /><br /></div>
  )
}

export default Signup
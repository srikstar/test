import React from 'react'
import {Link, Route, Routes} from 'react-router-dom'
import Signin from './Signin'
import Signup from './Signup'
import './Auth.css'

function Auth() {

  return (
    <>
        <section className='auth-main-container row'>
            <div className="auth-page-one row">
                <div className='auth-page-main'>
                    <div><h3>Ticketo.</h3></div>
                    <div className='auth-main-forms-container'>
                        <Routes>
                            <Route path="/signup" element={<Signup />} />
                            <Route path="/signin" element={<Signin />} />
                            <Route path="/" element={<Signin />} />
                        </Routes>
                    </div>
                    <div className='auth-page-footer row-sb'>
                        <div className='auth-page-social-icons row-sb'>
                            <Link to='/terms'>Terms</Link>
                            <Link to='/Privacy'>Privacy</Link>
                        </div>
                        <div className='auth-page-social-icons row-sb'>
                            <Link to='/Privacy'>Twitter</Link>
                            <Link to='/Privacy'>Instagram</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="auth-page-two row">
                <img className='auth-page-image' src="/auth.jpg" alt="auth-page-image" />
            </div>
        </section>
    </>
  )
}

export default Auth
import React from 'react'
import { Route, Routes, Link} from 'react-router-dom'

function Landing() {
  return (
    <>
        <section className='div landing-main-container row'>
            <div className='sub-landing-container'>
                <div className='landing-nav div row-sb'>
                    <h3>Ticketo.</h3>
                    <div className='landing-sign-container'>
                        <Link to='/signin'>Signin</Link>
                        <Link to='/signup'>Signup</Link>
                    </div>
                </div>

                <div className='landing-tagline-container div column'>
                    <h1>The <span className='italic'>beginning</span> of something <br /> <span className='bold'>amazing!</span></h1>
                    <p><span className='para-bold'>Ticketo. </span>offers showtimes, movie tickets, reviews, trailers, concert tickets and events near you</p>
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

export default Landing
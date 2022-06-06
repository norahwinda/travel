import React from 'react'
import { Button } from './Button'
import './Footer.css'
import {Link} from 'react-router-dom'

function Footer() {
  return (
    <div className='footer-container'>
        <section className='footer-subscription'>
            <p className='footer-subscription-heading'>
              Join the adventure news letter to receive our best vacation details
            </p>
            <p className='footer-subscription-text'>
              You can unsubscribe at any time
            </p>
            <div className='input-aress'>
                 <form>
                     <input type="email" name = "email" placeholder = "Your Email" className = "footer-input"/>
                     <Button buttonStyle='btn--outline'>Subscribe</Button>
                 </form>
            </div>
        </section>
      <div className='footer-links'>
         <div className='footer-link-wrapper'>
            <div className='footer-link-items'>
                <h2>About Us</h2>
                <Link to='/sign-up'>How it works</Link>
                <Link to = '/'>Testimonials</Link>
                <Link to = '/'>Careers</Link>
                <Link to = '/'>Investors</Link>
                <Link to = '/'>Terms of services</Link>
            </div>
            <div className='footer-link-items'>
                <h2>About Us</h2>
                <Link to='/'>Contact us</Link>
                <Link to = '/'>Contacts</Link>
                <Link to = '/'>Support</Link>
                <Link to = '/'>Destinations</Link>
                <Link to = '/'>Sponsorship</Link>
            </div>
         </div>
         <div className='footer-link-wrapper'>
            <div className='footer-link-items'>
                <h2>Videos</h2>
                <Link to='/'>Submit videos</Link>
                <Link to = '/'>Ambassadors</Link>
                <Link to = '/'>Agency</Link>
                <Link to = '/'>Influencers</Link>
            </div>
            <div className='footer-link-items'>
                <h2>Social media</h2>
                <Link to='/'>Instagram</Link>
                <Link to = '/'>Facebook</Link>
                <Link to = '/'>Youtube</Link>
                <Link to = '/'>Twitter</Link>
            </div>
         </div>
      </div>
      <section className='social-media'>
          <div className='social-media-wrap'>
              <div className='footer-logo'>
                  <Link className='social-logo' to ='/'>
                      TRVL <i className='fab fa-typo3'></i>
                  </Link>
              </div>
              <small className="website-rights">TRVL 0 2022</small>
              <div className='social-icons'>
                  <Link className='social-icon-link facebook' to="/" target="_blank"
                  aria-label = "facebook">
                      <i className="fab fa-facebook-f"></i>
                  </Link>
                  <Link className='social-icon-link instagram' to="/" target="_blank"
                  aria-label = "Instagram">
                      <i className="fab fa-instagram"></i>
                  </Link>
                  <Link className='social-icon-link youtube' to="/" target="_blank"
                  aria-label = "youtube">
                      <i className="fab fa-youtube"></i>
                  </Link>
                  <Link className='social-icon-link twitter' to="/" target="_blank"
                  aria-label = "Twitter">
                      <i className="fab fa-twitter"></i>
                  </Link>
                  <Link className='social-icon-link linkedin' to="/" target="_blank"
                  aria-label = "LinkedIn">
                      <i className="fab fa-linkedin"></i>
                  </Link>
              </div>
          </div>
      </section>
    </div>
  )
}

export default Footer

import React from 'react'
import './CSS/Contact.css'


const Contact = () => {
  return (
    
    <div className="contact-container">
            <h1>Contact Us</h1>
            <div className="contact-info">
                <div className="contact-item">
                    <p><strong>Address:</strong> Plot L/333 Extension G.R.A Agu-Awka, Anambra state</p>
                </div>
                <div className="contact-item">
                <p><strong>Phone:</strong> <a href="tel:+2348101156717">+2348101156717</a></p>
                </div>
                <div className="contact-item">
                <p><strong>Email:</strong> <a href="mailto:nakweozioma@gmail.com">nakweozioma@gmail.com</a></p>
                </div>
            </div>
            <div className="social-media">
                <h2>Follow Us</h2>
                <p>Stay connected with us on social media:</p>
                <ul>
                <li><a href="https://www.facebook.com/nakwe.ozioma" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                    <li><a href="https://twitter.com/oziomaleen" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                    <li><a href="https://www.instagram.com/oziomaleen" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                </ul>
            </div>
        </div>
  )
}

export default Contact
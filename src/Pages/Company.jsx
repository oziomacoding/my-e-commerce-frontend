import React from 'react'
import './CSS/Company.css'


const Company = () => {
  return (
    <div className="company">
        
            <header>
                <h1>Welcome to AU Stores</h1>
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </nav>
            </header>
            <main>
                <section className="company-info">
                    <h2>About AU Stores</h2>
                    <p>At AU Stores, we're more than just an e-commerce platform; we're a community-driven marketplace dedicated to providing customers with an unparalleled shopping experience. Established with a vision to redefine online shopping, AU Stores strives to offer a vast array of products while fostering a sense of belonging and trust among our customers.</p>
                    
                </section>
                <section className="mission-vision">
                    <h2>Our Mission & Vision</h2>
                    <p>Our mission is to provide high-quality products to our customers while maintaining excellent customer service.</p>
                    <p>Our vision is to become a leading e-commerce platform known for reliability and customer satisfaction.</p>
                </section>
                <section className="team">
                    <h2>Our Team</h2>
                    <p>Meet the dedicated team behind AU Stores:</p>
                    <ul>
                        <li>Nakwe Ozioma - CEO</li>
                        <li>Umejiaku Chinememma - Marketing Manager</li>
                        <li>Umejiaku Chinecherem - Head of Operations</li>
                    </ul>
                </section>
            </main>
            
    </div>
  )
}

export default Company
import React from 'react'
import './CSS/AboutUs.css'


const AboutUs = () => {
  return (
    <div className="about-us-container">
            <div className="about-us-header">
                <h1>About Us</h1>
                <p>Welcome to AU Stores, your premier online destination for a wide range of high-quality products.</p>
            </div>
            <div className="about-us-content">
                <h2>Our Story</h2>
                <p>Established in 2022, AU Stores has quickly grown to become a trusted name in the e-commerce industry. Our journey began with a simple vision: to provide customers with convenient access to top-quality products at competitive prices.</p>
                <p>Over the years, we have expanded our product offerings and enhanced our services to better serve our growing customer base. Today, AU Stores offers a diverse range of products, including men's wear, children's wear, women's wear and much more.</p>
            </div>
            <div className="about-us-values">
                <h2>Our Values</h2>
                <ul>
                    <li>Customer Satisfaction: Our customers are at the heart of everything we do. We strive to exceed their expectations by providing exceptional products and excellent customer service.</li>
                    <li>Quality: We are committed to offering only the highest quality products sourced from reputable suppliers and manufacturers.</li>
                    <li>Integrity: We conduct business with honesty, transparency, and integrity, earning the trust and respect of our customers, partners, and employees.</li>
                    <li>Innovation: We embrace innovation and continuous improvement, constantly seeking new ways to enhance the shopping experience for our customers.</li>
                </ul>
            </div>
            <div className="about-us-footer">
                <p>Thank you for choosing AU Stores. We look forward to serving you and providing you with an exceptional shopping experience.</p>
            </div>
        </div>
  )
}

export default AboutUs
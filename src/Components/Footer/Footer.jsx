import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logoAU.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-logo">
                <img src={footer_logo} alt="" />
                <p>AU STORES</p>
            </div>
            <ul className="footer-links">
                <li><a href="/company">Company</a></li>
                <li><a href="/offices">Offices</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
            <div className="footer-social-icon" >
                <div className="footer-icons-container">
                    <a href="https://instagram.com/oziomaleen" >
                        <img src={instagram_icon} alt="" />
                    </a>

                </div>

                <div className="footer-icons-container">
                    <a href="https://pinterest.com/oziomaleen" >
                        <img src={pintester_icon} alt="" />
                    </a>

                </div>
                <div className="footer-icons-container">
                    <a href="https://wa.me/+2348101156717" >
                        <img src={whatsapp_icon} alt="" />
                    </a>

                </div>


            </div>
            <div className="footer-copyright">
                <hr />
                <p>Copyright @ 2024 - All Rights Reserved</p>

            </div>
        </div>
    )
}

export default Footer
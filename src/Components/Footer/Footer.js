import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPinterestP, FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="ft_logo">
                    <a href="#">
                        <img src={require('../../Assets/Images/Ak_logo_w.png')} />
                    </a>
                </div>
                <div className="ft_txt">
                    <p>© 2023 AK Portfolio Website</p>
                </div>
                <div className="social_media">
                    <ul>
                        <li>
                            <a href="#">
                                <FaFacebookF />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <FaInstagram />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <FaLinkedinIn />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <FaPinterestP />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <FaTelegramPlane />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Footer;
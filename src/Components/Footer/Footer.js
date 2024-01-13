import React from "react";


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
                    <p>© 2024 AK Portfolio Website</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
import React, { useEffect } from "react";


    
const Header = () => {

      useEffect(() => {
            window.addEventListener('scroll', isSticky );
            return () => {
                  window.removeEventListener('scroll', isSticky);
            }
      })

      const isSticky = (e) => {
            const header = document.querySelector('.header');
            const scrollTop = window.scrollY;
            scrollTop >= 150 ? header.classList.add('is-sticky') : header.classList.remove('is-sticky');
      }

      return (
            <div className="header" >
                  <div className="container">
                        <div className="flex">
                              <div className="logo">
                                    <a href="#">
                                          <img src={require('../../Assets/Images/Ak_logo.png')} />
                                    </a>
                              </div>
                              <div className="menus">
                                    <div className="menu_list">
                                          <ul>
                                                <li>
                                                      <a href="#">Home</a>
                                                </li>
                                                <li>
                                                      <a href="#about">About</a>
                                                </li>
                                                <li>
                                                      <a href="#skills">Skills</a>
                                                </li>
                                                <li>
                                                      <a href="#works">Work</a>
                                                </li>
                                                 <li>
                                                      <a href="#contact">Contact</a>
                                                </li>
                                          </ul>
                                    </div>
                                    <div className="download_cv">
                                          <ul>
                                                <li>
                                                      <a href="https://drive.google.com/file/d/1-uo_G4i3lb6kiC1j-9RE8NoN2PYFX1oU/view?usp=sharing" target="_blank" type="application/octet-stream" download="Ajith_Resume.pdf">Download CV</a>
                                                </li>
                                          </ul>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
}

export default Header;
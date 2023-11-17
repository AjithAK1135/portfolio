import React, { useEffect } from "react";
import Logo from '../../Assets/Images/Ak_logo.png';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPinterestP, FaTelegramPlane } from "react-icons/fa";

    
export function Header() {

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
                                          <img src={Logo} alt="" />
                                    </a>
                              </div>
                              <div className="menus">
                                    <div className="menu_list">
                                          <ul>
                                                <li className="active">
                                                      <a href="#">Home</a>
                                                </li>
                                                <li>
                                                      <a href="#">About</a>
                                                </li>
                                                <li>
                                                      <a href="#">Portfolio</a>
                                                </li>
                                                <li>
                                                      <a href="#">Work</a>
                                                </li>
                                                <li>
                                                      <a href="#">Blog</a>
                                                </li> <li>
                                                      <a href="#">Contact</a>
                                                </li>
                                          </ul>
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
                  </div>
            </div>
      );
}
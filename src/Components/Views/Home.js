import React from "react";
import Avater from '../../Assets/Images/avatar.png';
import PS from '../../Assets/Images/ps.png';
import AI from '../../Assets/Images/ai.png';
import Figma from '../../Assets/Images/figma.png';
import Chrome from '../../Assets/Images/physics.png';
import VS from '../../Assets/Images/vs.png';


export class Home extends React.Component {
      constructor() {
            super();
      }

      render() {

            return (
                  <div className="home_page">
                        <section className="banners">
                              <div className="container">
                                    <div className="flex">
                                          <div className="ban_content">
                                                <h3>Hello, I'm</h3>
                                                <h1>John</h1>
                                                <p>A <span>UI Developer</span> From <span>India</span></p>
                                                <p>I'm UI developer based in India, and I'm very passionate and dedicated to my work.</p>
                                                <a className="abt_btn" href="#">About Me</a>
                                          </div>
                                          <div className="ban_img">
                                                <img src={Avater} alt="ban_img" />
                                                <div className="ban_icons">
                                                      <span className="ban_icon">
                                                            <img src={Figma} alt="ps" />
                                                      </span>
                                                      <span className="ban_icon">
                                                            <img src={AI} alt="ai" />
                                                      </span>
                                                      <span className="ban_icon">
                                                            <img src={PS} alt="figma" />
                                                      </span>
                                                      <span className="ban_icon">
                                                            <img src={Chrome} alt="chrome" />
                                                      </span>
                                                      <span className="ban_icon">
                                                            <img src={VS} alt="vs" />
                                                      </span>
                                                </div>
                                          </div>
                                    </div>
                                    <div className="scroll_down">
                                          <a href="#about">
                                                <div className="chevron"></div>
                                                <div className="chevron"></div>
                                                <div className="chevron"></div>
                                                <span className="text">Scroll down</span>
                                          </a>
                                    </div>
                              </div>
                        </section>
                  </div>
            );
      }
}
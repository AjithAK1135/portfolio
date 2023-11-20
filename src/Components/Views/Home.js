import React from "react";


const Home = () => {


      return (
            <div className="home_page">
                  <section className="banners">
                        <div className="container">
                              <div className="flex">
                                    <div className="ban_content">
                                          <h3>Hello, I'm</h3>
                                          <h1>John</h1>
                                          <p>A <span>UI/UX Designer Developer</span> From <span>India</span></p>
                                          <p>I'm UI developer based in India, and I'm very passionate and dedicated to my work.</p>
                                          <a className="abt_btn" href="#">About Me</a>
                                    </div>
                                    <div className="ban_img">
                                          <img src={require('../../Assets/Images/avatar.png')} />
                                          <div className="ban_icons">
                                                <span className="ban_icon">
                                                      <img src={require('../../Assets/Images/figma.png')} />
                                                </span>
                                                <span className="ban_icon">
                                                      <img src={require('../../Assets/Images/ai.png')} />
                                                </span>
                                                <span className="ban_icon">
                                                      <img src={require('../../Assets/Images/ps.png')} />
                                                </span>
                                                <span className="ban_icon">
                                                      <img src={require('../../Assets/Images/chrome.png')} />
                                                </span>
                                                <span className="ban_icon">
                                                      <img src={require('../../Assets/Images/vs.png')} />
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
                  <section id="about">
                        <div className="container">
                              <div className="a_head">
                                    <h2>About</h2>
                              </div>
                              <div className="a_body">
                                    <div className="a_img">
                                          <img src={require('../../Assets/Images/about_img.png')} />
                                    </div>
                                    <div className="a_txt">
                                          <div className="blk">
                                                <h3>I'm <span>John</span>, UI/UX Designer and Developer</h3>
                                                <p>Experienced user interface designer with a demonstrated histroy of working in the information technology and services industry. Skilled in debuggin, User interface design, Responsive web design, Web interface design, and mobile design.
                                                </p>
                                          </div>
                                          <div className="blk">
                                                <h4>Skills and Abilities</h4>
                                                <ul>
                                                      <li>Strong Debugging Skills</li>
                                                      <li>Project Management</li>
                                                      <li>Good Communication and Interpersonal Skills</li>
                                                      <li>Fast learner</li>
                                                      <li>Team Player</li>
                                                      <li>Smart Working</li>
                                                      <li>Motivated and Dedicated</li>
                                                </ul>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </section>
                  <section id="contact">
                        <div className="container">
                              <div className="c_head">
                                    <h2>Contact</h2>
                              </div>
                              <div className="c_body">
                                    <div className="c_txt">
                                          <ul>
                                                <li>
                                                      <span>Email:</span>
                                                      <a href="mailto:ajithkumar1135@gmail.com">ajithkumar1135@gmail.com</a>
                                                </li>
                                                <li>
                                                      <span>Mobile Number:</span>
                                                      <a href="tel:8608831135">8608831135</a>
                                                </li>
                                          </ul>
                                    </div>
                                    <div className="c_img">
                                          <img src={require('../../Assets/Images/contact_img.png')} />
                                    </div>
                              </div>
                        </div>
                  </section>
            </div>
      );
}

export default Home;
import React from "react";


const Home = () => {


      return (
            <div className="home_page">
                  <section className="banners">
                        <div className="container">
                              <div className="flex">
                                    <div className="ban_content">
                                          <h3>Hello, I'm</h3>
                                          <h1>Ajithkumar</h1>
                                          <p>A <span>UI/UX Designer & Developer</span> From <span>India</span></p>
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
                                                      <img src={require('../../Assets/Images/structure.png')} />
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
                                    <h2>About Me</h2>
                              </div>
                              <div className="a_body">
                                    <div className="a_img">
                                          <img src={require('../../Assets/Images/about_img.png')} />
                                    </div>
                                    <div className="a_txt">
                                          <div className="blk">
                                                <h3>I'm <span>Ajithkumar</span>, UI/UX Designer and Developer</h3>
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
                  <section id="my_work">
                        <span className="top_bar"></span>
                        <span className="bot_bar"></span>
                        <div className="container">
                              <div className="m_head">
                                    <h2>My Work <span>Experience</span></h2>
                              </div>
                              <div className="m_body">
                                    <div className="bg"></div>
                                    <div className="box">
                                          <div className="txt">
                                                <div className="lft">
                                                      <span>1</span>
                                                </div>
                                                <div className="rft">
                                                      <span>Jab 2022 - Present</span>
                                                      <h3>UI Developer</h3>
                                                      <h4>Blaze Web services PVT LTD</h4>
                                                      <p>I design interactive static web templates with ReactJS, AngularJS, HTML, CSS, SCSS, Java script and jQuery. Have the ability to create mobile friendly web pages with and without Bootstrap. and also create mobile app ui design in Reactnative. I design website logos, websitebanners, socialmediabanners, card design and website design using photoshop.</p>
                                                </div>
                                          </div>
                                          <div className="img">
                                                <img src={require('../../Assets/Images/work_img.jpg')} />
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </section>
                  <section id="education">
                        <div className="container">
                              <div className="e_head">
                                    <h2>My Learning & Education</h2>
                              </div>
                              <div className="e_body">
                                    <div className="lft">
                                          <div className="box">
                                                <h4>Thiagarajar College Madurai</h4>
                                                <p>B.C.A-67.12%</p>
                                                <span>Graduated on 2017</span>
                                          </div>
                                          <div className="box">
                                                <h4>Mangayarkarasi Higher Secondary School</h4>
                                                <p>HSC -64.66%</p>
                                                <span>Graduated on 2014</span>
                                          </div>
                                          <div className="box">
                                                <h4>Mangayarkarasi Higher Secondary School</h4>
                                                <p>SSLC-77.4%</p>
                                                <span>Graduated on 2012</span>
                                          </div>
                                    </div>
                                    <div className="rft">
                                          <img src={require('../../Assets/Images/education_img.png')} />
                                    </div>
                              </div>
                        </div>
                  </section>
                  <section id="skills">
                        <div className="container">
                              <div className="s_head">
                                    <h2>My Skill & Advantage</h2>
                              </div>
                              <div className="s_body">
                                    <div className="box">
                                          <div className="img">
                                                <img src={require('../../Assets/Images/skills/html-5.png')} />
                                          </div>
                                          <div className="txt">
                                                <h4>HTML5</h4>
                                          </div>
                                          <div className="bar">
                                                <div className="bg_accent" style={{width:"86%"}}>
                                                      <span>86%</span>
                                                </div>
                                          </div>
                                    </div>
                                    <div className="box">
                                          <div className="img">
                                                <img src={require('../../Assets/Images/skills/css-3.png')} />
                                          </div>
                                          <div className="txt">
                                                <h4>CSS3</h4>
                                          </div>
                                          <div className="bar">
                                                <div className="bg_accent" style={{width:"90%"}}>
                                                      <span>90%</span>
                                                </div>
                                          </div>
                                    </div>
                                    <div className="box">
                                          <div className="img">
                                                <img src={require('../../Assets/Images/skills/sass.png')} />
                                          </div>
                                          <div className="txt">
                                                <h4>SCSS</h4>
                                          </div>
                                          <div className="bar">
                                                <div className="bg_accent" style={{width:"70%"}}>
                                                      <span>70%</span>
                                                </div>
                                          </div>
                                    </div>
                                    <div className="box">
                                          <div className="img">
                                                <img src={require('../../Assets/Images/skills/js.png')} />
                                          </div>
                                          <div className="txt">
                                                <h4>JavaScript / jQuery</h4>
                                          </div>
                                          <div className="bar">
                                                <div className="bg_accent" style={{width:"78%"}}>
                                                      <span>78%</span>
                                                </div>
                                          </div>
                                    </div>
                                    <div className="box">
                                          <div className="img">
                                                <img src={require('../../Assets/Images/skills/bootstrap.png')} />
                                          </div>
                                          <div className="txt">
                                                <h4>Bootstrap</h4>
                                          </div>
                                          <div className="bar">
                                                <div className="bg_accent" style={{width:"80%"}}>
                                                      <span>80%</span>
                                                </div>
                                          </div>
                                    </div>
                                    <div className="box">
                                          <div className="img">
                                                <img src={require('../../Assets/Images/skills/social.png')} />
                                          </div>
                                          <div className="txt">
                                                <h4>WordPress</h4>
                                          </div>
                                          <div className="bar">
                                                <div className="bg_accent" style={{width:"70%"}}>
                                                      <span>70%</span>
                                                </div>
                                          </div>
                                    </div>
                                    <div className="box">
                                          <div className="img">
                                                <img src={require('../../Assets/Images/skills/react.png')} />
                                          </div>
                                          <div className="txt">
                                                <h4>React Js / React Native</h4>
                                          </div>
                                          <div className="bar">
                                                <div className="bg_accent" style={{width:"60%"}}>
                                                      <span>60%</span>
                                                </div>
                                          </div>
                                    </div>
                                    <div className="box">
                                          <div className="img">
                                                <img src={require('../../Assets/Images/skills/angular.png')} />
                                          </div>
                                          <div className="txt">
                                                <h4>Angular Js</h4>
                                          </div>
                                          <div className="bar">
                                                <div className="bg_accent" style={{width:"60%"}}>
                                                      <span>60%</span>
                                                </div>
                                          </div>
                                    </div>
                                    <div className="box">
                                          <div className="img">
                                                <img src={require('../../Assets/Images/skills/photoshop.png')} />
                                          </div>
                                          <div className="txt">
                                                <h4>photoshop</h4>
                                          </div>
                                          <div className="bar">
                                                <div className="bg_accent" style={{width:"60%"}}>
                                                      <span>60%</span>
                                                </div>
                                          </div>
                                    </div>
                                    <div className="box">
                                          <div className="img">
                                                <img src={require('../../Assets/Images/skills/figma.png')} />
                                          </div>
                                          <div className="txt">
                                                <h4>Figma</h4>
                                          </div>
                                          <div className="bar">
                                                <div className="bg_accent" style={{width:"50%"}}>
                                                      <span>50%</span>
                                                </div>
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
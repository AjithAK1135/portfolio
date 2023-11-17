import React from "react";
import Aboutprofile from '../../Assets/Images/about.png';

export const Aboutus = () => {
      return(
            <section id="about">
                  <div className="container">
                        <div className="flex">
                              <div className="abt_img">
                                    <img src={Aboutprofile} alt=""/>
                              </div>
                              <div className="abt_text"></div>
                        </div>
                  </div>
            </section>
      );
}
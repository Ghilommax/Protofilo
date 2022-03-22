import React from "react";
import './style.css';
import { NavLink } from "react-router-dom";
const Bodies = (props) => {
    return(<React.Fragment>
                <div className="main-b">
                        <div className="container">
                            <div className="body-container">
                                 <div className="img"> 

                                 </div>
                                 <div className="content">
                                        <div className="meet-content">
                                            <div> <h1> Hello</h1> </div>  
                                              <div>
                                              <h2> A Bit About Me </h2>
                                                  <p>
                                                      Gruduate of Computer Science and Mathematics
                                                       as a Minor with experience working across 
                                                       the Frontend developer. I have build many 
                                                       projects with small team and by myself.
                                                  </p>
                                      
                                              </div>
                                        </div>
                                                
                                           <div className="idea-content">
                                                  <ul>                                                                      
                                                        <li className="bg-secondary"><NavLink to="/pro">Projects</NavLink></li>
                                                        <li className="bg-thrid"><NavLink to="/contact">Contact</NavLink></li>
                                                    </ul>
                                            </div>
                                 </div>
                          </div>
                 
                        </div>
                </div>
          </React.Fragment>)
}
export default Bodies;
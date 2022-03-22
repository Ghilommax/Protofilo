import React from "react";
import MainNav from "./project";
import { NavLink } from "react-router-dom";

import './style.css';
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" 
integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/"
 crossorigin="anonymous"/>
const Navbar = () => {
    const content = ["Resume", "Projects", "Contact"]

    return <React.Fragment>
        <nav id="main-n">
            <div className="container">
                <div>
                <div className="names">
                         <a href="/welcome"> <span className="bg-pic"><i class="fas fa-circle fa"></i> </span>Yonathan</a>
                    </div>
                    <div className="navbar">
                            <ul>
                                <li><NavLink to="/pro">Projects</NavLink></li>
                                <span> |</span>
                                <li><NavLink to="/contact">Contact</NavLink></li>
                            </ul>
                    </div>
                </div>
          </div>
        </nav>
    </React.Fragment>
}
export default Navbar;

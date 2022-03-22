import { Fragment } from "react";
import Navbar from "./header";
import Footers from './footer';
// import Mypro from "./resume";
import Mypro from "./myproject";

const Pro =() =>{
    return (<Fragment> 
            <nav>
                <Navbar/>
                <Mypro/>
            </nav>
            
            <footer>
                <Footers/>
            </footer>
    </Fragment>);
}
export default Pro;
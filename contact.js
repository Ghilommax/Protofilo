import { Fragment } from "react"
import Navbar from "./header";
import Footers from './footer';
import Mycon from "./mycontact";
const Contact = () =>{
    return (<Fragment> 
        <nav>
            <Navbar/>
            <Mycon/>
        </nav>
        
        <footer>
            <Footers/>
        </footer>
</Fragment>);
}
export default Contact;
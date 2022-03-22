import { Fragment } from "react"
import Navbar from "./header";
import Bodies from './body';
import Footers from './footer';
const Welcome = () => {
  return (<Fragment>
          <nav>
        <Navbar/>
        <Bodies/>
        </nav>
      <footer>
      <Footers/>
      </footer>
  </Fragment>)
}
export default Welcome;
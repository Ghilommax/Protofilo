import { Fragment } from "react"
import Form from './form'
const Mycon = () =>{
    return(<Fragment>
                    <div id="main-c">
                            <div className="container">
                                    <div className="contact-container">
                                            <div className="container-content">
                                                 <div className="heads"> 
                                                   <section> <h1> Contact</h1> </section> 
                                                  <section> 
                                                      <h4> Phone</h4>
                                                      <p>123-456-7890</p>
                                                  </section>
                                                   <section> 
                                                      <h4> Email</h4>
                                                      <p>frontendglomax@gmail.com</p>
                                                   </section>
                                                </div>
                                             </div>

                                             <div>
                                                   <Form/>
                                             </div>
                                          
                                    </div>
                            </div>
                    </div>
    </Fragment>)
}
export default Mycon;
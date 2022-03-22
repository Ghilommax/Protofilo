import React from "react"
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" 
integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/"
 crossorigin="anonymous"/>
 import './style.css';
const Footers = () =>{
    return(<React.Fragment>
            <footer id="main-f">
                <div className="container">
                    <section className="foot">
                        <article>
                            <h4>Phone</h4>
                           <p> 123-456-7890</p> 
                        </article>
                        <article>
                            <h4>Email</h4>
                           <p> frontendglomax@gmail.com</p> 
                        </article>
                        <article>
                            <h4>Follow Me</h4>
                           <div> 
                               <a href="http://twitter.com/@YGhilom" target= '_blank'><i class="fab fa-twitter fa-2x"></i></a>
                                <a href="http://www.linkedin.com/in/yonathan-ghilom" target='_blank'><i class="fab fa-linkedin fa-2x"></i></a>
                           </div> 
                       </article>
                       <article>
                           <p>copy right reserved &copy; 2022 </p>
                       </article>
                        
                    </section>
                </div>
            </footer>
    </React.Fragment>)
}
export default Footers;
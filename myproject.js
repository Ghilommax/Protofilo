import { Fragment } from "react";

const Mypro = function(){
    return(<Fragment>
            <div id = 'main-p'>
                 <div className="container">
                    <h1>
                        Projects
                    </h1>
                    <div className="project-container">
                            <ul>
                                <li>
                                    <div className="first">
                                        <div>
                                        <h2>Bank PLATFORM</h2>
                                         <p>
                                        This project is developed for a Bank system and is responsible for
                                         a customer to sign in or create a new account with the bank. It 
                                         also includes an explanation what kind of services the bank gives.<br/>
                                        The customer comment about the Bank is also included in the bottom part.
                                        Some of the effects that the web includes are strick navbar, blur images
                                         up to fully loading, and some effects in the comment part.  
                                        This web is developed using HTML, CSS, and Javascript.
                                        To get access to the code source in 
                                        GitHub is  <a  className='linkcenter'
                                              href="https://github.com/Ghilommax/Bank-Account-website.git"> 
                                                Click Here
                                            </a>
                                         </p>
                                        </div>
                                        <div className="img1"></div>
                                    </div>
                                </li>
                                <li>
                                    <div className="first">
                                        <div>
                                        <h2>CryptoCurrency</h2>
                                         <p>
                                         This project is developed for a cryptocurrency exchange and without
                                          a blockchain connection. Every time transaction happened will be 
                                          posted on the bottom of the web page. The platform also includes 
                                          different services that are listed on the page. To develop the page
                                           I use React js with CSS.  To get access to the code source in GitHub
                                            is   <a  className='linkcenter' href="https://github.com/Ghilommax/web3.0.git">
                                                  Click Here
                                                </a>
                                         </p>
                                        </div>
                                        <div className="img2"></div>
                                    </div>
                                </li>
                                <li>
                                    <div className="first">
                                        <div>
                                        <h2>My Food</h2>
                                         <p>
                                         This project is developed for the restaurant platform for the purpose
                                          of customers to order food from the backend date located on the 
                                          firebase and every order will be POST to the firebase Real data 
                                          to be made on the kitchens. Every time the customer order food 
                                          the price will increase by the price of the food times the 
                                          amount ordered. And to pass parameters   the platform will use 
                                          the useContext with some additional effects.The platform is developed
                                           with React js, CSS, and fetch data from the backend. To get
                                            access to the code source in GitHub 
                                            is  <a  className='linkcenter' href="https://github.com/Ghilommax/Restaurant-Web.git">
                                                     Click Here
                                             </a>
                                         </p>
                                        </div>
                                        <div className="img3"></div>
                                    </div>
                                </li>
                            </ul>
                    </div>
                 </div>
                    
            </div>


    </Fragment>)
}
export default Mypro;
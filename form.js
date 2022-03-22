import './style.css';
import { useEffect, useRef,useState } from 'react';
import { useHistory } from 'react-router-dom';
const Form = () =>{
        const history = useHistory();
        const first = useRef();
        const last = useRef();
        const email = useRef();
        const phone = useRef();
        const message = useRef();
       
        const[isValid ,setIsValid] = useState({
          nameF:true,
          nameL:true,
          phones:true,
          emails:true,
        })
        const isEmptycheck = value => value.trim() === '';
        
        
        const formListner = (e) =>{
                e.preventDefault();
                    const enterfirst = first.current.value;
                    const enterlast = last.current.value;
                    const enteremail = email.current.value;
                    const enterphone = phone.current.value;
                    const entermessage = message.current.value;
                    
                    const isfirst = !isEmptycheck(enterfirst);
                    const islast = !isEmptycheck(enterlast);
                    const isemail = !isEmptycheck(enteremail);
                    const isphone = !isEmptycheck(enterphone);

                    setIsValid({
                      nameF:isfirst,
                      nameL:islast,
                      phones:isphone,
                      emails:isemail
                    });

                    const isForm = isfirst && islast && isemail && isphone;

                  
                  
                    const contactHandler = async() =>{
                      const res = await fetch('https://contact-info-3f000-default-rtdb.firebaseio.com/contact.json',{
                        method:'POST',
                        body:JSON.stringify({
                          user:{
                             nameF:enterfirst,
                            nameL:enterlast,
                            emails:enteremail,
                            phones:enterphone,
                            messages:entermessage
                          }
                        })
                      })
                  }
                    {isForm && contactHandler();}
                     {isForm && history.push('/welcome')}
            
                   
        }
           
            const invalidSignFirst  = isValid.nameF ? '' : 'invalid';
            const invalidSignLast  = isValid.nameL ? '' : 'invalid';
            const invalidSignEmail = isValid.emails ? '' : 'invalid';
            const invalidSignPhone  = isValid.phones ? '' : 'invalid';
            


   return(<form className='contact-info' action='submit' onSubmit={formListner}>
         <div className='container'>
             <div className= {`submit-container `}>
             <div>
                    <span > 
                      <label> First Name</label>
                      <input ref={first} type= 'text' id="fname" className= {`${invalidSignFirst}`} />
                      {!isValid.nameF && <p>Enter valid First name</p>}
                    </span>
                    <span> 
                      <label>  Email</label>
                      <input ref={email} type= 'email' id="lname"  className= {`${invalidSignEmail}`}/>
                      {!isValid.emails && <p>Enter valid Email</p>}
                    </span>
                </div>
                <div>
                    <span> 
                      <label> Last Name</label>
                      <input  ref = {last} type= 'text' id="fname" className= {`${invalidSignLast}`}/>
                      {!isValid.nameL && <p>Enter valid Last name</p>}
                    </span>
                    <span> 
                      <label> Phone</label>
                      <input ref={phone} type= 'text' id="lname" className= {`${invalidSignPhone}`}/>
                      {!isValid.phones && <p>Enter valid Phone Number</p>}
                    </span>
                </div>
                <div>
                    <span>
                      <label> Message</label>
                      <input ref={message} type= 'text' id="lname"/>     
                    </span>
                     
          
                </div>
             </div>
             <div className='btn-k'>
                    <input type= 'submit' value= 'Submit' className='btn'/>
             </div>
              
        </div>
                
   </form>)
}
export default Form;
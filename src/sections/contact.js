import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import Header from '../sections/header';
export default function Contact() {
  const navigate = useNavigate();
  const [mymsg, setmymsg] = useState("");
    const [name, setName] = useState("");
    const [email, setemail] = useState("");
    const [ctg, setctg] = useState("");
    const [buget, setbuget] = useState("");
    const [msg, setmsg] = useState("");

    const formsubmit =(event)=>{
        event.preventDefault();
    }
const next =()=>{
    //document.querySelectorAll('form.quick-contact .input').classList.add('none');
 
    if(name != '')
    {
        document.querySelector('form.quick-contact .fullname').classList.remove('active');
        document.querySelector('form.quick-contact .fullname').classList.add('done');
        document.querySelector('form.quick-contact .Email').classList.add('active');
            if (name != '' && email !='')
            {
                if(Checkemail(email) === true)
                {
                    document.querySelector('form.quick-contact .Email').classList.remove('active');
                    document.querySelector('form.quick-contact .Email').classList.add('done');
                    document.querySelector('form.quick-contact .category').classList.add('active');
                            if (name != '' && email !='' && ctg !='')
                            {
                                document.querySelector('form.quick-contact .category').classList.add('done');
                                document.querySelector('form.quick-contact .category').classList.remove('active');
                                
                                if(ctg !='others')
                                {
                                        if (name != '' && email !='' && ctg !='' && buget !='')
                                        {
                                            document.querySelector('form.quick-contact .buget').classList.add('done');
                                            document.querySelector('form.quick-contact .buget').classList.remove('active');
                                            document.querySelector('form.quick-contact .message').classList.add('active');
                                        }else{
                                            document.querySelector('form.quick-contact .buget').classList.add('active');
                                        }
                                }else{
                                    document.querySelector('form.quick-contact .message').classList.add('active');
                                }
                            }else{
                                document.querySelector('form.quick-contact .category').classList.add('active');
                            }


                }else{
                    document.querySelector('form.quick-contact .Email').classList.add('active');
                }
        
            }else{
                document.querySelector('form.quick-contact .Email').classList.add('active');
            }


    }else{
        document.querySelector('form.quick-contact .fullname').classList.add('active');
    }
    








}
const ChangeName =(e)=>{
    setName(e.target.value);
    
}
const ChangeEmail =(e)=>{
    setemail(e.target.value);
    
}
const ChangeCtg =(e)=>{
    setctg(e.target.value);
    
}
const ChangeMsg =(e)=>{
    setmsg(e.target.value);
    console.log(msg);
    
}
const ChangeBuget =(e)=>{
    var x = document.querySelectorAll("form.quick-contact .buget button");
var i;
for (i = 0; i < x.length; i++) {
  x[i].classList.remove('active');
}
   
    e.target.classList.toggle('active');
    setbuget(e.target.value);

}
const Checkemail =(email)=>{
  
    var re = /\S+@\S+\.\S+/;
    return re.test(email);   
}
const submitForm =()=>{
    document.querySelector('.Confirm').classList.add('block');

}
const submitFormcon =()=>{
  document.querySelector('.loading').classList.add('block');
       const mailInfo ={
        name:name,
        email:email,
        ctg:ctg,
        buget:buget,
        msg:msg
    }
   
        axios.post("https://mohammedtanzil.herokuapp.com/api/sendmail",mailInfo,{headers:{"Content-Type" : "application/json"}})
        .then ((res)=>{
          document.querySelector('.loading').classList.remove('block');
          document.querySelector('.loading').classList.add('none');
          navigate('/');
          localStorage.setItem("msg", "Thanks for your message very soon im contact with you");
          window.location.reload(false);
            console.log(res.data);
           
        }).catch(error => {
          console.log(error.message);
        })

}



    return (
        <>
        <Header/>
        <section className='contact'>

<form className='quick-contact' onSubmit={formsubmit}>
<h1>Quick Contact</h1>

<div className='fullname input'>
<div className="row g-3 align-items-center">
  <div className="col-auto">
    <label for="inputPassword6" className="col-form-label">Full Name</label>
  </div>
  <div className="col-auto">
    <input type="text" id="name" className="form-control" aria-describedby="passwordHelpInline" onChange={ChangeName} />
  </div>
  <div className="col-auto">
  <button className="btn btn-primary" onClick={next}> <FontAwesomeIcon icon={faChevronRight} /></button>
  </div>
</div>
</div>
<div className='Email input'>
<div className="row g-3 align-items-center">
  <div className="col-auto">
    <label for="inputPassword6" className="col-form-label">Valide Email</label>
  </div>
  <div className="col-auto">
    <input type="email" id="inputPassword6" className="form-control" aria-describedby="passwordHelpInline" onChange={ChangeEmail} />
  </div>
  <div className="col-auto">
  <button className="btn btn-primary" onClick={next}> <FontAwesomeIcon icon={faChevronRight} /></button>
  </div>
</div>
</div>
<div className='category input'>
<div className="row g-3 align-items-center">
  <div className="col-auto">
    <label for="inputPassword6" className="col-form-label">Select category</label>
  </div>
  <div className="col-auto">
        <select class="form-select" aria-label="Default select example" onChange={ChangeCtg}>
        <option selected value="others">Open this select menu</option>
        <option value="Web Design">Web Design</option>
        <option value="Web Development">Web Development</option>
        <option value="Web Design and Developmen">Web Design and Development</option>
        </select>
  </div>
  <div className="col-auto">
  <button className="btn btn-primary" onClick={next}> <FontAwesomeIcon icon={faChevronRight} /></button>
  </div>
</div>
</div>
<div className='buget input'>
<div className="row g-3 align-items-center">
  <div className="col-auto">
    <label for="inputPassword6" className="col-form-label">Select your buget</label>
  </div>
  <div className="col-auto">
    <button className="btn btn-primary" onClick={ChangeBuget} value='1-100'>Less then 100$</button>
  </div>
  <div className="col-auto">
    <button className="btn btn-primary" onClick={ChangeBuget} value='100-300'>100-300$</button>
  </div>
  <div className="col-auto">
    <button className="btn btn-primary" onClick={ChangeBuget} value='300-600'>300-600$</button>
  </div>
  <div className="col-auto">
    <button className="btn btn-primary" onClick={ChangeBuget} value='700-1500'>700-1500$</button>
  </div>
  <div className="col-auto">
    <button className="btn btn-primary" onClick={ChangeBuget} value='2000-10000'>More then 2000$</button>
  </div>
  <div className="col-auto">
  <button className="btn btn-primary" onClick={next}> <FontAwesomeIcon icon={faChevronRight} /></button>
  </div>
</div>
</div>
<div className='message input'>
<div className="row g-3 align-items-center">
<div class="form-floating">
  <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea" onChange={ChangeMsg}></textarea>
  <label for="floatingTextarea">Custom Requerment / Message</label>
</div>
  <div className="col-auto">
  <button className="btn btn-primary" onClick={submitForm}> <FontAwesomeIcon icon={faChevronRight} /></button>
  </div>
</div>
</div>
    

</form>
<div className='Confirm'>
<ul class="list-group">
  <li class="list-group-item d-flex justify-content-between align-items-center">
    Confirm Contact
    
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    Full name
    <span class="badge bg-primary rounded-pill">{name}</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    Email
    <span class="badge bg-primary rounded-pill">{email}</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    Category
    <span class="badge bg-primary rounded-pill">{ctg}</span>
  </li>
  {(() => {
        if (buget != '') {
          return (
            <li class="list-group-item d-flex justify-content-between align-items-center">
                Buget
                <span class="badge bg-primary rounded-pill">$ {buget}</span>
            </li>
          )
        }
        if(msg != ''){
            return(
                <li class="list-group-item">
                Message:
                <div className='d-block w-100'>
                {msg}
                </div>
               </li>
            )
        }
      })()}


  
</ul>

    <div className='px-5 row text-align-center mt-3 mb-3 w-100 d-flex justify-content-between align-items-center'>
        <div className="col-auto">
        <button className="btn btn-primary" onClick={submitFormcon}>Confirm </button>
        </div>
        <div className="col-auto">
        <button className="btn btn-primary" onClick={()=>{  window.location.reload(false);}}>Cancel</button>
        </div>
    </div>
</div>
<div className="loading">
    <div className="load">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <div className="text">Loading...</div>
    </div>
    </div>
</section>   
        </>
    )
}

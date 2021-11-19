import '../lb/css/webcss.css';
import Header from '../sections/header';
import HomeSectionImage from '../lb/images/1.png';
import ProfileImage from '../lb/images/tanzil_programming_expert-.jpg';
import { useState } from "react";
import {  Link } from "react-router-dom";
import Alert from 'react-bootstrap/Alert';
function Home() {
    const [mymsg, setmymsg] = useState(localStorage.getItem("msg"));
   


const removeMsg =()=>{
    setmymsg(false);
    localStorage.removeItem("msg");
}



    return (
      
        
      <>
     
<Header/>

       <section className='home' id="home">

        <img src={HomeSectionImage} />
        <div className='homeMsg'>
            <h5>I'm a</h5>
            <ul>
                <li><h1>Student</h1></li>
                <li><h1>Freelancer</h1></li>
                <li><h1>Web Programmer</h1></li>
                
                
            </ul>
            <p>Web programming is not my profession but it's my passion</p>
            
            
        </div>
        <div className='HomeProfile'>
            <div className="profilePicture">
                <div className='gard1'><div className='gard2'> <div className='picture'><img src={ProfileImage} /></div></div></div>
            </div>
            <div className="profileName">Mohammed Tanzil</div>
            <div className="profileStatus">Last online 0 min ago</div>
            <Link to='/contact'><button className='quickcontactBtn' >Quick Contact</button></Link>
        </div>
        <div className='emailSendingMsg'>
            <div className='msg'>
                {(() => {
                        if (mymsg) {
                            return (
                            <Alert variant="success" onClose={removeMsg} dismissible>
                                <Alert.Heading>Thanks! Fou your Message!</Alert.Heading>
                                <p>
                                    Thanks dear for your valuble message,Very soon i will contact with you 
                                </p>
                            </Alert>
                            );
                        }
                })()}
            </div>
        </div>
       </section>
      </>
     
      
    );
  }
  
  export default Home;
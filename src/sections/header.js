import React from 'react';
import {  Link } from "react-router-dom";

export default function header() {

    const navAcivation =()=>{
document.querySelector('header#mainHeader nav').classList.toggle('active');
document.querySelector('.navAcivation').classList.toggle('none');
    }

    return (
        <header id='mainHeader'>
            <nav>
                <ul>
                <Link to='/'><li ><i>H</i><label>Home</label></li></Link>
                    <li><i>P</i><label>Project</label></li>
                    <Link to='/contact'>  <li><i>C</i><label>Contact</label></li></Link>
                    
                </ul>
            </nav>
            <div className='navAcivation' onClick={navAcivation}>navber</div>
        </header>
    )
}

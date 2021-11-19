import './lb/css/app.css';

import React, { useState,useDebugValue } from 'react';

import Home from './components/home';
import Contact from './sections/contact';
import { BrowserRouter,Routes,Route } from "react-router-dom";
function App() {



 
  return (
    
      
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/contact" element={<Contact />} />
    


    </Routes>
    </BrowserRouter>
   
    
  );
}

export default App;



//import loginpage from './background';
import React, { Suspense, lazy } from "react";
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route, Navigate
} from "react-router-dom";

import Login from './login/login';
import HomePage  from './home/homePage';
import Onboarding  from './onboarding/onboardingPage';
import Calender from "./calender/calender";


function App() {
  return (
    
   
     <BrowserRouter>
        <Routes>
        
      <Route  path="/" element={<Login />} /> 
      <Route path="/homePage" element={<HomePage />} /> 
      <Route path="/onboarding" element={<Onboarding />} /> 
      <Route path="/calender" element={<Calender />} /> 
      </Routes>
  </BrowserRouter>
          
          
    
  );
}

export default App;

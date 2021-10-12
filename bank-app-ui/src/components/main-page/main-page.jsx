import React, { useState } from "react"
import './main-page.css'
import logo from "../../resources/logo.png"

function MainPage(){

    return(
    <div className="page-container"> 
        <div className="topnav">
           {/* <img className="logo"  src={logo} alt="Not found"/>
           <div className="topnav-container"> */}
               <p>WorldBankApp</p>
               <p>Nume si Prenume</p>
               <a href="#contact">Contact</a>
           
        </div>
    </div>
    )
}

export default MainPage;
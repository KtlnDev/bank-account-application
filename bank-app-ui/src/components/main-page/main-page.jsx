import React, { useState } from "react"
import './main-page.css'

function MainPage(){

    return(
    <div className="page-container-main"> 
        <div className="navigation-bar">
               <span className="nav-item">WorldBankApp</span>
               <span className="nav-item"> Nume si Prenume</span>    
        </div>
        <div className="rest-of-the-page">
        </div>
    </div>
    )
}

export default MainPage;
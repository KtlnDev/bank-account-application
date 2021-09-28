import React from "react";
import './welcome-page.css'
import logo from "../../resources/logo.png"

function WelcomePage(){
    return(
        <div className="welcome-page">
            <div className="welcome-page-container">
              <div className="logo-container">
              <img className="image"  src={logo} alt="Not found"/>
              <p className="image-text" >The image is your gaze</p>
               </div>

            <div className="welcome-buttons-ares">
             <button className="button-login">Login</button>
             <button className="button-register">Register</button>
            </div>

           </div>
        </div>
        
    )
}

export default WelcomePage
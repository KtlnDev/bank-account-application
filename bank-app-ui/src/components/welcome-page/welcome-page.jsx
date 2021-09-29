import React from "react"
import {Link} from "react-router-dom"
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
            <div className="welcome-buttons-area">
                <p className="welcome-text">   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <Link to='/login'>
                    <button className="buttons">Login</button>
                </Link>
                <button className="buttons">Register</button>
            </div>
           </div>
        </div>
        
    )
}

export default WelcomePage
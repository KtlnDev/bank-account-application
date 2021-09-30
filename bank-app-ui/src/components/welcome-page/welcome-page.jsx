import React from "react"
import { Link } from "react-router-dom"
import logo from "../../resources/logo.png"
import './welcome-page.css'

function WelcomePage(){
    return(
        <div className="page-container">
            <div className="box-container">
                <img className="logo"  src={logo} alt="Not found"/>
                <div className="welcome-buttons-area">
                    <p className="welcome-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
                        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
                        in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <Link to='/login'><button className="buttons">Login</button></Link>
                    <Link to='/register'><button className="buttons">Register</button></Link>
                </div>
           </div>
        </div>
    )
}

export default WelcomePage
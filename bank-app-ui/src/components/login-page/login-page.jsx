import React from "react"
import './login-page.css'
import logo from "../../resources/logo.png"

function LoginPage(){
    return(
    <div className="page-container">
        <div className="box-container">
            <img className="logo"  src={logo} alt="Not found"/>
            <div className="welcome-buttons-area">
                LOGIN PAGE
            </div>
        </div>
    </div>
    )
}

export default LoginPage;
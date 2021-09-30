import React from "react"
import './register-page.css'
import logo from "../../resources/logo.png"

function RegisterPage(){
    return(
    <div className="page-container">
        <div className="box-container">
            <img className="logo"  src={logo} alt="Not found"/>
            <div className="welcome-buttons-area">
                REGISTER PAGE
            </div>
        </div>
    </div>
    )
}

export default RegisterPage;
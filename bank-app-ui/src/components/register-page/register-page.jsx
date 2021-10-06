import React from "react"
import './register-page.css'
import logo from "../../resources/logo.png"
import RegisterIcon from "../../resources/register-icon.png"


function RegisterPage(){
    return(
    <div className="page-container">
        <div className="box-container-register">
            <img className="logo"  src={logo} alt="Not found"/>
            <div className="register-container">
                <img  src={RegisterIcon} alt="Not found"/>
                <form  className="register-form" >
                    <label className="register-label">First Name</label>
                    <input className="register-field" type="email" name="firstName" placeholder="Enter your first name"  />
                    <label className="register-label">Last Name</label>
                    <input className="register-field" type="text" name="lastName" placeholder="Enter your last name"/>
                    <label className="register-label">Email</label>
                    <input className="register-field" type="text" name="email" placeholder="Enter your email"/>
                    <label className="register-label">Password</label>
                    <input className="register-field" type="text" name="password" placeholder="Enter your password"/>
                    <label className="register-label">Confirm Password</label>
                    <input className="register-field" type="text" name="lastName" placeholder="Confirm your Password"/>
                    <span className="error-message"></span>
                    <input className="register-button" type="submit" value="Register" />
                </form> 
                <a href="/login" className="hyperlink">Already have an account? Sign in!</a>
            </div>
        </div>
    </div>
    )
}

export default RegisterPage;
import React from "react"
import './register-page.css'
import logo from "../../resources/logo.png"
import RegisterIcon from "../../resources/upload.png"
function RegisterPage(){
    return(
    <div className="page-container">
        <div className="box-container">
            <img className="logo"  src={logo} alt="Not found"/>
            <div className="register-container">
                <img  src={RegisterIcon} alt="Not found"/>
                <form  className="register-form" >
                    <label className="register-label">First Name</label>
                    <input className="register-field" type="email" name="firstName" placeholder="Enter your First Name"  />
                    <label className="register-label">Last Name</label>
                    <input className="register-field" type="text" name="lastName" placeholder="Enter your Last Name"/>
                    <label className="register-label">Email</label>
                    <input className="register-field" type="text" name="email" placeholder="Enter your Email"/>
                    <label className="register-label">Password</label>
                    <input className="register-field" type="text" name="password" placeholder="Enter your password"/>
                    <label className="register-label">Confirm Password</label>
                    <input className="register-field" type="text" name="lastName" placeholder="Confirm your Password"/>
                    <input className="register-button" type="submit" value="Register" />
                </form> 
            </div>
        </div>
    </div>
    )
}

export default RegisterPage;
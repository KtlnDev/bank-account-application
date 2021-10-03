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
                <br/><br/>
                <form>
                    <input className="form-container" type="email" name="email" placeholder="Email" required />
                    <br />
                    <br />
                    <input className="form-container" type="text" name="firstname" placeholder="First Name" required />
                    <br />
                    <br />
                    <input className="form-container" type="text" name="lastname" placeholder="Last Name" required />
                    <br />
                    <br />
                    <input className="form-container" type="text" name="lastname" placeholder="Phone Number" required />
                    <br />
                    <br />
                    <input className="buttons" type="submit" value="Submit" />
                </form>
              
            </div>
        </div>
    </div>
    )
}

export default RegisterPage;
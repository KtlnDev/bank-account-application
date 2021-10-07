import React, { useState } from "react"
import './login-page.css'
import logo from "../../resources/logo.png"
import LoginIcon from "../../resources/login-icon.png"

function LoginPage(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    async function loginHandler(event){
        event.preventDefault();
        const loginData = {
            email: email,
            password: password
        };
        console.log(loginData);
    }

    return(
    <div className="page-container">
        <div className="box-container-login">
            <img className="logo"  src={logo} alt="Not found"/>
            <div className="login-container">
                <img  src={LoginIcon} alt="Not found"/>
                <form  className="login-form" onSubmit={loginHandler} >
                    <label className="login-label">Email</label>
                    <input className="input-field" type="email" name="email" placeholder="Enter your email address" onChange={e => setEmail(e.target.value)} required/>
                    <label className="login-label">Password</label>
                    <input className="input-field" type="password" name="password" placeholder="Enter your password" onChange={e => setPassword(e.target.value)} required/>
                    <span className="error-message">{errorMessage}</span>
                    <input className="login-button" type="submit" value="Login" />
                </form>
                <a href="/register" className="hyperlink">Don't have an account? Let's create one!</a>  
            </div>
        </div>
    </div>
    )
}

export default LoginPage;
import React from "react"
import './login-page.css'
import logo from "../../resources/logo.png"
import LoginIcon from "../../resources/login.png"
import { useForm } from "react-hook-form";

function LoginPage(){
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);
    return(
    <div className="page-container">
        <div className="box-container-login">
            <img className="logo"  src={logo} alt="Not found"/>
            <div className="login-container">
                <img  src={LoginIcon} alt="Not found"/>
                <form  className="login-form" >
                    <label className="login-label">Email</label>
                    <input className="input-field" type="email" name="email" placeholder="Enter your email address"  />
                    <label className="login-label">Password</label>
                    <input className="input-field" type="text" name="password" placeholder="Enter your password"/>
                    <input className="login-button" type="submit" value="Login" />
            </form>
            <a href="http://localhost:3000/register">Don't have an account?</a>  
            </div>
        </div>
    </div>
    )
}

export default LoginPage;
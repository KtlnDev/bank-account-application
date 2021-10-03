import React from "react"
import './login-page.css'
import logo from "../../resources/logo.png"
import { useForm } from "react-hook-form";

function LoginPage(){
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);
    return(
    <div className="page-container">
        <div className="box-container">
            <img className="logo"  src={logo} alt="Not found"/>
            <div className="welcome-buttons-area">
                LOGIN PAGE
            <br/><br/>
            <form onSubmit={handleSubmit(onSubmit)}>
                 <input className="form-container" type="email" name="email" placeholder="Email"  />
                 <br/><br/>
                 <input className="form-container" type="text" name="password" placeholder="Password"/>
                 <br/><br/>
                <input className="buttons" type="submit" value="Submit" />
            </form>
            </div>
        </div>
    </div>
    )
}

export default LoginPage;
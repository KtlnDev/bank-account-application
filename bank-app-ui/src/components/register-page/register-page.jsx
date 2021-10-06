import React,{ useState} from "react"
import './register-page.css'
import logo from "../../resources/logo.png"
import RegisterIcon from "../../resources/register-icon.png"


function RegisterPage(){
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    function registerHandler(event){
        event.preventDefault();
        const registerData = {
            fName : firstName,
            lName : lastName,
            email : email,
            password : password,
            confirmPassword : confirmPassword
        }
        console.log(registerData);
    }

    return(
    <div className="page-container">
        <div className="box-container-register">
            <img className="logo"  src={logo} alt="Not found"/>
            <div className="register-container">
                <img  src={RegisterIcon} alt="Not found"/>
                <form  className="register-form" onSubmit={registerHandler} >
                    <label className="register-label">First Name</label>
                    <input className="register-field" type="text" name="firstName" placeholder="Enter your first name" onChange={e => setFirstName(e.target.value)} required/>
                    <label className="register-label">Last Name</label>
                    <input className="register-field" type="text" name="lastName" placeholder="Enter your last name" onChange={e => setLastName(e.target.value)} required/>
                    <label className="register-label">Email</label>
                    <input className="register-field" type="text" name="email" placeholder="Enter your email" onChange={e => setEmail(e.target.value)} required/>
                    <label className="register-label">Password</label>
                    <input className="register-field" type="password" name="password" placeholder="Enter your password" onChange={e => setPassword(e.target.value)} required/>
                    <label className="register-label">Confirm Password</label>
                    <input className="register-field" type="password" name="confirmPassword" placeholder="Confirm your password" onChange={e => setConfirmPassword(e.target.value)} required/>
                    <span className="error-message">{errorMessage}</span>
                    <input className="register-button" type="submit" value="Register" />
                </form> 
                <a href="/login" className="hyperlink">Already have an account? Sign in!</a>
            </div>
        </div>
    </div>
    )
}

export default RegisterPage;
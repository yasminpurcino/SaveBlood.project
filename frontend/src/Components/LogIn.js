import Logo from './Logo.png'
import React, {useState} from "react";
import {Link} from "react-router-dom";
import {getUser} from '../Controller/User';
import {useNavigate} from "react-router-dom";


function LogIn() { // React States
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const errors = {
        email: "invalid email",
        pass: "invalid password"
    };

    const handleSubmit = async (event) => { // Prevent page reload
        event.preventDefault();

        // Find user login info
   
        let loginUser = await getUser(username, password)
        console.log(loginUser)
        if (loginUser) {
            localStorage.setItem('email', loginUser.email);
            localStorage.setItem('name', loginUser.name);
            localStorage.setItem('iduser', loginUser.idusers);
            console.log(loginUser.idusers)

            navigate("/main")
        } else {
            setErrorMessages({name: "pass", message: errors.pass})
        }

    };

    // Generate JSX code for error message
    const renderErrorMessage = (name) => name === errorMessages.name && (
        <div className="error">
            {
            errorMessages.message
        }</div>
    );

    // JSX code for login form
    const renderForm = (
        <div className="formLogin">
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <label>E-mail
                    </label>
                    <input onChange={
                            (e) => setUsername(e.target.value)
                        }
                        type="text"
                        email="email"
                        required/> {
                    renderErrorMessage("email")
                } </div>
                <div className="input-container">
                    <label>Password
                    </label>
                    <input onChange= {(e) => setPassword(e.target.value)} type="password" name="pass" required/> {
                    renderErrorMessage("pass")
                } </div>
                <div className="button-container">
                    <input type="submit"/>
                </div>
            </form>
        </div>
    );
    return (
        <div>
            <div className="imgLogo">
                <img src={Logo}
                    alt="logo"/>
            </div>

            <div className="loginBox">
                <div className="login-form">
                    <div className="titleLogin">Sign In:</div>
                    {
                    isSubmitted ? <div>User is successfully logged in</div> : renderForm
                }


                    <div className="fontLogin" href="/fontCreate">
                        Don’t have an account yet?
                        <b>
                            <Link className='linkPageEnd' to="/createaccount">Sign up here!</Link>
                        </b>

                    </div>
                </div>
            </div>
        </div>


    )
}

export default LogIn

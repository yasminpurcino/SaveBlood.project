// import {BrowserRouter as Router, Link} from 'react-router-dom';
import React from "react";
import Button from 'react-bootstrap/Button';
import Logo from './Logo.png'
import Graphic from './Graphic.jpg'
// import Login from "./Login";


function Dashboard() {
    const emailName = localStorage.getItem('email');
    let quizHref = "/beforeQuiz"
    let bookHref = "/beforeBook"
    if (emailName) {
        quizHref = "/quiz"
        bookHref = "/bookNow"
    }

    return (

        <div class="containerDash">
            <h1 className="welcome">
                Welcome</h1>
            <p className="orangeText">
                your donation of blood or plasma can help save up three lives.</p>

            <div class="booking ">
                <Button className="bookNow"
                    href={bookHref}>
                    Book Now
                </Button>
                {' '} </div>

            <div class="row img">
                <div className="imgLogo">
                    <img src={Logo}
                        alt="logo"/>
                </div>
            </div>

            <p className="orangeText2">
                Blood Needed:
            </p>

            <div class="row">
                <img className="graphic"
                    src={Graphic}
                    alt="grphic"/>


            </div>

            <div class="row align-items-end">
                <div class="col">

                    <Button className="login" variant="danger" href="/login">Log In</Button>
                    {''} </div>
                <div class="col">
                    <Button className="quiz" variant="danger"
                        href={quizHref}>Quiz</Button>
                    {' '} </div>
                <div class="col create">
                    <Button className="createAccount" variant="danger" href="/createaccount">Create Account
                    </Button>
                    {' '} </div>

            </div>


        </div>

    );
}

export default Dashboard;

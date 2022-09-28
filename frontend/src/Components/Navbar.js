import {useState} from "react";

export default function Navbar() {
    const [isNavExpanded, setIsNavExpanded] = useState(false)
    const emailName = localStorage.getItem('email');
    const [isLoggedin, setIsLoggedin] = useState(false);


    const logout = () => {
        console.log("im here")
        localStorage.clear();
        setIsLoggedin(false);
    };


    return (
        <nav className="navigation">
            <a href="/" className="logo">
                SaveBlood
            </a>
            <button className="hamburger"
                onClick={
                    () => {
                        setIsNavExpanded(!isNavExpanded)
                    }
            }>
                {/* hamburger svg code... */} </button>
            <div className={
                isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
            }>
                <ul>
                    <li> {
                        (emailName) ? <a className="navBtn"
                            onClickCapture={logout}
                            href="/">LOGOUT</a> : <a className="navBtn" href="/login">LOGIN</a>
                    } </li>

                    <li>{
                        (emailName) ? <a className="navBtn" href="/bookNow">Book Now
                        </a> : <a className="navBtn" href="/beforeBook">BOOK NOW
                        </a>
                    } </li>

                    <li> {
                        (emailName) ? <a className="navBtn" href="/quiz">Quiz
                        </a> : <a className="navBtn" href="/beforeQuiz">
                            Quiz</a>
                    } </li>

                    <li> {
                        (emailName) ? <a className="navBtn" href="/main">DASHBOARD
                        </a> : <a className="navBtn" href="/main"></a>
                    } </li>


                </ul>
            </div>
        </nav>
    );
}

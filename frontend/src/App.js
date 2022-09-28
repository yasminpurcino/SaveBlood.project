import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from './Components/Footer'
import './index.css';
import {AppRoutes} from './Routes/routes';
import {Outlet} from 'react-router-dom';
import Navbar from './Components/Navbar';


function App() {
    return (
        <div className='mainContainer'>
            <Navbar/>
            <Outlet/>
            <AppRoutes/>
            <Footer/>
        </div>


    );
}

export default App;

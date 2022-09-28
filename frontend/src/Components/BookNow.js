import React, {useState} from 'react'
// import styled from 'styled-components';
import Location from './Location.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
import {bookUser} from '../Controller/User';


function BookNow() {
    const [location, setLocation] = useState('');
    const [date, setDate] = useState('');

    const handleSelect = (e) => {
        console.log(e);
        setLocation(e)
    }
    const handleSubmit = async (event) => {
        document.getElementById('msg').innerHTML = 'Your booking is confirmed!'

        
        localStorage.setItem('date', date);
        localStorage.setItem('location', location);

        event.preventDefault();
        const iduser = localStorage.getItem('iduser');
        console.log(iduser)
        console.log(date)
        console.log(location)
        let bookResult = await bookUser(iduser, date, location)
    }
    return (
        <div>
            <div className='bookNow'>Book Appointment
            </div>
            <form onSubmit={handleSubmit}
                className="formBook">
                <div className="form-body">
                    <div className="name">
                        <label className="form__labelBook" for="date">
                            Date/Time:
                        </label>
                        <input onChange= {(e) => setDate(e.target.value)} className="form__inputBook" type="text" id="date"/>
                        <br></br>
                        <div className='btnStyle'>
                            <DropdownButton className='btn-BookNow' alignRight title="Location" id="dropdown-menu-align-right"
                                onSelect={handleSelect}>
                                <Dropdown.Item eventKey="NZ Blood Service Epsom">NZ Blood Service Epsom</Dropdown.Item>
                                <Dropdown.Item eventKey="NZ Blood Service Manukau">NZ Blood Service Manukau</Dropdown.Item>
                                <Dropdown.Item eventKey="NZ Blood Service North Shore">NZ Blood Service North Shore</Dropdown.Item>
                                <Dropdown.Item eventKey="NZBlood Blood Bank - Auckland City">NZBlood Blood Bank - Auckland City</Dropdown.Item>
                                <Dropdown.Item eventKey="Regional Cancer & Blood Service">Regional Cancer & Blood Service</Dropdown.Item>
                                <Dropdown.Item eventKey="Auckland Healthcare">Auckland Healthcare</Dropdown.Item>
                                <Dropdown.Divider/>

                            </DropdownButton>
                            <h4 className='selected'>You selected {location}</h4>
                        </div>
                    </div>
                </div>


                <div class="row">
                    <img className="location"
                        src={Location}
                        alt="location"/>
                </div>
                <button type="submit" class="btnBook">
                    Submit</button>
                <p className='resultBook' id="msg"></p>
            </form>
        </div>
    )
}

export default BookNow

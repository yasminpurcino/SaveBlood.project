
import React from "react";
import Button from 'react-bootstrap/Button';
import Logo from './Logo.png'



function BeforeBook() {
  return (
    
    <div class="containerDash">
        <h1 className="welcome"> Before Booking</h1>
    
        <div class="row img">
        <div className="imgLogo">
        <img src={Logo} alt="logo" />
        </div>
        </div>
   


   
      <div class="row align-items-end">  
      <div class="col">
      
      <Button className="login" variant="danger" href="/login">Log In</Button>{''}
      
   
      <div class="col create">
      <Button className="createAccount" variant="danger" href="/createaccount">Create Account </Button>{' '}
      </div>

      </div> 


    </div>
    </div>
  );
}

export default BeforeBook;

import React from 'react';
import '../../App.css';
import './services.css'
import { Link } from 'react-router-dom';
import './Services'

export default function Services() {
  return <div className='sign-up'>
  <form class="Servicebox" action="index.html" method="post">
    <h1 className='boxH1'>VALIDATE</h1>
    <div className="name">
    <input type="text" name="" placeholder="First Name"/>
    <input type="text" name="" placeholder="Last Name"/>

    </div>
    <div class="custom-select">
    <select className='serviceSelect'>
      <option value="0">Select ID:</option>
      <option value="1">Aadhar Card</option>
      <option value="2">PAN Card</option>
      <option value="3">Driving Licence</option>
    </select>
    <input className='serviceSelect' type="number" name="" placeholder="ID Namber"/>
    <select className='serviceGender'>
      <option value="0">Male</option>
      <option value="1">Female</option>
    </select>
  </div>
  <div className='FileSubmit'>
  <input type="file" id="myFile" name="filename"/>
    <Link to="/services" className='btnLogin'>Sign up</Link>
  </div>
    
  </form>
</div>;
}

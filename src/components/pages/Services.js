import React from 'react';
import '../../App.css';
import './services.css'
import { Link } from 'react-router-dom';
import './Services'

export default function Services() {
  return <div className='sign-up'>
  <form class="box" action="index.html" method="post">
    <h1 className='boxH1'>VALIDATE</h1>
    <input type="text" name="" placeholder="First Name"/>
    <input type="text" name="" placeholder="Last Name"/>
    <div class="custom-select">
    <select>
      <option value="0">Select ID:</option>
      <option value="1">Aadhar Card</option>
      <option value="2">PAN Card</option>
      <option value="3">Driving Licence</option>
    </select>
  </div>
    <input type="number" name="" placeholder="ID Namber"/>
    <Link to="/services" className='btnLogin'>Sign up</Link>
  </form>
</div>;
}

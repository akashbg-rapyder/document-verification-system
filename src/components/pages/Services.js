import React from 'react';
import '../../App.css';
import './services.css'
import { Link } from 'react-router-dom';
import './Services'
import { Alert } from 'bootstrap';
import {useRef, useEffect} from 'react';

export default function Services() {

  const ref = useRef(null);
  const element = ref.current;
  var firstName, lastName, idNumber
  var userData = new Object();

  useEffect(() => {
    const handleClick = event => {
      firstName=document.querySelector("#firstName").value
      lastName=document.querySelector("#lastName").value
      idNumber=document.querySelector("#idNumber").value
      userData = { 
        "firstName": firstName,
        "lastName": lastName,
        "idNumber": idNumber
      };
      console.log(userData)
    };
    element.addEventListener('click', handleClick);
    return () => {
      element.removeEventListener('click', handleClick);
    };

  }, []);

  return <div className='sign-up'>
  <form class="Servicebox" action="index.html" method="post">
    <h1 className='boxH1'>VALIDATE</h1>
    <div className="name">
    <input type="text" name="" placeholder="First Name" id= "firstName"/>
    <input type="text" name="" placeholder="Last Name" id= "lastName"/>

    </div>
    <div class="custom-select">
    <select className='serviceSelect'>
      <option value="0">Select ID:</option>
      <option value="1">Aadhar Card</option>
      <option value="2">PAN Card</option>
      <option value="3">Driving Licence</option>
    </select>
    <input className='serviceSelect' type="number" name="" placeholder="ID Namber" id="idNumber"/>
    <select className='serviceGender'>
      <option value="0">Male</option>
      <option value="1">Female</option>
    </select>
  </div>
  <div className='FileSubmit'>
  <input type="file" id="myFile" name="filename"/>
    <Link to="/services" id="validate" ref={ref} className='btnLogin'>Validate</Link>
  </div>
    
  </form>
</div>;
}

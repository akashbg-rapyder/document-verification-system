import React from 'react';
import '../../App.css';
import './services.css'
import './Services'
import {useRef} from 'react';

export default function Services() {

  const ref = useRef();
  var firstName, lastName, idNumber
  var userData = new Object();

  const buttoncliked = () => {
      firstName=document.querySelector("#firstName").value
      lastName=document.querySelector("#lastName").value
      idNumber=document.querySelector("#idNumber").value
      userData = { 
        "firstName": firstName,
        "lastName": lastName,
        "idNumber": idNumber
      };
      
      console.log(userData)
  }

  return <div className='sign-up'>
  <div className="Servicebox">
    <h1 className='boxH1'>VALIDATE</h1>
    <div className="name">
    <input type="text" name="" placeholder="First Name" id= "firstName"/>
    <input type="text" name="" placeholder="Last Name" id= "lastName"/>

    </div>
    <div className="custom-select">
    <select className='serviceSelect'>
      <option value="1" checked>Aadhar Card</option>
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
    <button onClick={buttoncliked} ref={ref} id="validate"className='btnLogin'>Validate</button>
  </div>
    
  </div>
</div>;
}

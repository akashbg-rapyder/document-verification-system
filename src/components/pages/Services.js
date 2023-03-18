import React from 'react';
import '../../App.css';
import './services.css'
import './Services'
import {useRef} from 'react';
import { Upload } from "@aws-sdk/lib-storage";
import { S3Client, S3 } from "@aws-sdk/client-s3";
import { v4 as uuidv4 } from 'uuid';

export default function Services() {

  const ref = useRef();
  var firstName, lastName, idNumber
  var userData = new Object();

  const upload = (file)=>{
    const fileName = uuidv4();

    var file = file.target.files[0];
    const target = {Bucket: "", Key:fileName, Body:file}
    const credentials = {accessKeyId:"", secretAccessKey:""}
    try {
      const parallelUploads3 = new Upload({
        client: new S3Client({region:"ap-south-1", credentials:credentials}),
        params: target,
        leavePartsOnError: false,
      });
      parallelUploads3.on("httpUploadProgress", (progress) => {
        console.log(progress);
      });
      parallelUploads3.done();
    } 
    catch (e) {
      console.log(e);
    }
  }

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
      <option className="customOption" value="1" checked>Aadhar Card</option>
      <option className="customOption" value="2">PAN Card</option>
      <option className="customOption" value="3">Driving Licence</option>
    </select>
    <input className='serviceSelect' type="number" name="" placeholder="ID Namber" id="idNumber"/>
    <select className='serviceGender'>
      <option className="customOption" value="1">Male</option>
      <option className="customOption" checked value="2">Female</option>
      <option className="customOption" value="3">Others</option>
    </select>
  </div>
  <div className='FileSubmit'>
  <input type="file" id="myFile" onChange={upload} name="filename"/>
    <button onClick={buttoncliked} ref={ref} id="validate"className='btnLogin'>Validate</button>
  </div>
  </div>
</div>;
}

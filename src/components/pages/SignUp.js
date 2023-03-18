import React from 'react';
import '../../App.css';
import './signup.css'
import { Link } from 'react-router-dom';
import './Services'

export default function SignUp() {
  return <div className='sign-up'>
    <form class="box" action="index.html" method="post">
      <h1 className='boxH1'>VALIDATE</h1>
      <input type="text" name="" placeholder="Username" id="userName" />
      <input type="password" name="" placeholder="Password" id="password"/>
      <Link to="/services" className='btnLogin'>Sign up</Link>
    </form>
  </div>;
}

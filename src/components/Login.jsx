import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import React from 'react'
import Navbar from './navbar'
import './login.css'
import {Link} from 'react-router-dom';


import { MDBInput } from 'mdb-react-ui-kit';

export default function Login() {
  return (
    <>
    <Navbar/>
    <div className='loginDiv'>
        <div className='imageDiv'>
            <img src="./images/favicon.png" alt="" />
        </div>
        <div className='header'>
            <h1>LOGIN</h1>
            <h5>Welcome back! Log-In to your account</h5>
        </div>
        <div className='inputs'>
        <MDBInput label='Email' id='typeEmail' type='email' size='lg'  className='mb-4'/>
        <MDBInput label='Password input' id='typePassword' type='password' size='lg' className='mb-4'/>
        </div>
        <div className='ending'>
           <Link to='/signup'><p>Dont have an account yet ? Signup</p></Link> 
            <button> Login </button>
        </div>
    </div>
    </>
  )
}

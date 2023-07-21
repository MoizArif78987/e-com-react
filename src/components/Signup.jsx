import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import React from 'react'
import Navbar from './navbar'
import './login.css'
import {Link} from 'react-router-dom';

import { MDBInput } from 'mdb-react-ui-kit';

export default function Signup() {
  return (
    <>
    <Navbar/>
    <div className='loginDiv'>
        <div className='imageDiv'>
            <img src="./images/favicon.png" alt="" />
        </div>
        <div className='header'>
            <h1>Register</h1>
            <h5>Register Yourself!</h5>
        </div>
        <div className='inputs'>
        <MDBInput label='Email' id='typeEmail' type='email' size='lg'  className='mb-4'/>
        <MDBInput label='Password' id='typePassword' type='password' size='lg' className='mb-4'/>
        <MDBInput label='Re-Enter Password' id='retypePassword' type='password' size='lg' className='mb-4'/>

        </div>
        <div className='ending'>
            <Link to='/login'><p>Already Have an Account? Login</p></Link>
            <button> Register </button>
        </div>
    </div>
    </>
  )
}

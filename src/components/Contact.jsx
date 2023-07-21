import "mdb-react-ui-kit/dist/css/mdb.min.css";
import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import './contact.css';

import {
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
  MDBInput,
  MDBTextArea
} from "mdb-react-ui-kit";

export default function Contact() {
  return (
    <>
      <Navbar />
      <div className="container">
        <MDBCard className="contactCard">
          <MDBCardHeader><div className="cardHead">Contact Us</div></MDBCardHeader>
          <MDBCardBody>
          <MDBInput className="mb-4" label='Enter Your Name' id='typeText' type='text' size="lg" />
          <MDBInput className="mb-4" label='Email input' id='typeEmail' type='email' size="lg" />
          <MDBTextArea className='mb-4' label='Message' id='textAreaExample' rows={4} />
            
            <div className="button">
            <MDBBtn className="mb-4">Submit</MDBBtn>
            </div>
          </MDBCardBody>
        </MDBCard>
      </div>
      <Footer />
    </>
  );
}

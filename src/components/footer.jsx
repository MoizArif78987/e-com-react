import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
// import './footer.css'

export default function Footer() {
  return (
    <>
    <footer className="footer  text-white">
    <MDBFooter style={{backgroundColor:'rgb(1, 1, 63)'}} className='text-center text-lg-start text-muted'>
      <section style={{paddingTop:'25px'}}>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon color='secondary' icon='gem' className='me-3' />
                E-COMMERCE STORE
              </h6>
              <p>
              At Our Ecommerce Store, we are passionate about providing exceptional products and an unparalleled shopping experience. We strive to offer a curated selection of high-quality items that meet the diverse needs and tastes of our valued customers
              </p>
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Home
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Product
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Cart
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Contact Us
                </a>
              </p>
            </MDBCol>

            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Social links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Facebook
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Instagram
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Twitter
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Linkedin
                </a>
              </p>
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon color='secondary' icon='home' className='me-2' />
                New York, NY 10012, US
              </p>
              <p>
                <MDBIcon color='secondary' icon='envelope' className='me-3' />
                info@ecommerce.com
              </p>
              <p>
                <MDBIcon color='secondary' icon='phone' className='me-3' /> + 01 234 567 88
              </p>
              <p>
                <MDBIcon color='secondary' icon='print' className='me-3' /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2021 Copyright:
        <a className='text-reset fw-bold' href=''>
          E-commerce.com
        </a>
      </div>
    </MDBFooter>
       
        
    </footer>

    </>
  );
}
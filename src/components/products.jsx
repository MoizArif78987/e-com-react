import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import './products.css'
import React, { useState } from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple,
  MDBRow
} from 'mdb-react-ui-kit';

var Cart = JSON.parse(localStorage.getItem('Cart'))
var totalCart= Cart;


export default function Products({product}) {
  function handleClick(e){
    e.preventDefault();
    var alreadyBought=false;
    for(var i=0;i<totalCart.length;i++)
    {
      if(totalCart[i].title==product.title)
      {
        totalCart[i].quantity+=1;
        alreadyBought=true;
        break;
      }
    }
    if(alreadyBought==false)
    {
      totalCart.push(
        {
          'image':product.image,
          'title':product.title,
          'quantity':1,
          'price':product.price
        }
      )
    }
    console.log(product.title + ' pushed to cart')
    console.log(Cart)
    localStorage.setItem('Cart',JSON.stringify(totalCart))
  }
  return (
    <>
    
    <MDBCard className='card'>
      <MDBCardImage src={product.image} alt={product.title} position='top' className='card-img-top'/>
      <MDBCardBody>
        <MDBCardTitle>{product.title}</MDBCardTitle>
        <MDBCardText className='description'>{product.description}</MDBCardText>
        <MDBCardText style={{fontSize:'30px', color:'orange', fontWeight:'700'}}>${product.price}</MDBCardText>
        <MDBBtn className='btn' color='primary' onClick={handleClick} >Add to Cart</MDBBtn>
      </MDBCardBody>
    </MDBCard>
        </>
  )
}
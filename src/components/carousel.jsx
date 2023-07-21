import React from 'react'
import {
    MDBCarousel,
    MDBCarouselItem,
  } from 'mdb-react-ui-kit';  


export default function Carousel() {
  return (
    <div >
        <MDBCarousel showControls fade>
    <MDBCarouselItem
      className='w-100 d-block'
      itemId={1}
      src='/images/image1.jpg'
      alt='Loading'
    />
    <MDBCarouselItem
      className='w-100 d-block'
      itemId={2}
      src='/images/image2.png'
      alt='Loading'
    />
    <MDBCarouselItem
      className='w-100 d-block'
      itemId={3}
      src='/images/image3.png'
      alt='Loading'
    />
  </MDBCarousel></div>
  )
}

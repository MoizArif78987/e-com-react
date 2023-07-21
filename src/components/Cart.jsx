import React from 'react'
import './cart.css'
import Navbar from "./navbar";
import Footer from "./footer";


var TotalCart = JSON.parse(localStorage.getItem('Cart'));
var Total=0;
for(var i=0;i<TotalCart.length;i++)
{
  Total += TotalCart[i].price * TotalCart[i].quantity

}
Total = Total.toFixed(2);
export default function Cart() {
  console.log(TotalCart)
  console.log(Total)
  return (
    <>
    <Navbar/>
    <div className='container'>

      {TotalCart.map((item)=>(
        <div className='cartItem'>
        <div className='itemImg'>
        <img src={item.image} alt="Loading" />
        </div>
        <div className='ItemName'>
          <p>Name</p>
          <h4>{item.title}</h4>
        </div>
        <div className='ItemQuantity'>
          <p>quantity</p>
          <h3>{item.quantity}</h3>
        </div>
        <div className='ItemPrice'>
          <p>Per Unit Price</p>
          <h3>${item.price}</h3>
        </div>
        <div className='ItemTotalPrice'>
          <p>Total Price</p>
          <h3>${item.price * item.quantity}</h3>
        </div>
      </div>
      )
      
      )}

      <div className='Bill'>
        <h3>Total Price: ${Total}</h3>
      </div>

    </div>
    <Footer/>
    </>
  )
}

import Navbar from './navbar'
import React from 'react'
import Products from './products';
import { useEffect, useState } from 'react'
import './products.css'
import Footer from './footer';

export default function ProductPage() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        async function fetchData(){
            const response = await fetch('https://fakestoreapi.com/products');
            const responseData = await response.json(); 
            setProducts(responseData);
        }
        fetchData();
  }, []);

    return (
    <>
    <Navbar/>
    <div className='products-container'>
    {products.map((product) => (
        <Products key={product.id} product={product} />
    ))}
    </div>
    <Footer/>
    </>
  )
}

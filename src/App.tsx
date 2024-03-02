/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from 'react';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import ProductCard from './component/ProductCard';
import Cold from './assets/Cold.json';
import Snacks from './assets/Snacks.json';
import Hot from './assets/Hot.json';
import './App.css';

interface Product {
  image: string;
  title: string;
  catagory: string;
  price: number
}
const App: React.FC = () => {
  const [currProduct, setCurrProduct] = useState<string>('Hot');
  const [cart, setCart] = useState<{ title: string, price: number, quantity: number }[]>([]);
  const [totalQuantityInCart, setTotalQuantityInCart] = useState<number>(
    parseInt(localStorage.getItem('quantity') ?? '') || 0
  );

  const Products = { Hot, Cold, Snacks };

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  const handleAddToCart = (title: string, price: number) => {
    const existingCart = localStorage.getItem('cart');
    let updatedCart = [];
  
    if (existingCart) {
      updatedCart = JSON.parse(existingCart);
    }
    const existingProductIndex = updatedCart.findIndex((item: { title: string }) => item.title === title);
  
    if (existingProductIndex !== -1) {
      updatedCart[existingProductIndex].quantity += 1;
    } else {
      updatedCart.push({ title, price, quantity: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setCart(updatedCart);   
 
    const totalQuantity = updatedCart.reduce((total: number, product: { quantity: number }) => total + product.quantity, 0);
    setTotalQuantityInCart(totalQuantity);
    localStorage.setItem('quantity', totalQuantity.toString());
  };
  

  return (
    <div className="App flex flex-col items-center justify-center">
      <Navbar totalQuantityInCart={totalQuantityInCart} cart={cart} setCart={setCart} setTotalQuantityInCart = {setTotalQuantityInCart}/>
      <div className="container flex flex-col ">
        <div className='flex text-xl font-bold primary-color gap-8 pb-4 md:hidden'>
          {Object.keys(Products).map((productType, index) => (
            <div key={index} className={`category ${currProduct === productType ? 'active' : ''}`} onClick={() => setCurrProduct(productType)}>
              {productType}
            </div>
          ))}
        </div>
        <div className='Hdivider md:hidden'></div>
        <div className='md:hidden'>
          {(Products[currProduct] as Product[]).map((item: Product, index: number) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <ProductCard title={item.title} price={item.price} image={item.image} handleAddToCart={handleAddToCart} />
            </div>
          ))}
        </div>
        <div className='md:flex flex-col hidden'>
          {Object.keys(Products).map((productType, index) => (
            <div key={index}>
              <div className='category pb-4 text-2xl font-bold text-left'>{productType}</div>
              <div className='Hdivider'></div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 py-2">
                {(Products as any)[productType].map((item: Product, index: number) => (
                  <ProductCard key={index} title={item.title} price={item.price} image={item.image} handleAddToCart={handleAddToCart} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;

/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import ProductCard from './component/ProductCard';
import Cold from './assets/Cold.json';
import Snacks from './assets/Snacks.json';
import Hot from './assets/Hot.json';
import useCart from './Hooks/useCart';
import './App.css';

interface Product {
  image: string;
  title: string;
  category: string;
  price: number;
}

const App: React.FC = () => {
  const { cart, totalQuantityInCart, handleAddToCart, handleRemoveFromCart, setCart, setTotalQuantityInCart } = useCart(JSON.parse(localStorage.getItem('cart') || '[]'))
  const [currProduct, setCurrProduct] = useState<string>('Hot');
  const Products = { Hot, Cold, Snacks };

  return (
    <div className="App flex flex-col items-center justify-center">
      <Navbar />
      <div className="container flex flex-col ">
        <div className='flex text-xl font-bold primary-color gap-8 pb-4 pt-2 md:hidden sticky -top-1 z-10 md:static bg'>
          {Object.keys(Products).map((productType, index) => (
            <div key={index} className={`category ${currProduct === productType ? 'active' : ''}`} onClick={() => setCurrProduct(productType)}>
              {productType}
            </div>
          ))}
        </div>
        <div className='Hdivider md:hidden'></div>
        <div className='md:hidden'>
          {(Products[currProduct as keyof typeof Products] as Product[]).map((item: Product, index: number) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <ProductCard
                title={item.title}
                price={item.price}
                image={item.image}
                handleAddToCart={handleAddToCart}
                handleRemoveFromCart={handleRemoveFromCart}
                cartItemQuantity={(cart.find(cartItem => cartItem.title === item.title)?.quantity) || 0}
              />
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
                  <ProductCard
                    key={index}
                    title={item.title}
                    price={item.price}
                    image={item.image}
                    handleAddToCart={handleAddToCart}
                    handleRemoveFromCart={handleRemoveFromCart}
                    cartItemQuantity={(cart.find(cartItem => cartItem.title === item.title)?.quantity) || 0}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer totalQuantityInCart={totalQuantityInCart} cart={cart} setCart={setCart} setTotalQuantityInCart={setTotalQuantityInCart} />
    </div>
  );
}

export default App;

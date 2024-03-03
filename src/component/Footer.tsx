import React, { useState } from 'react';
import CartSummary from './CartSummary';
import { IoCartOutline } from 'react-icons/io5';
interface FooterProps {

  cart: { title: string; price: number; quantity: number }[];
  setCart: React.Dispatch<React.SetStateAction<{ title: string; price: number; quantity: number }[]>>;
  setTotalQuantityInCart: React.Dispatch<React.SetStateAction<number>>;
  totalQuantityInCart: number;
}
const Footer: React.FC<FooterProps> = ({ totalQuantityInCart, cart, setCart, setTotalQuantityInCart }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  return (

    <footer className="flex flex-col sticky bottom-2 md:justify-center items-center ">
      {totalQuantityInCart > 0 && isCartOpen && <CartSummary cart={cart} setCart={setCart} closeCart={() => setIsCartOpen(false)} totalQuantityInCart={totalQuantityInCart} setTotalQuantityInCart={setTotalQuantityInCart} />}
      <h2 className='text-4xl font-bold py-2 px-8 rounded-full flex justify-center items-center Footer'
        onClick={() => setIsCartOpen(true)} >
        Checkout <div className='relative flex'>
          <span className='text-5xl'>
            <IoCartOutline />
          </span>
          <p className="text-xs absolute left-6 top-3">{totalQuantityInCart}</p>
        </div>
      </h2>

    </footer>
  );
};

export default Footer;

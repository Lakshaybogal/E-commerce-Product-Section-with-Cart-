import React, { useState } from 'react';
import { IoCartOutline, IoSearchOutline } from 'react-icons/io5';
import styles from '../utili/Navbar.module.css';
import CartSummary from './CartSummary';

interface NavbarProps {

    cart: { title: string; price: number; quantity: number }[];
    setCart: React.Dispatch<React.SetStateAction<{ title: string; price: number; quantity: number }[]>>;
    setTotalQuantityInCart: React.Dispatch<React.SetStateAction<number>>;
    totalQuantityInCart: number;
}

const Navbar: React.FC<NavbarProps> = ({ totalQuantityInCart, cart, setCart, setTotalQuantityInCart }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);

    return (
        <nav className="flex flex-col justify-center items-center gap-6 pb-5">
            <div className='flex items-center'>
                <div className="pl-24 pr-14 md:pr-[155%]">
                    <h1 className="text-3xl font-bold">QuickCafe</h1>
                </div>
                <div className='relative flex'>
                    <span className='text-5xl'>
                        <IoCartOutline onClick={() => setIsCartOpen(true)} />
                    </span>
                    <p className="text-xs absolute left-5 top-3">{totalQuantityInCart}</p>
                </div>
            </div>
            <div className='flex items-center relative'>
                <span className='absolute left-3 text-3xl primary-color'>
                    <IoSearchOutline />
                </span>
                <input className={`${styles.searchBar} py-3 px-12 text-2xl rounded-lg w-[90vw] md:w-[85vw]`} type="text" placeholder='Search' />
            </div>
            {totalQuantityInCart > 0 && isCartOpen && <CartSummary cart={cart} setCart={setCart} closeCart={() => setIsCartOpen(false)} totalQuantityInCart={totalQuantityInCart} setTotalQuantityInCart={setTotalQuantityInCart} />}
        </nav>
    );
};

export default Navbar;

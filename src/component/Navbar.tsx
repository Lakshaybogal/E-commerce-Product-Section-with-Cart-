import React, { useState } from 'react';
import { IoMenu, IoCloseSharp } from 'react-icons/io5';
import styles from '../utili/Navbar.module.css';

const Navbar: React.FC = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <nav className="flex flex-col items-center gap-6 md:p-5 p-2 md:sticky top-1 z-10 bg w-full drop-shadow-xl rounded-md m-1">
            <div className='flex items-center justify-between'>
                <div>
                    <h1 className="md:text-5xl text-3xl font-bold pr-32 md:pr-0">QuickCafe</h1>
                </div>
                {/* Show menu toggle button only for small screens */}
                <p className="md:hidden" onClick={() => setShowMenu(!showMenu)}>
                    <span className='text-3xl'>
                        {showMenu ? <IoCloseSharp /> : <IoMenu />}
                    </span>
                </p>
            </div>
            {/* Menu items for mobile view */}
            {showMenu && (
                <div className='text-2xl font-bold flex flex-col justify-center items-center gap-3 z-20'>
                    <p>Home</p>
                    <p>Product</p>
                    <p>Services</p>
                </div>
            )}
            {/* Menu items for desktop view */}
            <div className={`text-2xl font-bold hidden md:flex justify-center items-center gap-10 ${styles.navBar} py-2 rounded-lg`}>
                <p>Home</p>
                <p>Product</p>
                <p>Services</p>
            </div>
        </nav>
    );
};

export default Navbar;

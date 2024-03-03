import React, { useState } from 'react';
import { IoMenu, IoCloseSharp } from 'react-icons/io5';

const Navbar: React.FC = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <nav className="flex flex-col md:flex-row items-center justify-between p-2 md:sticky -top-1 m-1 z-10 bg w-full drop-shadow-xl rounded-lg md:rounded-full ">

            <div className='flex gap-[30%]'>
                <h1 className="md:text-5xl text-3xl font-bold pl-8">QuickCafe</h1>

                <span className='text-3xl md:hidden'
                    onClick={() => setShowMenu(!showMenu)}
                >
                    {showMenu ? <IoCloseSharp /> : <IoMenu />}
                </span>
            </div>

            {showMenu && (
                <div className='text-2xl font-bold flex flex-col justify-center items-center gap-3 mt-5 '>
                    <p>Home</p>
                    <p>Product</p>
                    <p>Services</p>
                </div>
            )}

            <div className={`text-2xl font-bold hidden md:flex justify-center items-center gap-6  py-2 rounded-lg `}>
                <p className='menu py-2 px-5 rounded-3xl'>Home</p>
                <p className='menu py-2 px-5 rounded-3xl'>Product</p>
                <p className='menu py-2 px-5 rounded-3xl'>Services</p>
            </div>
        </nav>
    );
};

export default Navbar;

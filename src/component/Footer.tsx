import React from 'react';
import { FaInstagram, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col md:flex-col py-4 px-8 Footer w-full m-2 rounded-md md:justify-center items-center gap-2">
      <h2 className='text-3xl font-bold'>
        QuickCafe
      </h2>

      <div className='flex md:flex-row flex-col gap-3 md:gap-6 text-2xl md:text-3xl font-bold md:justify-center justify-start md:items-center '>
        <div className='flex gap-4'>
          <FaInstagram />
          Instagram
        </div>
        <div className='flex gap-4'>
          <FaLinkedin />
          LinkedIn
        </div>
        <div className='flex gap-4'>
          <FaTwitterSquare />
          Twitter
        </div>
      </div>

    </footer>
  );
};

export default Footer;

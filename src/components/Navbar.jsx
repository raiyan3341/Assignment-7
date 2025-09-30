import React from 'react';

const Navbar = () => {
    return (
        <div className=' max-w-[1240px] mx-auto flex justify-between mt-10 bg-white'>
            <div>
                <p className='font-bold text-lg text-[#130B2D]'>CS — Ticket System</p>
            </div>
            <div className='flex gap-6 items-center'>
                <a href="">Home</a>
                <a href="">FAQ</a>
                <a href="">Changelog</a>
                <a href="">Blog</a>
                <a href="">Download</a>
                <a href="">Contact</a>
                <button className='bg-gradient-to-tr from-[#632ee3] to-[#9f62f2] w-[140px] h-[40px] rounded-xl text-white'><span className='text-2xl'>+</span> New Ticket</button>
            </div>
        </div>
    );
};

export default Navbar;
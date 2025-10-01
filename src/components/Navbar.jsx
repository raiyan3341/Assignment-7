import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () =>{
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-[1240px] mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div>
            <p className="font-bold text-xl text-[#130B2D]">CS — Ticket System</p>
          </div>
          <div className="hidden md:flex gap-6 items-center">
            <a href="">Home</a>
            <a href="">FAQ</a>
            <a href="">Changelog</a>
            <a href="">Blog</a>
            <a href="">Download</a>
            <a href="">Contact</a>
            <button className="bg-gradient-to-tr from-[#632ee3] to-[#9f62f2] w-[140px] h-[40px] rounded-xl text-white">
              <span className="text-2xl">+</span> New Ticket
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X/> : <Menu/>}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          <a href="" className="block">Home</a>
          <a href="" className="block">FAQ</a>
          <a href="" className="block">Changelog</a>
          <a href="" className="block">Blog</a>
          <a href="" className="block">Download</a>
          <a href="" className="block">Contact</a>
          <button className="w-full bg-gradient-to-tr from-[#632ee3] to-[#9f62f2] py-2 rounded-xl text-white">
            <span className="text-xl">+</span> New Ticket
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

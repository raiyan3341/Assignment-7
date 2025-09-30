import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-6 mt-15 sm:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 border-b border-gray-800 pb-10">

          <div className="col-span-2 md:col-span-1">
            <h1 className="text-xl font-bold mb-4">CS — Ticket System</h1>
            <p className="text-sm text-gray-400 pr-8">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
          </div>

          <div>
            <h1 className="text-lg font-semibold mb-4">Company</h1>
            <ul className="space-y-3">
              <li>
                <a href="" className="text-gray-400 hover:text-white text-sm">About Us</a>
              </li>
              <li>
                <a href="" className="text-gray-400 hover:text-white text-sm">Our Mission</a>
              </li>
              <li>
                <a href="" className="text-gray-400 hover:text-white text-sm">Contact Sales</a>
              </li>
            </ul>
          </div>

          <div>
            <h1 className="text-lg font-semibold mb-4">Services</h1>
            <ul className="space-y-3">
              <li>
                <a href="" className="text-gray-400 hover:text-white text-sm">Products & Services</a>
              </li>
              <li>
                <a href="" className="text-gray-400 hover:text-white text-sm">Customer Stories</a>
              </li>
              <li>
                <a href="" className="text-gray-400 hover:text-white text-sm">Download Apps</a>
              </li>
            </ul>
          </div>

          <div>
            <h1 className="text-lg font-semibold mb-4">Information</h1>
            <ul className="space-y-3">
              <li>
                <a href="" className="text-gray-400 hover:text-white text-sm">Privacy Policy</a>
              </li>
              <li>
                <a href="" className="text-gray-400 hover:text-white text-sm">Terms & Conditions</a>
              </li>
              <li>
                <a href="" className="text-gray-400 hover:text-white text-sm">Join Us</a>
              </li>
            </ul>
          </div>

          <div>
            <h1 className="text-lg font-semibold mb-4">Social Links</h1>
            <ul className="space-y-3">
              <li>
                <a href="" className="flex items-center text-gray-400 hover:text-white text-sm">
                  <span className="mr-2 text-xl ">@</span>@CS — Ticket System
                </a>
              </li>
              <li>
                <a href="" className="flex items-center text-gray-400 hover:text-white text-sm">
                  <span className="mr-2 text-xl ">@</span>@CS — Ticket System
                </a>
              </li>
              <li>
                <a href="" className="flex items-center text-gray-400 hover:text-white text-sm">
                  <span className="mr-2 text-xl ">f</span>@CS — Ticket System
                </a>
              </li>
              <li>
                <a href="" className="flex items-center text-gray-400 hover:text-white text-sm">
                  <span className="mr-2 text-xl ">@</span>support@cst.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 text-center text-sm text-gray-500">
          &copy; 2025 CS — Ticket System. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

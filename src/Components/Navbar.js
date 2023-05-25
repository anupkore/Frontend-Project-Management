import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1 text-lg font-semibold">
          <Link to={"/"}>POC Project</Link>
        </div>
       
        <div className="hidden lg:flex lg:flex-1 lg:justify-end ">
        <Link to={"/profile"} className="text-lg font-semibold leading-6 text-gray-900 mx-3">
          Profile 
          </Link>
          <Link to={"/"} className="text-lg font-semibold leading-6 text-gray-900">
          Logout <span aria-hidden="true">&rarr;</span> 
          </Link>
        </div>
      </nav>
    </header>
  );
}
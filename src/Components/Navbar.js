import React from 'react';
import { Link } from 'react-router-dom';
import { cursor } from 'react-bootstrap';

export default function Navbar() 
{
    const userName = localStorage.getItem("USERNAME");

    function handleLogout()
    {
      localStorage.removeItem("USERNAME");
      window.location.href = "/" ;
    }
    
      const linkStyle = {
        cursor: 'pointer',
      };

  return (
    <header className="bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1 text-lg font-semibold">
          <Link to={"/"}>POC Project</Link>
        </div>

        <div className="flex lg:flex-1 text-lg font-semibold lg:justify-center">
          Welcome {userName}
        </div>
       
        <div className="hidden lg:flex lg:flex-1 lg:justify-end ">
          <Link to={"/profile"} className="text-lg font-semibold leading-6 text-gray-900 mx-3 lg:justify-end">
            Profile 
          </Link>

          
          <legend style={linkStyle} className="text-lg font-semibold leading-6 text-gray-900 lg:justify-end pointer-cursor" onClick={handleLogout}>
            Logout <span aria-hidden="true">&rarr;</span> 
          </legend>
          
        </div>

      </nav>
    </header>
);
}
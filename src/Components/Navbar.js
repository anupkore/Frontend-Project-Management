import React from 'react';
import { Link } from 'react-router-dom';
import { cursor } from 'react-bootstrap';
import Profilepage from './Profilepage';

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
      <nav className="mx-auto flex max-w-7xl items-center justify-between py-4 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1 text-lg font-semibold">
          <Link to={"/"}><img src='/Images/jira-low-resolution-logo-color-on-transparent-background.png' alt='PMT LOGO' height="100px" width="100px"></img></Link>
        </div>

        <div className="mx-auto lg:flex-1 text-lg font-semibold lg:justify-center ">
          Welcome {userName}
        </div>
       
        <div className="text-lg font-semibold leading-6 text-gray-900   ">
          <div>
            <Profilepage></Profilepage>
          </div>

          
          {/* <legend style={linkStyle} className="text-lg font-semibold leading-6 text-gray-900 lg:justify-end pointer-cursor" onClick={handleLogout}>
            Logout <span aria-hidden="true">&rarr;</span> 
          </legend>
           */}
        </div>

      </nav>
    </header>
);
}
import React from 'react';
import { Link } from 'react-router-dom';
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
          <Link to={"/"}><img src='/Images/jira-low-resolution-logo-color-on-transparent-background.png' alt='PMT LOGO' height="30px" width="30px"></img></Link>
          <h1 className='ml-5'>Project Planner App</h1>
        </div>
       <div className="text-lg font-semibold leading-6 text-gray-900   ">
          <div>
            <Profilepage></Profilepage>
          </div>
        </div>

      </nav>
    </header>
);
}

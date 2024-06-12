import React, { useState } from 'react';
import logo from '../Assests/logo.jpeg';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavLinkClick = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  return (
    <nav className="bg-black shadow-lg sticky top-0 z-40 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-5">
          <Link to="/" onClick={handleNavLinkClick}>
            <img src={logo} alt="logo" className="h-10 rounded" />
          </Link>

          <div className="flex items-center space-x-14">
            <div className="hidden md:flex items-center space-x-4">
              {['home', 'about', 'highlight', 'price', 'gallery','amenities', 'location', 'contact'].map((item) => (
                <ScrollLink
                  key={item}
                  to={item}
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="nav-link cursor-pointer pb-1 border-b-2 border-transparent hover:border-[#fbad5a]"
                  activeClass="border-[#fbad5a]"
                  onClick={handleNavLinkClick}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </ScrollLink>
              ))}
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="mobile-menu-button focus:outline-none">
              <svg
                className={`w-6 h-6 ${isOpen ? 'text-gray-300' : 'text-white'}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden bg-white shadow-lg rounded-lg p-4 space-y-2 text-left">
            {['home', 'about', 'highlight', 'price','gallery', 'amenities',  'location', 'contact'].map((item) => (
              <ScrollLink
                key={item}
                to={item}
                spy={true}
                smooth={true}
                duration={500}
                onClick={handleNavLinkClick}
                className="block py-2 px-4 text-gray-800 rounded-lg hover:bg-[#fbad5a]"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </ScrollLink>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

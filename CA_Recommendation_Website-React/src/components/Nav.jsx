import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import arrow from '/img/arrow.svg';
import logo from '/img/logo.png';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    
      <div className="navbar-container h-[85px] max-w-6xl mx-auto flex items-center justify-between py-3 bg-white">
        
        <div className="navbar w-full h-full flex items-center justify-between">
          <div className="logo w-44 px-4">
            <img src={logo} alt="" className="w-full" />
          </div>

          <div className="links flex items-center justify-between gap-5 mr-auto hidden lg:flex">
            <div className="link-box flex">
              <a href="#">Solutions</a>
              <img src={arrow} alt="" />
            </div>

            <div className="link-box flex">
              <a href="#">Features</a>
              <img src={arrow} alt="" />
            </div>

            <div className="link-box flex">
              <a href="#">Blog</a>
            </div>

            <div className="link-box flex">
              <a href="#">About</a>
              <img src={arrow} alt="" />
            </div>
          </div>

          <div className="navbtn flex gap-5 w-38 p-3 hidden lg:flex">
            <button className=" bg-white text-custom-color py-1.5 px-4 border-2 border-custom-color rounded-md">
              Login
            </button>
            <button className="bg-custom-color text-white py-1.5 px-4 border-2 border-custom-color rounded-md">
              Register
            </button>
          </div>

          <div className="menuicon text-2xl w-8 m-9 p-3 lg:hidden">
            <button onClick={toggleMenu} className="toggle-button">
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
        </div>
      </div>

      {isOpen && ( // Conditionally render the mobile menu
        <div className="navlink-mobile flex flex-col gap-4 bg-slate-200 absolute w-full py-8 px-8 z-50">
          <div className="link-box-mobile flex">
            <a href="#">Solutions</a>
            <img src={arrow} alt="" />
          </div>

          <div className="link-box-mobile flex">
            <a href="#">Features</a>
            <img src={arrow} alt="" />
          </div>

          <div className="link-box-mobile flex">
            <a href="#">Blog</a>
          </div>

          <div className="link-box-mobile flex">
            <a href="#">About</a>
            <img src={arrow} alt="" />
          </div>

          <div className="navbtn  flex gap-5 w-38">
            <button className=" bg-white text-custom-color py-1.5 px-4 border-2 border-custom-color rounded-md">
              Login
            </button>
            <button className="bg-custom-color text-white py-1.5 px-4 border-2 border-custom-color rounded-md">
              Register
            </button>
          </div>
          
        </div>
      )}
    </>
  );
};

export default Nav;

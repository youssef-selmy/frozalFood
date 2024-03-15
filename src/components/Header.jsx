import React, { useState } from 'react'
import menuIcon from '../assets/icons/menu.svg'
import logo from '../assets/mainLogo.svg'
import call_center from '../assets/icons/call_center.svg'
import xmark from '../assets/icons/xmark.svg'
import { SlScreenSmartphone } from "react-icons/sl";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link, NavLink, useLocation } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <MobileHeader />
      <DeskTopHeader />
    </>
  )
}

function MobileHeader() {
  const [showMenu, setMenu] = useState(false);
  return (
    <header className='relative lg:hidden flex h-[76px] items-center justify-between px-6 shadow-lg'>
      <div onClick={() => setMenu(true)}>
        <img src={menuIcon} alt="Menu" className='w-8' />
      </div>
      <Link to='/'>
        <img src={logo} alt="Logo" className='w-20' />
      </Link>
      <Link to='/contact-us'>
        <img src={call_center} alt="Phone Number" className='w-6' />
      </Link>
      <Menu showMenu={showMenu} setMenu={setMenu} />
    </header>
  )
}


function Menu({ showMenu, setMenu }) {
  const pages = [
    { name: 'Home', link: '/' },
    { name: 'About Us', link: '/about' },
    { name: 'Our Brand', link: '/brand' },
    { name: 'Our Store', link: '/store' },
    { name: 'Blogs', link: '/blogs' },
    { name: 'Contact Us', link: '/contact-us' },
  ]
  return (
    <div style={{ left: showMenu ? '0%' : '100%' }} className='z-10 h-screen w-screen flex flex-col bg-[#6CBE43] p-5 text-white fixed top-0 duration-300'>
      <button className='w-fit' onClick={() => setMenu(false)}>
        <img src={xmark} alt="Close" />
      </button>

      <div className='flex flex-col justify-around grow'>

        <div className='flex flex-col items-center text-2xl gap-5 mt-10'>
          {pages.map((ele, i) => <NavLink key={i} onClick={() => setMenu(false)} className={({ isActive }) => isActive ? 'text-white font-medium w-fit' : 'text-gray-200 w-fit'} to={ele.link}>{ele.name}</NavLink>)}
        </div>

        <div className='flex gap-5 flex-col items-center'>

          <div className='flex flex-col items-center lg:items-start lg:w-[170px]'>
            <div className='flex flex-col items-center lg:flex-row lg:items-center gap-2'>
              <SlScreenSmartphone size={22} />
              <p className='font-medium mt-2 lg:mt-0'>Call Us</p>
            </div>
            <span>Office Phone:</span>
          <span>(+20) 120 444 0672</span>
          <span>Factory Phone:</span>
          <span>(+20) 106 985 8582</span>
          </div>

          <div className='flex flex-col items-center lg:items-start lg:w-[170px]'>
            <div className='flex flex-col items-center lg:flex-row lg:items-center gap-2'>
              <MdOutlineEmail size={22} />
              <p className='font-medium mt-2 lg:mt-0'>Email</p>
            </div>
            <span>Info@frozal.com</span>
            <span>Sales@frozal.com</span>
          </div>

          <div className='flex flex-col items-center lg:items-start lg:w-[170px]'>
            <div className='flex flex-col items-center lg:flex-row lg:items-center gap-2'>
              <MdOutlineLocationOn size={25} />
              <p className='font-medium mt-2 lg:mt-0'>Location</p>
            </div>
            <span>Egypt, Ismailia</span>
          </div>

          <div className='flex gap-5'>
            <Link to='https://www.linkedin.com/company/frozal-food-company/' target='_blank' className='w-8 h-8 bg-white text-main-green flex justify-center items-center rounded-full'>
              <FaLinkedinIn />
            </Link>
            <Link to='https://www.facebook.com/profile.php?id=61555688709817&mibextid=ZbWKwL' target='_blank' className='w-8 h-8 bg-white text-main-green flex justify-center items-center rounded-full'>
              <FaFacebookF />
            </Link>
            <Link to='https://www.instagram.com/frozal_food?igsh=MXF2MGJucTlsZWZoNQ==' target='_blank' className='w-8 h-8 bg-white text-main-green flex justify-center items-center rounded-full'>
              <FaInstagram />
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}

function DeskTopHeader() {
  return (
    <header className='hidden lg:flex flex-col'>
      <TopBanner />
      <DeskTopNav />
    </header>
  )
}

function TopBanner() {
  return (
    <div className='bg-[#C6A868] w-full flex justify-center px-5'>
      <div className='w-[1050px] flex items-center justify-between text-white'>

      <p className='text-[32px] text-hover-blue'>Frozal Food</p>


        <div className='flex gap-5 items-center'>

        <div className='flex items-center gap-2 text-lg'>
  <SlScreenSmartphone />
  <p className='mb-'>
    <span className="contact-info">(+20) 120 444 0672</span>
    
  </p>
</div>

<div className='flex items-center gap-2 text-lg'>
  <MdOutlineEmail />
  <p className='mb-[3px]'>
    <span className="contact-info">Info@frozal.com</span>
  </p>
</div>


        </div>

        <div className='flex gap-5'>
  <Link to='https://www.linkedin.com/company/frozal-food-company/' target='_blank' className='w-8 h-8 bg-white text-[#C6A868] flex justify-center items-center rounded-full social-link'>
    <FaLinkedinIn />
  </Link>
  <Link to='https://www.facebook.com/profile.php?id=61555688709817&mibextid=ZbWKwL' target='_blank' className='w-8 h-8 bg-white text-[#C6A868] flex justify-center items-center rounded-full social-link'>
    <FaFacebookF />
  </Link>
  <Link to='https://www.instagram.com/frozal_food?igsh=MXF2MGJucTlsZWZoNQ==' target='_blank' className='w-8 h-8 bg-white text-[#C6A868] flex justify-center items-center rounded-full social-link'>
    <FaInstagram />
  </Link>
</div>


      </div>
    </div>
  )
}

function DeskTopNav() {
  const location = useLocation().pathname;
  const pages = [
    { name: 'Home', link: '/' },
    { name: 'About Us', link: '/about' },
    { name: 'Our Brand', link: '/brand' },
    { name: 'Our Store', link: '/store' },
    { name: 'Blogs', link: '/blogs' },
    { name: 'Contact Us', link: '/contact-us' },
  ]

  return (
    <div className='w-full flex justify-center items-center px-3'>
      <div className='flex justify-between items-center w-[900px] xl:w-[1100px] h-[128px]'>

        <Link to='/'>
          <img src={logo} alt="Logo" className='w-24' />
        </Link>

        <div className='flex gap-10'>
          {pages.map((ele, i) => <Link key={i} className={`${location === ele.link ? 'text-main-green' : ''} flex flex-col items-center duration-300`} to={ele.link}>
            <p>{ele.name}</p>
            <span className={`w-1 h-3 rounded  ${location === ele.link ? 'bg-main-green' : 'bg-white'} duration-300`}></span>
          </Link>)}
        </div>

        <Link to='contact-us' className='flex gap-2'>
          <img src={call_center} alt="Phone" className='' />
          <div>
            <p className='text-sm font-medium'>Technical Support</p>
            <p className='text-main-green font-semibold'>(+20) 120 444 0672</p>
          </div>
        </Link>

      </div>
    </div>
  )
}
export default Header
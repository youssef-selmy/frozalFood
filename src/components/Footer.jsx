import React from 'react'
import logoIcon from '../assets/logoIcon.svg'
import litelogo from '../assets/litelogo.svg'
import { SlScreenSmartphone } from "react-icons/sl";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { HashLink } from 'react-router-hash-link'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='bg-main-green relative text-white h-[1700px]  lg:h-[440px] flex flex-col justify-between'>
      <div className='flex justify-end w-full'>
        <img src={logoIcon} alt="Logo Icon" />
      </div>
      <div>
        <img src={logoIcon} alt="Logo Icon" className='rotate-180' />
      </div>

      <div className='absolute top-0 left-0 w-full h-full lg:h-[440px] flex flex-col lg:flex-row lg:justify-evenly px-5 gap-10 items-center py-10'>
        <Contact />
        <Company />
        <Fruits />
        <Vegetables />
      </div>
    </footer>
  )
}

function Contact() {
  return (
    <div className='flex flex-col items-center gap-5 lg:flex-col lg:justify-between lg:items-start lg:h-full'>
      <img src={litelogo} alt="Logo" className='w-[60px]' />
      <div className='flex gap-5 flex-col items-center'>

        <div className='flex flex-col items-center lg:items-start lg:w-[170px]'>
          <div className='flex flex-col items-center lg:flex-row lg:items-center gap-2'>
            <SlScreenSmartphone size={22} />
            <p className='font-medium mt-2 lg:mt-0'>Call Us</p>
          </div>
          <span>(+20) 120 444 0672</span>
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
  )
}

function Company() {
  const pages = [
    { name: 'Home', link: '/' },
    { name: 'About Us', link: '/about' },
    { name: 'Our Brand', link: '/brand' },
    { name: 'Our Store', link: '/store' },
    { name: 'Blogs', link: '/blogs' },
    { name: 'Contact Us', link: '/contact-us' },
  ]

  return (
    <div className='lg:h-full'>
      <h3 className='text-2xl font-semibold text-center'>Our Company</h3>
      <div className='flex flex-col items-center text-2xl gap-5 mt-10'>
        {pages.map((ele, i) => <Link key={i} onClick={() => setMenu(false)} className='text-gray-200 w-fit text-lg' to={ele.link}>{ele.name}</Link>)}
      </div>
    </div>
  )
}

function Fruits() {
  const fruits = [
    { name: 'Mango', link: '/store#mango' },
    { name: 'Pomegranate', link: '/store#pomegranate' },
    { name: 'Strawberry', link: '/store#straw' },
  ]

  return (
    <div className='lg:h-full'>
      <h3 className='text-2xl font-semibold text-center'>Fruits</h3>
      <div className='flex flex-col items-center text-2xl gap-5 mt-10'>
        {fruits.map((ele, i) => <HashLink smooth key={i} className='text-gray-200 w-fit text-lg' to={ele.link}>{ele.name}</HashLink>)}
      </div>
    </div>
  )
}

function Vegetables() {
  const vegetables = [
    { name: 'Artichoke', link: '/store#artichoke' },
    { name: 'Broccoli', link: '/store#proccoli' },
    { name: 'Carrot', link: '/store#carrot' },
    { name: 'Cauliflower', link: '/store#cauli' },
    { name: 'French Fries', link: '/store#frise' },
    { name: 'Green Beans', link: '/store#greenPeans' },
    { name: 'Green Peas', link: '/store#greenPeas' },
    { name: 'Mix Vegetables', link: '/store#mixedVeg' },
    { name: 'Okra', link: '/store#okra' },
    { name: 'Pumpkin', link: '/store#pumpkin' },
  ]

  return (
    <div className='lg:h-full'>
      <h3 className='text-2xl font-semibold text-center'>Vegetables</h3>
      <div className='flex lg:hidden flex-col items-center text-2xl gap-5 mt-10'>
        {vegetables.map((ele, i) => <HashLink smooth key={i} className='text-gray-200 w-fit text-lg' to={ele.link}>{ele.name}</HashLink>)}
      </div>
      <div className='hidden lg:flex justify-center gap-20'>
        <div className='flex flex-col items-center text-2xl gap-5 mt-10'>
          {vegetables.map((ele, i) => i < 5 && <HashLink smooth key={i} className='text-gray-200 w-fit text-lg' to={ele.link}>{ele.name}</HashLink>)}
        </div>
        <div className='flex flex-col items-center text-2xl gap-5 mt-10'>
          {vegetables.map((ele, i) => i >= 5 && <HashLink smooth key={i} className='text-gray-200 w-fit text-lg' to={ele.link}>{ele.name}</HashLink>)}
        </div>
      </div>
    </div>
  )
}
export default Footer
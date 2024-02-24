import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { FaWhatsapp } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Root = () => {

    return (

        <main className='overflow-hidden min-h-screen relative'>
            <Link to='https://api.whatsapp.com/send?phone=201204440672' target='_blank' className='fixed bottom-10 right-10 z-10 border border-white bg-[#4BAE4F] flex gap-2 items-center justify-center rounded-full p-2 md:px-5 text-white'>
                <FaWhatsapp className='w-6 h-6' />
                <p className='font-medium hidden md:block'>Whatsapp Us</p>
            </Link>
            <Header />
            <Outlet />
            <Footer />
        </main>
    )
}

export default Root
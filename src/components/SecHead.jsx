import React from 'react'
import greenicon from '../assets/greenicon.svg'

const SecHead = ({ title, children, image, className }) => {
    return (
        <div className={`flex justify-center lg:items-center lg:justify-between ${className} mt-10 lg:mt-0`}>
            <div className='flex flex-col gap-5'>
                <div className='relative flex justify-center lg:w-fit'>
                    <h2 className='text-main-green absolute -top-2 text-2xl lg:text-[28px] left-1/2 -translate-x-1/2 w-full text-center'>{title}</h2>
                    <img src={image} alt={title} className='w-[230px] lg:w-[320px]' />
                </div>
                <div>{children}</div>
            </div>
            <img src={greenicon} alt="Logo" className='hidden lg:block w-[150px]' />
        </div>
    )
}

export default SecHead
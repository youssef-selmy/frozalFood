import React, { useState } from 'react'
import whitLogo from '../assets/whitLogo.svg'
import contact from '../assets/SecHead/contact.svg'
import Section from '../components/Section'
import SecHead from '../components/SecHead'
import Card from '../components/Card'
import { IoPhonePortraitOutline } from "react-icons/io5"
import { FaRegUser } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { FaTelegramPlane } from "react-icons/fa";

const ContactUs = () => {
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  async function send(e) {
    setError('');
    e.preventDefault()
    if (!phone || !name || !email || !message) return setError('All Fields Are Required');

    const data = { name, email, phone, message }
    console.log(data)
    const res = await fetch('https://mix-mart.online/receive-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    console.log(res.ok)
    if (res.ok) {
      setSuccess('Email Sent Successfuly')
      setTimeout(() => setSuccess(''), 5000)
      setPhone('');
      setName('');
      setEmail('');
      setMessage('');
    } else setError('Something went wrong')
  }
  return (
    <Section>
      <SecHead image={contact} title='Contact Us' />
      <div className='flex justify-center mt-10'>

        <Card className='rounded-3xl overflow-hidden flex flex-col md:flex-row md:h-[500px] w-full max-w-[1100px]'>
          <div className='bg-gradient-to-b from-[#C6A868] to-[#6CBE43] flex flex-col justify-center items-center gap-3 h-[240px] p-4 md:h-[500px] md:w-1/2'>
            <img src={whitLogo} alt="Logo" className='w-[100px] md:w-ful' />
            <p className='text-white text-center'>For any inquiries, you can leave your message here and we will respond within 24 hours</p>
          </div>
          <form className='p-5 flex flex-col gap-5 md:w-1/2' onSubmit={send}>
            {error && <p className='text-center text-xl font-medium text-red-500'>{error}</p>}
            {success && <p className='text-center text-xl font-medium text-green-500'>{success}</p>}
            <div className='relative'>
              <input type="number" placeholder='Phone Number' className='p-2 w-full border-b outline-none pr-8' value={phone} onChange={(e) => setPhone(e.target.value)} />
              <IoPhonePortraitOutline className='absolute top-1/2 right-2 -translate-y-1/2' />
            </div>
            <div className='relative'>
              <input type="text" placeholder='Name' className='p-2 w-full border-b outline-none pr-8' value={name} onChange={(e) => setName(e.target.value)} />
              <FaRegUser className='absolute top-1/2 right-2 -translate-y-1/2' />
            </div>
            <div className='relative'>
              <input type="email" placeholder='Email' className='p-2 w-full border-b outline-none pr-8' value={email} onChange={(e) => setEmail(e.target.value)} />
              <MdOutlineEmail className='absolute top-1/2 right-2 -translate-y-1/2' />
            </div>
            <textarea placeholder='Enter Your Message' className='bg-gray-100 p-5 h-[200px] resize-none outline-none' value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
            <div className='flex justify-center'>
              <button className='bg-main-green rounded-xl w-full flex justify-center items-center gap-2 font-semibold py-3 text-white hover:text-main-green hover:bg-white border border-transparent hover:border-main-green duration-300' type='submit'>
                Send
                <FaTelegramPlane />
              </button>
            </div>
          </form>
        </Card>
      </div>

    </Section>
  )
}

export default ContactUs
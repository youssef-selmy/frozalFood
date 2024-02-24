import React, { useState } from 'react'
import Section from '../components/Section'
import SecHead from '../components/SecHead'
import store from '../assets/SecHead/store.svg'
import Card from '../components/Card'
import { storeTopNav, storeFruits, storeVegetables } from '../glopals'

import image1 from '../assets/about_specs/image1.svg'
import image2 from '../assets/about_specs/image2.svg'
import image3 from '../assets/about_specs/image3.svg'
import image4 from '../assets/about_specs/image4.svg'

import 'swiper/css';
import 'swiper/css/navigation';
import { IoArrowBack } from "react-icons/io5";
import { IoArrowForward } from "react-icons/io5";
import { PiPackage } from "react-icons/pi";
import { HashLink } from 'react-router-hash-link'

const OurStore = () => {
  return (
    <Section>
      <SecHead image={store} title='Our Store' />
      <Top />
      <Fruits />
      <Vegetables />
      <Specs />
    </Section>
  )
}

function Top() {
  return (
    <div className=''>
      <div className='flex flex-wrap justify-center gap-3'>
        {storeTopNav.map((ele, i) => <Card key={i} className='w-[80px] h-[80px] flex items-center justify-center rounded-lg group cursor-pointer'>
          <HashLink smooth to={ele.link}>
            <img src={ele.image} alt='Product' className='w-[50px] object-cover group-hover:w-[60px] duration-300' />
          </HashLink>
        </Card>)}
      </div>
    </div>
  )
}

function Fruits() {
  const pageWidth = window.innerWidth;
  return (
    <div className='flex flex-col gap-5 mt-10 items-center'>
      <h2 className='text-3xl font-semibold my-5'>Fruits</h2>
      {pageWidth < 1024 && <MobileCards data={storeFruits} />}
      {pageWidth >= 1024 && <DeskTopCards data={storeFruits} />}
    </div>
  )
}

function MobileCards({ data }) {
  return (
    <div className='flex flex-col gap-5 lg:hidden max-w-[600px]'>
      {data.map((ele, i) => <Card key={i} id={ele.id} className='p-5 rounded-lg flex flex-col gap-5'>

        <div className='flex justify-center'>
          <ImageSlider first={ele.images[1]} secound={ele.images[0]} />
        </div>
        <div>
          <h4 className='text-xl font-medium'>{ele.name}</h4>
          <p className='text-gray-400'>{ele.desc}</p>
        </div>

        <div>
          <div>
            <div>
              <h4 className='text-[#C6A868] text-lg font-medium'>Varieties & size</h4>
              <p className='text-gray-400'>{ele.varSize}</p>
            </div>

            <div>
              <h4 className='text-[#C6A868] text-lg font-medium'>Season</h4>
              <p>{ele.session}</p>
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-3'>

          <div>
            <h4 className='text-[#C6A868] text-lg font-medium'>Packaging</h4>
            <p>Retail Packing</p>
            <div className='flex gap-5'>
              <p className='text-main-blue'> <span>400</span> gm</p>
              <p className='text-main-blue'> <span>800</span> gm</p>
              <p className='text-main-green'> <span>1.00</span> kg</p>
              <p className='text-main-green'> <span>2.5</span> kg</p>
            </div>
          </div>

          <div className='text-lg font-medium text-gray-500'>
            <p>Carton</p>
            <div className='flex items-center gap-2'>
              <PiPackage />
              <p> 1/10 kg</p>
            </div>
          </div>

        </div>

      </Card>)}
    </div>
  )
}

function DeskTopCards({ data }) {
  return (
    <div className='hidden flex-col gap-5 lg:flex max-w-[900px] xl:max-w-[1100px]'>
      {data.map((ele, i) => <Card key={i} id={ele.id} className='p-5 rounded-lg flex flex-col lg:flex-row gap-10'>

        <ImageSlider first={ele.images[1]} secound={ele.images[0]} />

        <div>
          <div>
            <h4 className='text-xl lg:text-4xl font-medium lg:mb-4'>{ele.name}</h4>
            <p className='text-gray-400'>{ele.desc}</p>
          </div>

          <div className='flex flex-col gap-5 mt-5'>
            <div>
              <div className='flex gap-5'>
                <div>
                  <h4 className='text-[#C6A868] text-lg font-medium'>Varieties & size</h4>
                  <p className='max-w-[400px] text-gray-400'>{ele.varSize}</p>
                </div>

                <div>
                  <h4 className='text-[#C6A868] text-lg font-medium'>Season</h4>
                  <p>{ele.session}</p>
                </div>
              </div>
            </div>

            <div className='flex gap-20 items-end'>

              <div className='text-lg font-medium text-gray-500'>
                <p>Carton</p>
                <div className='flex items-center gap-2'>
                  <PiPackage />
                  <p> 1/10 kg</p>
                </div>
              </div>

              <div>
                <h4 className='text-[#C6A868] text-lg font-medium'>Packaging</h4>
                <p>Retail Packing</p>
                <div className='flex gap-5'>
                  <p className='text-main-blue'> <span>400</span> gm</p>
                  <p className='text-main-blue'> <span>800</span> gm</p>
                  <p className='text-main-green'> <span>1.00</span> kg</p>
                  <p className='text-main-green'> <span>2.5</span> kg</p>
                </div>
              </div>

            </div>
          </div>
        </div>

      </Card>)}
    </div>
  )
}

function ImageSlider({ first, secound }) {
  const [index, setIndex] = useState(0);
  return (
    <div className='w-full max-w-[400px] lg:min-w-[300px] lg:max-w-[300px] h-[300px] relative'>

      <div className='h-full flex justify-center items-center'>
        <img src={first} alt="Product" className={`w-[250px] absolute ${index === 1 ? '' : 'opacity-0'} duration-300`} />
        <img src={secound} alt="Product" className={`w-[250px] absolute ${index === 0 ? '' : 'opacity-0'} duration-300`} />
      </div>

      {index === 1 && <button onClick={() => setIndex(0)} className='bg-[#F4F4F2] text-main-green p-2 rounded-full h-fit border border-main-green absolute z-10 top-1/2 -translate-y-1/2 left-0'><IoArrowBack /></button>}
      {index === 0 && <button onClick={() => setIndex(1)} className='bg-[#F4F4F2] text-main-green p-2 rounded-full h-fit border border-main-green absolute z-10 top-1/2 -translate-y-1/2 right-0'><IoArrowForward /></button>}

    </div>
  )
}

function Vegetables() {
  const pageWidth = window.innerWidth;
  return (
    <div className='flex flex-col gap-5 mt-10 items-center'>
      <h2 className='text-3xl font-semibold my-5'>Fruits</h2>
      {pageWidth < 1024 && <MobileCards data={storeVegetables} />}
      {pageWidth >= 1024 && <DeskTopCards data={storeVegetables} />}
    </div>
  )
}

function Specs() {
  return (
    <div className='flex flex-wrap gap-10 justify-center mt-10'>
      <img className='w-20 lg:w-[120px]' src={image1} alt="Image" />
      <img className='w-20 lg:w-[120px]' src={image2} alt="Image" />
      <img className='w-20 lg:w-[120px]' src={image3} alt="Image" />
      <img className='w-20 lg:w-[120px]' src={image4} alt="Image" />
    </div>
  )
}

export default OurStore
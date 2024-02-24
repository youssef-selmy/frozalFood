import React, { useEffect, useState } from 'react'
import Section from '../components/Section'
import SecHead from '../components/SecHead'
import Card from '../components/Card'
import blogs from '../assets/SecHead/blogs.svg'

const Blogs = () => {
  return (
    <Section>
      <SecHead image={blogs} title='Blogs' />
      <Content />
    </Section>
  )
}

function Content() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const res = await fetch('https://mix-mart.online/froBlog');
      const info = await res.json();
      console.log(info)
      setData(info.data)
    }
    getData()
  }, [])
  return (
    <div className='xs:flex flex-col items-center'>
      {data.map((ele, i) => <Card key={i} className='p-2 my-5 rounded-xl max-w-[380px] md:w-full md:max-w-full md:flex gap-5'>
        <div className='rounded-lg overflow-hidden md:min-w-[250px] md:w-[250px] md:min-h-[250px] md:h-[250px] md:relative'>
          <img src={ele.image[0]} alt="Product" className='md:absolute md:w-[250px] md:h-[250px] md:object-cover' />
        </div>
        <div className=''>
          <h3 className='text-2xl font-medium mt-2'>{ele.blogName}</h3>
          <span className='text-gray-400'>{ele.createdAt.split('T')[0]}</span>
          <p className='break-words text-gray-500'>{ele.description}</p>
        </div>
      </Card>)}
    </div>
  )
}

export default Blogs
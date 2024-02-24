import React from 'react'

const Section = ({children, className}) => {
  return (
    <section className={`py-5 sm:py-10 px-6 md:px-[80px] xl:px-[140px] 2xl:px-[240px] ${className}`}>{children}</section>
  )
}

export default Section
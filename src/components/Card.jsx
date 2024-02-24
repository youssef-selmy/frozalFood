import React from 'react'

const Card = ({ children, className, id = '', onClick }) => {
  return (
    <div id={id} onClick={onClick} className={`bg-white shadow-custom ${className}`}>{children}</div>
  )
}

export default Card
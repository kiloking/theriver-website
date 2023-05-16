import React from 'react'

function Header() {
  return (
    <div>
      <img src={process.env.PUBLIC_URL+'/images/release/header.jpg'} alt=""  className='w-full' data-aos="fade" data-aos-duration="1000"/>
    </div>
  )
}

export default Header
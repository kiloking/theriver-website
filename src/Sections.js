import React from 'react'

function Sections() {
  return (
    <div>
      <img src={process.env.PUBLIC_URL+'/images/release/section01.jpg'} alt="" className='w-full' data-aos="fade" data-aos-duration="1000"/>
      <img src={process.env.PUBLIC_URL+'/images/release/section02.jpg'} alt="" className='w-full' data-aos="fade" data-aos-duration="1000"/>
      <img src={process.env.PUBLIC_URL+'/images/release/section03.jpg'} alt="" className='w-full' data-aos="fade" data-aos-duration="1000"/>
      <img src={process.env.PUBLIC_URL+'/images/release/section04.jpg'} alt="" className='w-full' data-aos="fade" data-aos-duration="1000"/>
      <img src={process.env.PUBLIC_URL+'/images/release/section05.jpg'} alt="" className='w-full' data-aos="fade" data-aos-duration="1000"/>
    </div>
  )
}

export default Sections
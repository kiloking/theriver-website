import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from "swiper";
// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";
function Section06() {
  const imgs =[
    {image:"section06_p01.png"},
    {image:"section06_p02.png"},
    {image:"section06_p03.png"},
    {image:"section06_p04.png"},
    {image:"section06_p05.png"},
    {image:"section06_p06.png"},
    {image:"section06_p07.png"},
  ]
  return (
    <div 
      className='w-full  bg-no-repeat  bg-left-top  bg-[#f6e4d8] pb-12'
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL +'/images/release/section06.jpg'})`,
        backgroundSize: '100%'
      }}
    >
      <div className='pt-[21%] relative w-[95%]'>
        <div className='pt-[21%] absolute z-10 top-1 left-1 md:top-10 md:left-10 w-full pointer-events-none '> 
          <img src={process.env.PUBLIC_URL+'/images/release/section06_border.png'} alt="" className='w-full'/>
        </div>
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          pagination={{
            clickable: true,
          }} 
          modules={[Pagination,Autoplay]}
          autoplay={{delay:1800}}
          centeredSlides={true}
          className='w-full'
        >
          {
            imgs.map((item,index)=>{
              return(
                <SwiperSlide><img src={process.env.PUBLIC_URL+'/images/release/section06/'+ item.image} alt="" className='w-full' /></SwiperSlide>
              )
            })
          }
        </Swiper>
      </div>
    </div>
  )
}

export default Section06
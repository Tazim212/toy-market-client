/* eslint-disable no-unused-vars */
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import toy1 from '../../../../assets/banner Images/toy1.avif'
import toy2 from '../../../../assets/banner Images/toy2.avif'
import toy3 from '../../../../assets/banner Images/toy3.avif'
import toy4 from '../../../../assets/banner Images/toy4.avif'
import toy5 from '../../../../assets/banner Images/toy5.jpg'

const Carousel = () => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className='h-[450px] w-[100%]'
            >
                <SwiperSlide>
                    <img className='h-[450px] w-[1250px]' src={toy1} alt="" />
                    </SwiperSlide>
                <SwiperSlide>
                  <img className='h-[450px] w-[1250px]' src={toy2} alt="" />  
                    </SwiperSlide>
                <SwiperSlide>
                <img className='h-[450px] w-[1250px]' src={toy3} alt="" />
                    </SwiperSlide>
                <SwiperSlide>
                <img className='h-[450px] w-[1250px]' src={toy4} alt="" />
                    </SwiperSlide>
                <SwiperSlide>
                <img className='h-[450px] w-[1250px]' src={toy5} alt="" />
                    </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Carousel;
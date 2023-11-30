import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './sliderStyles.css'

// import Swiper core and required modules

// install Swiper modules


const ImageSlider = ({ images }) => {
    return (
        <Swiper
        modules={[EffectCoverflow, Pagination]}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false
        }}
        pagination={true}
        className="mySwiper"
        >
            {images.map((image, index) => (
                <SwiperSlide key={index}>
                    <img src={image} alt={`Slide ${index}`} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default ImageSlider;

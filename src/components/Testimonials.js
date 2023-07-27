import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import image01 from "../assets/images/Ammar.png"
import image02 from "../assets/images/Ali.png"

// import required modules
import { EffectCoverflow } from 'swiper/modules';

const Testimonials = () => {

    const testimonials = [
        {
            message: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
            It was popularised in the 1960s with the release of Letraset sheets containing Lorem`,
            by: 'Ammar Haider',
            imageSrc: image01
        },
        {
            message: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
            It was popularised in the 1960s with the release of Letraset sheets containing Lorem`,
            by: 'Ali',
            imageSrc: image02
        },
    ]


    return (
    <>
        <h1 className="heading">Client Testimonials</h1>
        <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 300,
            modifier: 1,
            slideShadows: true,
        }}
        loop={true}
        modules={[EffectCoverflow]}
        className="mySwiper"
        >
            
            {
                testimonials.map(testimonial => 
                    <SwiperSlide style={{display:'flex'}}>
                        <div>
                            <h1>Testimonials</h1>
                            <p>{ testimonial.message }</p>
                            <h3>{ testimonial.by }</h3>
                        </div>
                        <img src={testimonial.imageSrc} alt="the-insane-studio testimonials" />
                    </SwiperSlide>
                )
            }
        </Swiper>
    </>
  )
}

export default Testimonials;

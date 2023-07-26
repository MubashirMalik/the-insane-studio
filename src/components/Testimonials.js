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
import { EffectCoverflow, Autoplay } from 'swiper/modules';

const Testimonials = () => {
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
        autoplay={{
            delay:1000
        }}
        modules={[EffectCoverflow, Autoplay]}
        className="mySwiper"
        >
        <SwiperSlide style={{display:'flex'}}>
            <div>
                <h1>Testimonials</h1>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem
                </p>
            </div>
            <img src={image01} />
        </SwiperSlide>
        <SwiperSlide>
            <div>
                <h1>Testimonials</h1>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem
                </p>
            </div>
            <img src={image02} />
        </SwiperSlide>
        <SwiperSlide>
            <div>
                <h1>Testimonials</h1>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem
                </p>
            </div>
            <img src={image01} />
        </SwiperSlide>
        <SwiperSlide>
            <div>
                <h1>Testimonials</h1>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem
                </p>
            </div>
            <img src={image02} />
        </SwiperSlide>
        <SwiperSlide>
            <div>
                <h1>Testimonials</h1>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem
                </p>
            </div>
            <img src={image01} />
        </SwiperSlide>
        <SwiperSlide>
            <div>
                <h1>Testimonials</h1>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem
                </p>
            </div>
            <img src={image02} />
        </SwiperSlide>
        </Swiper>
    </>
  )
}

export default Testimonials;

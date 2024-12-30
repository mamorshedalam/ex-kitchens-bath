"use client";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper/modules";

export default function Gallery({ dataArray }: { dataArray: string[] }) {
  return (
    <Swiper
      slidesPerView={1}
      breakpoints={{
        768: {
          slidesPerView: 3,
          spaceBetween: 12,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 12,
        },
      }}
      navigation={true}
      loop={true}
      modules={[Navigation]}
    >
      {dataArray &&
        dataArray.map((image, index) => (
          <SwiperSlide key={index} virtualIndex={index}>
            <img src={image} alt="Gallery Image" />
          </SwiperSlide>
        ))}
    </Swiper>
  );
}

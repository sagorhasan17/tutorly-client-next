"use client";

import { Swiper, SwiperSlide } from "swiper/react";

// styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import FirstBanner from "./sections/banners/FirstBanner";
import SecondBanner from "./sections/banners/SecondBanner";
import ThirdBanner from "./sections/banners/ThirdBanner";

const SwiperSliderBanner = () => {
  return (
    <div className="w-full h-screen overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
        className="w-full relative"
      >
        <SwiperSlide className="w-full h-full">
          <FirstBanner />
        </SwiperSlide>

        <SwiperSlide className="w-full h-full">
          <SecondBanner />
        </SwiperSlide>

        <SwiperSlide className="w-full h-full">
          <ThirdBanner />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperSliderBanner;

import React, { useCallback, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./Slider.css";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";

function Slider(props) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const images = props.images;
  return (
    <div className="images">
      <Swiper
        speed={150}
        style={{
          "--swiper-navigation-color": "red",
          "--swiper-pagination-color": "black",
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        speed={150}
        //loop={true}
        spaceBetween={10}
        slidesPerView={images.length}
        freeMode={true}
        watchSlidesProgress={true}
        allowTouchMove={false}
        //navigation={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default React.memo(Slider);

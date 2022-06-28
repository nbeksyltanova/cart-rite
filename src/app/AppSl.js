import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

import "./styles.scss";
import SwiperCore, {
  EffectCoverflow,
  Pagination,
  Navigation,
} from "swiper/core";

SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

export default function AppSl() {
  return (
    <div className="body">
      <div className="containerr">
        <div className="title_wrapper">
          <div className="reactLogo"></div>
          <div className="title_"></div>
        </div>
        <Swiper
          navigation={true}
          effect={"coverflow"}
          centeredSlides={true}
          slidesPerView={window.innerWidth < 768 ? 1 : "auto"}
          loop={true}
          coverflowEffect={{
            rotate: 45,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{
            clickable: true,
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="/images/1img.png" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src="images/2img.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/3img.png" width={590} />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/4.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/5.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/6.jpg" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

const ProjectCarousel = ({ slides, zoomIn }) => {
  return (
    <section className="w-full relative">
      <p className="text-white bg-[#9A7A54] py-2 px-3 rounded absolute md:top-7 md:right-7 top-3 right-3 text-sm font-semibold z-10 font-raleway">
        Ongoing
      </p>
      <Swiper
        slidesPerView={1}
        spaceBetween={24}
        modules={[]}
        loop={true}
        className="mySwiper"
        speed={500}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {slides.map((slide, index) => {
          return (
            <SwiperSlide
              key={index}
              className="cursor-zoom-in"
              onClick={() => zoomIn(index)}
            >
              <img src={slide.image} alt={slide.alt} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default ProjectCarousel;

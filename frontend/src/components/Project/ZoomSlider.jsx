import ReactDOM from "react-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { VscChromeClose } from "react-icons/vsc";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";

const ZoomSlider = ({ slides, index, zoomOut }) => {
  return ReactDOM.createPortal(
    <>
      <div
        className="fixed top-0 left-0 w-full h-full z-30 bg-modal overflow-hidden cursor-zoom-out transition-all"
        onClick={zoomOut}
      />
      <VscChromeClose
        className="text-lg text-white cursor-pointer fixed top-10 right-10 z-[31]"
        onClick={zoomOut}
      />
      <div className="fixed top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 md:w-2/3 w-full p-5 md:p-0 z-30 overflow-hidden transition-all">
        <Swiper
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          slidesPerView={1}
          centeredSlides={true}
          speed={1000}
          initialSlide={index}
          modules={[Pagination, Navigation]}
          className="mySwiper w-full m-auto block cursor-grab z-[31]"
          onClick={""}
        >
          {slides.map((slide, index) => {
            return (
              <SwiperSlide className="w-full" key={index}>
                <img
                  src={slide.image}
                  alt={slide.alt}
                  className="w-full rounded"
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>,
    document.getElementById("modal")
  );
};

export default ZoomSlider;

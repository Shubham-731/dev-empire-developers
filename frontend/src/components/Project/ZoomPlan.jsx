import ReactDOM from "react-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { VscChromeClose } from "react-icons/vsc";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";

const ZoomPlan = ({ plans, index, zoomOut }) => {
  return ReactDOM.createPortal(
    <>
      <div
        className="fixed top-0 left-0 w-full h-full z-30 bg-modal overflow-hidden cursor-zoom-out transition-all"
        onClick={zoomOut}
      />
      <VscChromeClose
        className="fixed text-lg text-white cursor-pointer right-10 top-10 z-[32]"
        onClick={zoomOut}
      />
      <div className="fixed top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 md:w-2/3 w-full p-5 md:p-0 z-[31] overflow-hidden transition-all">
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
          {plans.map((plan, index) => {
            return (
              <SwiperSlide className="w-full m-auto" key={index}>
                <img
                  src={plan.image}
                  alt={plan.alt}
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

export default ZoomPlan;

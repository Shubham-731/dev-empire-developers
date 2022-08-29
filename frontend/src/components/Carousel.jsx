import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import axios from "axios";

import Spinner from "./Spinner";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";

const Carousel = ({ slides }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [showSpinner, setShowSpinner] = useState(false);

  const ContactUs = async (e) => {
    e.preventDefault();

    if (name === "" || email === "" || phone === "") {
      alert("All input fields are required.");
    } else if (phone.length !== 10) {
      alert("Phone number must be of 10 digits.");
    } else {
      setShowSpinner(true);

      // Submit enquiry form
      const url = `${window.location.origin}/contact`;
      const response = await axios.post(url, {
        name,
        email,
        phone,
      });

      if (response.status === 200) {
        alert("Enquiry submitted!");
        setShowSpinner(false);
      } else if (response.status === 500) {
        setShowSpinner(false);
        alert("Some error occured. Try again!");
      }

      // Clear form inputs
      setName("");
      setEmail("");
      setPhone("");
    }
  };

  return (
    <>
      {showSpinner ? <Spinner /> : ""}

      <section className="w-full relative">
        <Swiper
          spaceBetween={0}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          centeredSlides={true}
          navigation={true}
          slidesPerView={1}
          speed={1000}
          modules={[Autoplay, Navigation]}
          className="mySwiper flex w-[90%] items-center justify-between z-10"
        >
          {slides.map((slide, index) => {
            return (
              <SwiperSlide key={index}>
                <img
                  src={slide.image}
                  alt=""
                  className="w-full h-full md:h-[75vh] block m-auto rounded-b-md"
                />
              </SwiperSlide>
            );
          })}
        </Swiper>

        <div className="md:w-[350px] md:absolute w-[90%] relative mx-auto block top-1/4 md:right-[12.25%] bg-slate-100 md:opacity-90 py-4 px-3 border rounded z-[11]">
          <h1 className="text-center text-[24px] font-[500] mb-3">
            Contact Us
          </h1>

          <form>
            <input
              type="text"
              className="w-full border-b-2 border-slate-400 focus:border-slate-600 p-3 mb-2 bg-transparent focus:outline-none"
              placeholder="Name *"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              className="w-full border-b-2 border-slate-400 focus:border-slate-600 p-3 mb-2 bg-transparent focus:outline-none"
              placeholder="Email *"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="text"
              className="w-full border-b-2 border-slate-400 focus:border-slate-600 p-3 mb-3 bg-transparent focus:outline-none"
              placeholder="Phone *"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />

            <button
              className="py-3 w-full text-white border-white border-2 rounded-lg font-semibold cursor-pointer bg-[#9A7A54]"
              onClick={ContactUs}
              type="submit"
            >
              Contact
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Carousel;

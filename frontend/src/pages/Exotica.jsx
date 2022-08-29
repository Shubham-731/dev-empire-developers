import { useState } from "react";
import { FaBed } from "react-icons/fa";
import { Link } from "react-router-dom";

import ProjectCarousel from "../components/Project/Carousel";
import ProjectHeader from "../components/Project/Header";
import ProjectHighlights from "../components/Project/Highlights";
import AboutProject from "../components/Project/About";
import Brochure from "../components/Brochure";
import Amenities from "../components/Project/Amenities";
import UnitPlans from "../components/Project/UnitPlans";
import ZoomSlider from "../components/Project/ZoomSlider";
import ZoomPlan from "../components/Project/ZoomPlan";

import "./styles.css";

const ExoticaPage = () => {
  document.title = "Empire Exotica | Empire Developers";

  const sliderImages = [
    {
      image: "https://i.ibb.co/MnfcBcq/Empire-Exotica.png",
      alt: "Empire-Exotica",
    },
    {
      image: "https://i.ibb.co/YTq5Xqd/Interior-Render-Kitchen-scaled.jpg",
      alt: "Interior-Render-Kitchen-scaled",
    },
    {
      image: "https://i.ibb.co/yRZW7Sq/Interior-Render-Kids-Room-scaled.jpg",
      alt: "Interior-Render-Kids-Room-scaled",
    },
    {
      image: "https://i.ibb.co/Vw5LNGt/Interior-Render-Drawing-Room-scaled.jpg",
      alt: "Interior-Render-Drawing-Room-scaled",
    },
    {
      image: "https://i.ibb.co/9VtjC23/Interior-Render-Dining-Room-scaled.jpg",
      alt: "Interior-Render-Dining-Room-scaled",
    },
    {
      image: "https://i.ibb.co/xzcmzLR/Interior-Render-Bathroom-scaled.jpg",
      alt: "Interior-Render-Bathroom-scaled",
    },
    {
      image: "https://i.ibb.co/fkRXvzw/Interior-Render-4th-Room-scaled.jpg",
      alt: "Interior-Render-4th-Room-scaled",
    },
    {
      image: "https://i.ibb.co/ctFvFtV/Interior-Render-4-photo-scaled.jpg",
      alt: "Interior-Render-4-photo-scaled",
    },
    {
      image: "https://i.ibb.co/wYfZMgS/Back-Side-Amenities-High-Quality.png",
      alt: "Back-Side-Amenities-High-Quality",
    },
    {
      image: "https://i.ibb.co/88Bs4wd/2-Exterior-Aerial-View-scaled.jpg",
      alt: "2-Exterior-Aerial-View-scaled",
    },
  ];
  const planImages = [
    {
      image: "https://i.ibb.co/NCgxGyV/master-plan-1024x621.png",
      alt: "master-plan-1024x621",
      name: "Master Plan",
      category: "master-plan",
    },
    {
      image: "https://i.ibb.co/6spspqS/Typical-Type-D-1-1024x819.png",
      alt: "Typical-Type-D-1-1024x819",
      name: "2 BHK (Typical Type - D)",
      category: "2-bhk",
    },
    {
      image: "https://i.ibb.co/gS310Hg/Typical-Type-E-1024x655.png",
      alt: "Typical-Type-E-1024x655",
      name: "3 BHK (Typical Type - E)",
      category: "3-bhk",
    },
    {
      image: "https://i.ibb.co/2MPbMcF/Typical-Type-B-1024x655.png",
      alt: "Typical-Type-B-1024x655",
      name: "3 BHK (Typical Type - B)",
      category: "3-bhk",
    },
    {
      image: "https://i.ibb.co/fFF9Z5z/Typical-Type-C-1024x655.png",
      alt: "Typical-Type-C-1024x655",
      name: "4 BHK (Typical Type - C)",
      category: "4-bhk",
    },
    {
      image: "https://i.ibb.co/6NTvsy9/Typical-Type-A-1024x655.png",
      alt: "Typical-Type-A-1024x655",
      name: "3 BHK (Typical Type - C)",
      category: "3-bhk",
    },
    {
      image: "https://i.ibb.co/9WQ6DSq/Typical-Type-F-1024x655.png",
      alt: "Typical-Type-F-1024x655",
      name: "4 BHK (Typical Type - F)",
      category: "4-bhk",
    },
    {
      image: "https://i.ibb.co/j8NYHwJ/Typical-Type-G-Floor-1-1024x819.png",
      alt: "Typical-Type-G-Floor-1-1024x819",
      name: "Duplex Typical Type G (Floor 1)",
      category: "duplex",
    },
    {
      image: "https://i.ibb.co/LPdnLHT/Typical-Type-G-Floor-2-1024x819.png",
      alt: "Typical-Type-G-Floor-2-1024x819",
      name: "Duplex Typical Type G (Floor 2)",
      category: "duplex",
    },
    {
      image: "https://i.ibb.co/5905cvD/Typical-Type-H-Floor-1-1024x819.png",
      alt: "Typical-Type-H-Floor-1-1024x819",
      name: "Duplex Typical Type H (Floor 1)",
      category: "duplex",
    },
    {
      image: "https://i.ibb.co/6sjYZwD/Typical-Type-H-Floor-2-1024x819.png",
      alt: "Typical-Type-H-Floor-2-1024x819",
      name: "Duplex Typical Type - H (Floor 2)",
      category: "duplex",
    },
    {
      image: "https://i.ibb.co/98dLpKn/location.png",
      alt: "location",
      name: "Location Map",
      category: "location",
    },
  ];
  const headerData = {
    title: "Empire Exotica",
    address: "55, Dakhingaon, Kahilipara, Guwahati - 781019",
    map: "https://g.page/empire-exotica?share",
    brochure:
      "https://drive.google.com/file/d/15omzWGQCRMCb-vEl2lK4RsgKLlekVueH/view?usp=sharing",
    propertyVal: "69* Lakh onwards",
    tel: "+91 691 300 4444",
    logo: "https://i.ibb.co/PF7PrWD/empire-exotica-page-logo-768x296.png",
    video:
      "https://www.youtube.com/embed/KST4dURBK74?origin=https://ghy.empiredevelopers.in",
  };
  const highlights = {
    rera: "RERAAKM 36 of 2021",
    size: "6.8 Bigha",
    units: "141 units",
    bedrooms: "2, 3, 4 & Duplex",
  };
  const aboutProject = {
    title: "About Empire Exotica",
    about: `With a dream in mind and passion at heart, eventuated a project of
        residential complex which will contain not only the state of the art
        amenities but also guarantees the finest quality with affordability.
        Where the interests of our customers are always a top priority, we,” The
        Empire Developers “have in the midst of serene and verdure part of
        Guwahati - near Ganeshguri (around 3.5km) launched a project which
        will contain not only the basic amenities but also facilities to serve
        people across the age - from cradle to octogenarian - is a
        project of nonpareil . Whose quality is the synonym; the project is
        verified through the prestigious IIT-Guwahati and is built in an
        unencumbered land having automated elevators, library, flower garden,
        theme park and well spacious surroundings providing unparalleled safety
        and security for all the customers.`,
  };
  const amenities = [
    "Gymnasium",
    "Herb Garden",
    "Library Space",
    "Yoga Zone",
    "Indoor Swimming Pool",
    "Jogging Track",
    "Club, Community cum Banquet Hall",
    "Landscape Garden",
    "Badminton Court",
    "Creche/Kids Play Zone",
    "Children's Park",
    "Music and Fine Arts Gallery",
    "Theme Garden",
    "Terrace Garden",
  ];

  const [zoomSlider, setZoomSlider] = useState({});
  const zoomInSlider = (index) => {
    setZoomSlider({ zoom: true, index });
  };
  const zoomOutSlider = () => {
    setZoomSlider({ zoom: false, index: 0 });
  };

  const [zoomPlan, setZoomPlan] = useState({});
  const zoomInPlan = (index) => {
    setZoomPlan({ zoom: true, index });
  };
  const zoomOutPlan = () => {
    setZoomPlan({ zoom: false, index: 0 });
  };

  return (
    <>
      {zoomSlider.zoom ? (
        <ZoomSlider
          slides={sliderImages}
          index={zoomSlider.index}
          zoomOut={zoomOutSlider}
        />
      ) : (
        ""
      )}

      {zoomPlan.zoom ? (
        <ZoomPlan
          plans={planImages}
          index={zoomPlan.index}
          zoomOut={zoomOutPlan}
        />
      ) : (
        ""
      )}

      <main className="" id="#">
        <ProjectCarousel
          slides={sliderImages}
          zoomIn={(index) => zoomInSlider(index)}
        />

        <div className="lg:px-[80px] px-4 md:px-[40px] sm:px[20px]">
          <ProjectHeader headerData={headerData} />
          <div className="flex justify-between flex-col lg:flex-row w-full -top-[20px] relative space-y-2 lg:space-y-0">
            <div className="space-y-5 lg:pr-10 lg:w-2/3 w-full">
              <ProjectHighlights highlights={highlights} />
              <AboutProject about={aboutProject} />
              <Amenities amenities={amenities} />
              <UnitPlans
                Data={planImages}
                zoomIn={(index) => zoomInPlan(index)}
              />

              <div className="px-3 w-full relative pt-[50%] mb-10">
                <iframe
                  width="560"
                  height="315"
                  className="absolute top-0 left-0 right-0 bottom-0 w-full h-full"
                  src="https://www.youtube-nocookie.com/embed/KST4dURBK74"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              <div className="space-y-3 w-full my-3 hidden lg:block">
                <h1 className="text-[33px] font-raleway font-[700] sm:mb-4 mb-2">
                  Related Projects
                </h1>

                <Link
                  className="lg:w-2/3 w-full shadow-xl hover:shadow-md sm:p-4 p-1 relative cursor-pointer hover-project apply-transition project block"
                  to="/serenity"
                >
                  <img
                    src="https://i.ibb.co/HnzxQwR/serenity.png"
                    alt="Empire Serenity"
                    className="w-full"
                  />
                  <p className="absolute sm:top-10 sm:right-10 top-3 right-3 text-sm bg-[#9A7A54] text-white rounded p-2 font-semibold font-raleway">
                    Ongoing
                  </p>

                  <div className="sm:w-3/4 w-full block mx-auto md:absolute bottom-0 p-2 bg-white rounded sm:left-[12.25%] animate-height">
                    <div className="">
                      <p className="font-[600] leading-[34px] font-raleway text-[#161C2D] text-[24px]">
                        Empire Serenity
                      </p>
                      <p className="text-[14px] font-cabin text-[#060606BA] font-[500] leading-[18px]">
                        Goggaon, Garchuk
                      </p>
                    </div>

                    <div className="w-full block md:hidden show-div">
                      <div className="flex items-center justify-between">
                        <div className="">
                          <FaBed className="inline-block mr-2 text-[2em]" />
                          <span className="inline-block text-[#202020] text-[13.5px] font-[600] leading[25px] font-raleway">
                            1, 2, 3
                          </span>
                        </div>
                        <button
                          className="py-3 px-8 hover:bg-[#232A3E] transition-all text-white bg-[#9A7A54] rounded-3xl cursor-pointer text-sm"
                          to="/serenity"
                        >
                          View Project
                        </button>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <Brochure />
            <div className="block lg:hidden space-y-3 w-full my-3">
              <h1 className="text-[33px] font-raleway font-[700] sm:mb-4 mb-2">
                Related Projects
              </h1>

              <Link
                className="lg:w-2/3 w-full shadow-xl hover:shadow-md sm:p-4 p-1 relative cursor-pointer hover-project apply-transition project block"
                to="/serenity"
              >
                <img
                  src="https://i.ibb.co/HnzxQwR/serenity.png"
                  alt="Empire Serenity"
                  className="w-full"
                />
                <p className="absolute sm:top-10 sm:right-10 top-3 right-3 text-sm bg-[#9A7A54] text-white rounded p-2 font-semibold font-raleway">
                  Ongoing
                </p>

                <div className="sm:w-3/4 w-full block mx-auto md:absolute bottom-0 p-2 bg-white rounded sm:left-[12.25%] animate-height">
                  <div className="">
                    <p className="font-[600] leading-[34px] font-raleway text-[#161C2D] text-[24px]">
                      Empire Serenity
                    </p>
                    <p className="text-[14px] font-cabin text-[#060606BA] font-[500] leading-[18px]">
                      Goggaon, Garchuk
                    </p>
                  </div>

                  <div className="w-full block md:hidden show-div">
                    <div className="flex items-center justify-between">
                      <div className="">
                        <FaBed className="inline-block mr-2 text-[2em]" />
                        <span className="inline-block text-[#202020] text-[13.5px] font-[600] leading[25px] font-raleway">
                          1, 2, 3
                        </span>
                      </div>
                      <button
                        className="py-2 px-4 hover:bg-[#232A3E] transition-all text-white bg-[#9A7A54] rounded-3xl cursor-pointer text-sm"
                        to="/serenity"
                      >
                        View Project
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ExoticaPage;

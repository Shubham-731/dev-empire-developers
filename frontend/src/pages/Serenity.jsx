import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBed } from "react-icons/fa";

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

const SerenityPage = () => {
  document.title = "Empire Serenity | Empire Developers";

  const sliderImages = [
    {
      image: "https://i.ibb.co/5XDCHbn/Poolside-Elevation-2.jpg",
      alt: "Poolside-Elevation-2",
    },
    {
      image: "https://i.ibb.co/VW7Nj0Q/Playground-Area.jpg",
      alt: "Playground-Area",
    },
    {
      image:
        "https://i.ibb.co/6n59XNd/Empire-Serenity-Final-Exterior-Renders-4-scaled.jpg",
      alt: "Empire-Serenity-Final-Exterior-Renders-4-scaled",
    },
    {
      image: "https://i.ibb.co/y4kNpnv/Poolside-Elevation.jpg",
      alt: "Poolside-Elevation",
    },
    {
      image:
        "https://i.ibb.co/XVxkQvB/Empire-Serenity-Final-Exterior-Renders-6-scaled.jpg",
      alt: "Empire-Serenity-Final-Exterior-Renders-6-scaled",
    },
    {
      image:
        "https://i.ibb.co/0DZsTFg/Empire-Serenity-Final-Exterior-Renders-10-scaled.jpg",
      alt: "Empire-Serenity-Final-Exterior-Renders-10-scaled",
    },
    {
      image:
        "https://i.ibb.co/rG3zBXB/Empire-Serenity-Final-Exterior-Renders-11-scaled.jpg",
      alt: "Empire-Serenity-Final-Exterior-Renders-11-scaled",
    },
    {
      image:
        "https://i.ibb.co/QN06GvD/Empire-Serenity-Final-Exterior-Renders-Night-Test-2-scaled.jpg",
      alt: "Empire-Serenity-Final-Exterior-Renders-Night-Test-2-scaled",
    },
    {
      image: "https://i.ibb.co/FXpkBdK/Test-Pool-New-1.jpg",
      alt: "Test-Pool-New-1",
    },
    {
      image: "https://i.ibb.co/cc0cqV2/1-BHK.png",
      alt: "1-BHK",
    },
    {
      image: "https://i.ibb.co/4dCm0bL/2-BHK.png",
      alt: "2-BHK",
    },
    {
      image: "https://i.ibb.co/jf76cj2/3-BHK.png",
      alt: "3-BHK",
    },
    {
      image:
        "https://i.ibb.co/K5SyMtH/Empire-Serenity-Final-Exterior-Renders-2-scaled.jpg",
      alt: "Empire-Serenity-Final-Exterior-Renders-2-scaled",
    },
    {
      image:
        "https://i.ibb.co/rwVjR7M/Empire-Serenity-Final-Exterior-Renders-8-scaled.jpg",
      alt: "Empire-Serenity-Final-Exterior-Renders-8-scaled",
    },
    {
      image: "https://i.ibb.co/JtjkdMP/Test-Pool-New-2.jpg",
      alt: "Test-Pool-New-2",
    },
    {
      image:
        "https://i.ibb.co/c6rCrpq/Empire-Serenity-Final-Exterior-Renders-Night-Test-1-scaled.jpg",
      alt: "Empire-Serenity-Final-Exterior-Renders-Night-Test-1-scaled",
    },
  ];
  const planImages = [
    {
      image: "https://i.ibb.co/JvBMRTD/MP-05-1024x311.jpg",
      alt: "MP-05-1024x311",
      name: "Master Plan",
      category: "master-plan",
    },
    {
      image:
        "https://i.ibb.co/8sDTwKP/Print-Brochure-empire-serenity-25-1024x622.jpg",
      alt: "Print-Brochure-empire-serenity-25-1024x622",
      name: "1 BHK",
      category: "1-bhk",
    },
    {
      image:
        "https://i.ibb.co/LnmSRw2/Print-Brochure-empire-serenity-21-1024x622.png",
      alt: "Print-Brochure-empire-serenity-21-1024x622",
      name: "2 BHK",
      category: "2-bhk",
    },
    {
      image:
        "https://i.ibb.co/bQWCRv9/Print-Brochure-empire-serenity-17-1024x622.jpg",
      alt: "Print-Brochure-empire-serenity-17-1024x622",
      name: "3 BHK",
      category: "3-bhk",
    },
    {
      image: "https://i.ibb.co/bNJnm2F/Serenity-location.png",
      alt: "Serenity-location",
      name: "Location Map",
      category: "location",
    },
  ];
  const headerData = {
    title: "Empire Serenity",
    address:
      "Near Kaziranga English Academy, Goggaon, Garoghuli Road, Garchuk, Guwahati - 781035",
    map: "",
    brochure:
      "https://drive.google.com/file/d/1jxNPJaeLXrElFv6G9LYMpotMolqbeW5h/view?usp=sharing",
    propertyVal: "25* Lakh onwards",
    tel: "+91 691 300 4444",
    logo: "https://i.ibb.co/YQ4SJXt/Untitled-design-2.png",
    video:
      "https://www.youtube.com/embed/mya6a4DWSIY?origin=https://ghy.empiredevelopers.in",
  };
  const highlights = {
    rera: "A/F",
    size: "3.4 Bigha",
    units: "168 units",
    bedrooms: "1, 2, 3",
  };
  const aboutProject = {
    title: "About Empire Serenity",
    about: `Contributing to the widespread dream of the common man to own a Home to call its own, emerged to existence, Empire Serenity a residential complex to encourage home ownership through a range of affordable housing apartments. “The Empire Developers” have developed one of a kind classic and hemmed in nature project near ISBT Guwahati (around 800 meters) delivering the perfect habitat settings alongside state of art specifications, subtle amenities and features to satiate a metropolitan's compulsion to achieve a higher eminence of living standards. Where quality has always gained priority; the project is verified through the prestigious IIT - Guwahati and built around the imaginings in line of the housing requirements of the contemporary yet native individual of our region. Indeed, beyond living!`,
  };
  const amenities = [
    "Swimming Pool",
    "Herb Garden",
    "Club & Community Hall",
    "Terrace Garden",
    "Children's Recreational Area",
    "Sit - Out Zone",
    "Yoga Zone",
    "CCTV Surveillance",
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

              <div className="space-y-3 w-full my-3 hidden lg:block">
                <h1 className="text-[33px] font-raleway font-[700] sm:mb-4 mb-2">
                  Related Projects
                </h1>

                <Link
                  className="lg:w-2/3 w-full shadow-xl hover:shadow-md sm:p-4 p-1 relative cursor-pointer hover-project apply-transition project block"
                  to="/exotica"
                >
                  <img
                    src="https://i.ibb.co/42WSjnG/exotica.png"
                    alt="Empire Exotica"
                    className="w-full"
                  />
                  <p className="absolute sm:top-10 sm:right-10 top-3 right-3 text-sm bg-[#9A7A54] text-white rounded p-2 font-semibold font-raleway">
                    Ongoing
                  </p>

                  <div className="sm:w-3/4 w-full block mx-auto md:absolute bottom-0 p-2 bg-white rounded sm:left-[12.25%] animate-height">
                    <div className="">
                      <p className="font-[600] leading-[34px] font-raleway text-[#161C2D] text-[24px]">
                        Empire Exotica
                      </p>
                      <p className="text-[14px] font-cabin text-[#060606BA] font-[500] leading-[18px]">
                        Dakhingaon, Kahilipara
                      </p>
                    </div>

                    <div className="w-full block md:hidden show-div">
                      <div className="flex items-center justify-between">
                        <div className="">
                          <FaBed className="inline-block mr-2 text-[2em]" />
                          <span className="inline-block text-[#202020] text-[13.5px] font-[600] leading[25px] font-raleway">
                            2, 3, 4 & Duplex
                          </span>
                        </div>
                        <button
                          className="py-3 px-8 hover:bg-[#232A3E] transition-all text-white bg-[#9A7A54] rounded-3xl cursor-pointer text-sm"
                          to="/exotica"
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

            <div className="space-y-3 w-full my-3 block lg:hidden">
              <h1 className="text-[33px] font-raleway font-[700] sm:mb-4 mb-2">
                Related Projects
              </h1>

              <Link
                className="lg:w-2/3 w-full shadow-xl hover:shadow-md sm:p-4 p-1 relative cursor-pointer hover-project apply-transition project block"
                to="/exotica"
              >
                <img
                  src="https://i.ibb.co/42WSjnG/exotica.png"
                  alt="Empire Exotica"
                  className="w-full"
                />
                <p className="absolute sm:top-10 sm:right-10 top-3 right-3 text-sm bg-[#9A7A54] text-white rounded p-2 font-semibold font-raleway">
                  Ongoing
                </p>

                <div className="sm:w-3/4 w-full block mx-auto md:absolute bottom-0 p-2 bg-white rounded sm:left-[12.25%] animate-height">
                  <div className="">
                    <p className="font-[600] leading-[34px] font-raleway text-[#161C2D] text-[24px]">
                      Empire Exotica
                    </p>
                    <p className="text-[14px] font-cabin text-[#060606BA] font-[500] leading-[18px]">
                      Dakhingaon, Kahilipara
                    </p>
                  </div>

                  <div className="w-full block md:hidden show-div">
                    <div className="flex items-center justify-between">
                      <div className="">
                        <FaBed className="inline-block mr-2 text-[2em]" />
                        <span className="inline-block text-[#202020] text-[13.5px] font-[600] leading[25px] font-raleway">
                          2, 3, 4 & Duplex
                        </span>
                      </div>
                      <button
                        className="py-2 px-4 hover:bg-[#232A3E] transition-all text-white bg-[#9A7A54] rounded-3xl cursor-pointer text-sm"
                        to="/exotica"
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

export default SerenityPage;

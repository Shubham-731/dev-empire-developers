import {
  FaMapMarkerAlt,
  FaRegPlayCircle,
  FaRegFileAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import { VscChromeClose } from "react-icons/vsc";
import { useState } from "react";
import axios from "axios";

import Spinner from "../Spinner";

const ProjectHeader = ({ headerData }) => {
  const [videoPlay, setVideoPlay] = useState(false);
  const [showBrochure, setShowBrochure] = useState(false);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [showSpinner, setShowSpinner] = useState(false);

  const downloadBrochure = async (event) => {
    event.preventDefault();

    if (name === "" || phone === "") {
      alert("All input fields are required.");
    } else if (phone.length !== 10) {
      alert("Phone number must be of 10 digits.");
    } else {
      setShowSpinner(true);

      // Submit data
      const url = `http://localhost:5500/brochure`;
      const response = await axios.post(url, {
        name,
        phone,
      });

      if (response.status === 200) {
        const link = document.createElement("a");
        link.setAttribute("href", headerData.brochure);
        link.setAttribute("target", "_blank");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        setShowSpinner(false);
        setShowBrochure(false);
      } else if (response.status === 500) {
        setShowSpinner(false);
        alert("Some error occured. Try again!");
      }

      setName("");
      setPhone("");
      setShowSpinner(false);
    }
  };

  return (
    <>
      {showSpinner ? <Spinner /> : ""}

      {videoPlay ? (
        <div className="fixed right-0 top-0 left-0 bottom-0 w-full h-full z-30">
          <div
            className="fixed top-0 left-0 w-full h-full z-30 bg-modal overflow-hidden cursor-zoom-out transition-all"
            onClick={() => setVideoPlay(false)}
          />
          <VscChromeClose
            className="text-lg text-white cursor-pointer fixed top-10 right-10 z-[32]"
            onClick={() => setVideoPlay(false)}
          />
          <div className="lg:px-[100px] md:px-[40px] px-3 w-full relative pt-[50%] mb-10 z-[31] flex items-center justify-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:top-[62.5%]">
            <iframe
              width="560"
              height="315"
              src={headerData.video}
              title="YouTube video player"
              className="absolute block top-0 left-0 right-0 lg:px-[100px] md:px-[40px] px-3 bottom-0 w-full sm:h-3/4 h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      ) : (
        ""
      )}

      {showBrochure ? (
        <div className="fixed right-0 top-0 left-0 bottom-0 w-full h-full z-30">
          <div
            className="fixed top-0 left-0 w-full h-full z-30 bg-modal overflow-hidden cursor-zoom-out transition-all"
            onClick={() => setShowBrochure(false)}
          />
          <VscChromeClose
            className="text-lg text-white cursor-pointer fixed top-10 right-10 z-[32]"
            onClick={() => setShowBrochure(false)}
          />
          <div className="lg:px-[100px] md:px-[40px] px-3 w-full relative mb-10 z-[31] flex items-center justify-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="md:w-[350px] md:absolute w-[90%] relative mx-auto block bg-slate-100 md:opacity-90 py-4 px-3 border rounded z-[11]">
              <h1 className="text-center text-[24px] font-[500] mb-3">
                Download Brochure
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
                  type="text"
                  className="w-full border-b-2 border-slate-400 focus:border-slate-600 p-3 mb-3 bg-transparent focus:outline-none"
                  placeholder="Phone *"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />

                <button
                  className="py-3 w-full text-white border-white border-2 rounded-lg font-semibold cursor-pointer bg-[#9A7A54]"
                  onClick={downloadBrochure}
                  type="submit"
                >
                  Get Brochure
                </button>
              </form>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}

      <section className="border-none sm:p-3 p-2 z-10 sm:w-full relative -top-[50px] rounded shadow-md bg-white">
        <div className="w-full flex lg:space-x-5 items-center">
          <img
            src={headerData.logo}
            alt="empire-exotica-page-logo-768x296"
            className="lg:block lg:w-24 hidden"
          />

          <div className="space-y-2 w-full m-0 px-2">
            <div className="w-full">
              <h1 className="text-[23px] font-[600] font-raleway tracking-[1px] text-[#120A0A]">
                {headerData.title}
              </h1>
              <div className="flex items-center space-y-1 md:space-y-0 flex-wrap">
                <p className="mr-2 text-sm md:text-base font-cabin text-[#54595F] text-[15px] font-[500] leading-[19px] trackign-[0.5px]">
                  {headerData.address}
                </p>

                <a
                  href={headerData.map}
                  className="px-1 text-sm md:text-base flex items-center space-x-1 border border-red-600 border-solid rounded text-center text-red-600"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <FaMapMarkerAlt />
                  <span className="font-cabin">Get Directions</span>
                </a>
              </div>
            </div>

            <div className="flex justify-between w-full">
              <a
                className="text-white bg-black text-[15px] font-[300] font-cabin rounded-2xl px-2 py-1 sm:px-3 sm:py-2 cursor-pointer"
                href="#brochure"
              >
                {headerData.propertyVal}
              </a>

              <div className="flex space-x-1">
                <button
                  className="flex items-center text-white bg-black text-[15px] font-[500] space-x-2 rounded-2xl px-2 py-1 sm:px-3 sm:py-2 cursor-pointer hover:bg-[#9A7A54] transition-all"
                  onClick={() => setVideoPlay(true)}
                >
                  <FaRegPlayCircle />
                  <span className="hidden md:block font-cabin font-light">
                    Walkthrough Video
                  </span>
                </button>

                <button
                  className="flex items-center text-white bg-black text-[15px] font-[500] space-x-2 rounded-2xl px-2 py-1 sm:px-3 sm:py-2 cursor-pointer hover:bg-[#9A7A54] transition-all"
                  onClick={() => setShowBrochure(true)}
                >
                  <FaRegFileAlt />
                  <span className="hidden md:block font-cabin font-light">
                    Brochure
                  </span>
                </button>

                <a
                  className="flex items-center text-white bg-[#9A7A54] text-[15px] font-[500] space-x-2 rounded-2xl px-2 py-1 sm:px-3 sm:py-2 cursor-pointer"
                  href={`tel:${headerData.tel}`}
                >
                  <FaPhoneAlt />
                  <span className="hidden md:block font-cabin font-light">
                    {headerData.tel}
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectHeader;

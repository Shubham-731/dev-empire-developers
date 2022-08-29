import { Link } from "react-router-dom";
import {
  FaRegCopyright,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

import "./styles.css";

const Footer = () => {
  return (
    <footer className="w-full bg-slate-50 divide-y divide-solid divide-slate-700 z-10">
      <div className="md:p-16 w-full flex items-start justify-around flex-col lg:flex-row space-y-5 lg:space-y-0 p-5">
        <div className="space-y-3">
          <img
            src="https://i.ibb.co/pdj72GH/ed-logo-new.png"
            alt="logo"
            className="w-full max-w-[250px]"
          />

          {/* Social icons */}
          <div className="flex items-center justify-center space-x-5">
            <a
              href="https://www.facebook.com/Empire-Developers-103682898517073/"
              className="p-2 rounded-[50%] bg-slate-200 cursor-pointer inline-block no-underline hover:bg-[#9A7A54] transition-all text-lg hover:text-white"
              target={"_blank"}
              rel="noreferrer"
            >
              <FaFacebook />
            </a>

            <a
              href="https://instagram.com/empiredevelopers_guwahati?utm_medium=copy_link"
              className="p-2 rounded-[50%] bg-slate-200 cursor-pointer inline-block no-underline hover:bg-[#9A7A54] transition-all text-lg hover:text-white"
              target={"_blank"}
              rel="noreferrer"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.youtube.com/channel/UClXbd8X3UGmtQtzCgKmpmeg"
              className="p-2 rounded-[50%] cursor-pointer bg-slate-200 inline-block no-underline hover:bg-[#9A7A54] transition-all text-lg hover:text-white"
              target={"_blank"}
              rel="noreferrer"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Quick links */}
        <div className="space-y-3">
          <h2 className="text=[#23262F] text-[22px] md:text-[28px] font-raleway leading-[30px] font-[700]">
            Quick Links
          </h2>
          <ul className="space-y-2">
            <li>
              <Link
                to={"/"}
                className="hover:text-[#9A7A54] transition-all duration-200 text-[#232A3E] font-cabin text-[17px] font-[400]"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to={"/exotica"}
                className="hover:text-[#9A7A54] transition-all duration-200 text-[#232A3E] font-cabin text-[17px] font-[400]"
              >
                Empire Exotica
              </Link>
            </li>
            <li>
              <Link
                to={"/serenity"}
                className="hover:text-[#9A7A54] transition-all duration-200 text-[#232A3E] font-cabin text-[17px] font-[400]"
              >
                Empire Serenity
              </Link>
            </li>
            <li>
              <Link
                to={"/contact-us-ver4"}
                className="hover:text-[#9A7A54] transition-all duration-200 text-[#232A3E] font-cabin text-[17px] font-[400]"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Get in touch */}
        <div className="space-y-4">
          <h2 className="text=[#23262F] text-[22px] md:text-[28px] font-raleway leading-[30px] font-[700]">
            Get In Touch
          </h2>
          {/* Email */}
          <div className="space-x-3 flex items-center">
            <FaEnvelope className="text-xl" />
            <div className="">
              <h3 className=" text-xl">Email</h3>
              <p className="hover:text-black text-[#9A7A54] transition-all cursor-pointer">
                enquiries@empiredevelopers.in
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="space-x-3 flex items-center">
            <FaPhoneAlt className="text-xl " />
            <div className="">
              <h3 className=" text-xl">Phone</h3>
              <p className="">
                <span className="hover:text-black text-[#9A7A54] transition-all cursor-pointer">
                  +91 691 300 4444
                </span>
                ,{" "}
                <span className="hover:text-black text-[#9A7A54] transition-all cursor-pointer">
                  +91 691 333 7777
                </span>
              </p>
            </div>
          </div>

          {/* Address */}
          <div className="space-x-3 flex items-center">
            <FaMapMarkerAlt className="text-xl " />
            <div className="">
              <h3 className=" text-xl">Location</h3>
              <p className=" transition-all cursor-pointer">
                No. 45, Dakhingaon Rd, Jonaknagar, Kahilipara, Guwahati, Assam
                781019
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center w-full py-5">
        <FaRegCopyright className="md:text-xl inline-block  mr-2 text-sm" />
        <p className=" inline-block">
          2022, Empire Developers. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

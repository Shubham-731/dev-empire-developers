import { Link } from "react-router-dom";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import Brochure from "../components/Brochure";

const ContactPage = () => {
  document.title = "Contact Us | Empire Developers";

  return (
    <div>
      {/* Header */}
      <section className="w-full bg-slate-100 lg:px-[80px] px-4 md:px-[40px] sm:px[20px] py-16 relative">
        <h1 className="text-3xl font-bold font-raleway">Contact Us</h1>
        <p className="p-3 border font-raleway border-slate-400 border-solid rounded inline absolute -bottom-5 bg-white lg:left-[80px] md:left-[40px] sm:left-[20px] left-4">
          <Link to={"/"} className="hover:text-[#9A7A54] transition-all">
            Home
          </Link>{" "}
          &gt; <span className="text-[#9A7A54]">Contact Us</span>
        </p>
      </section>

      {/* Contact */}
      <section className="w-full lg:px-[80px] px-4 md:px-[40px] sm:px[20px] py-16 relative">
        <div className="flex flex-col lg:flex-row justify-between relative w-full space-y-3 lg:space-y-0 lg:space-x-3 h-fit">
          {/* Contact details */}
          <div className="border-2 border-slate-300 border-solid lg:px-12 lg:py-14 md:p-8 sm:p-5 p-3 bg-slate-100 space-y-8 rounded h-fit lg:sticky top-0 left-0 static">
            <h2 className="text-2xl font-semibold font-raleway">
              Contact Details (Corporate Office)
            </h2>

            <div className="space-y-4">
              {/* Email */}
              <div className="space-x-3 flex items-center">
                <FaEnvelope className="sm:text-xl text-base" />
                <div className="">
                  <h3 className="text-xl font-raleway">Email</h3>
                  <p className="hover: text-[#9A7A54] transition-all cursor-pointer font-cabin">
                    enquiries@empiredevelopers.in
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="space-x-3 flex items-center">
                <FaPhoneAlt className="sm:text-xl text-base" />
                <div className="">
                  <h3 className="text-xl font-raleway">Phone</h3>
                  <p className="font-cabin">
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
                <FaMapMarkerAlt className="text-xl" />
                <div className="">
                  <h3 className="text-xl font-raleway">Location</h3>
                  <p className=" transition-all cursor-pointer font-cabin">
                    No. 45, Dakhingaon Rd, Jonaknagar, Kahilipara, Guwahati,
                    Assam 781019
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Brochure />
        </div>
      </section>
    </div>
  );
};

export default ContactPage;

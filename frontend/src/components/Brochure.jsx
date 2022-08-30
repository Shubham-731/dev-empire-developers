import { FaEnvelope, FaPhoneAlt, FaUser } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";

import Spinner from "./Spinner";

const Brochure = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [siteVisit, setSiteVisit] = useState("Yes");
  const [roomPreference, setRoomPreference] = useState("1 BHK");
  const [source, setSource] = useState("Google");
  const [showSpinner, setShowSpinner] = useState(false);

  const SubmitEnquiry = async (e) => {
    e.preventDefault();

    if (name === "" || email === "" || phone === "") {
      alert("All input fields are required.");
    } else if (phone.length !== 10) {
      alert("Phone number must be of 10 digits.");
    } else {
      setShowSpinner(true);

      // Submit enquiry form
      const url = `${window.location.origin}/enquire`;
      const response = await axios.post(url, {
        name,
        email,
        phone,
        siteVisit,
        roomPreference,
        source,
      });

      console.log(response);

      if (response) {
        setShowSpinner(false);
        alert(response.data.msg);
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

      <section
        id="brochure"
        className="border-2 border-slate-100 border-solid md:p-10 p-3 rounded lg:w-1/3 w-full h-fit lg:sticky static top-auto right-auto lg:top-0 lg:right-0 bg-slate-50"
      >
        <form className="space-y-5">
          <div className="space-y-2">
            <label htmlFor="name" className="font-semibold">
              Name <span className="text-red-500">*</span>
            </label>
            <div className="w-full relative">
              <FaUser className="absolute top-5 left-4 text-sm" />
              <input
                type="text"
                name="name"
                placeholder="Your name"
                id="name"
                required
                onChange={(e) => setName(e.target.value)}
                value={name}
                className="w-full border-2 border-slate-200 focus:border-none border-solid py-3 px-10  transition-all outline-none focus:outline-1 focus:outline-slate-500 rounded"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="mobNo" className="font-semibold">
              Mobile no <span className="text-red-500">*</span>
            </label>
            <div className="w-full relative">
              <FaPhoneAlt className="absolute top-5 left-4 text-sm" />
              <input
                type="text"
                name="phone"
                placeholder="Your mobile"
                id="mobNo"
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
                required
                className="w-full border-2 border-slate-200 focus:border-none border-solid py-3 px-10  transition-all outline-none focus:outline-1 focus:outline-slate-500 rounded"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="name" className="font-semibold">
              Email <span className="text-red-500">*</span>
            </label>
            <div className="w-full relative">
              <FaEnvelope className="absolute top-5 left-5 text-sm" />
              <input
                type="text"
                name="email"
                placeholder="Your email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
                className="w-full border-2 border-slate-200 focus:border-none border-solid py-3 px-10  transition-all outline-none focus:outline-1 focus:outline-slate-500 rounded"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="favRoom" className="font-semibold">
              Room Preference <span className="text-red-500">*</span>
            </label>
            <div className="w-full relative">
              <select
                className="w-full border-2 border-slate-200 focus:border-none border-solid p-3  transition-all outline-none focus:outline-1 focus:outline-slate-500 rounded"
                id="favRoom"
                required
                onChange={(e) => setRoomPreference(e.target.value)}
                value={roomPreference}
              >
                <option value="1 BHK">1 BHK</option>
                <option value="2 BHK">2 BHK</option>
                <option value="3 BHK">3 BHK</option>
                <option value="4 BKH">4 BKH</option>
                <option value="Duplex/Penthouse">Duplex/Penthouse</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="source" className="font-semibold">
              How did you know about us? <span className="text-red-500">*</span>
            </label>
            <div className="w-full relative">
              <select
                className="w-full border-2 border-slate-200 focus:border-none border-solid p-3  transition-all outline-none focus:outline-1 focus:outline-slate-500 rounded"
                id="source"
                required
                onChange={(e) => setSource(e.target.value)}
                value={source}
              >
                <option value="Google">Google</option>
                <option value="Facebook">Facebook</option>
                <option value="Instagram">Instagram</option>
                <option value="Newspaper">Newspaper</option>
                <option value="Radio">Radio</option>
                <option value="Emailer">Emailer</option>
                <option value="SMS">SMS</option>
                <option value="Hoardings">Hoardings</option>
                <option value="Referral">Referral</option>
                <option value="Others">Others</option>
              </select>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between">
            <span className="font-semibold">
              Request a site visit <span className="text-red-500">*</span>
            </span>
            <span className="space-x-3 ml-0">
              <span className="space-x-1">
                <input
                  type="radio"
                  onChange={(e) => setSiteVisit(e.target.value)}
                  checked={siteVisit === "Yes"}
                  id="yes"
                  required
                  value="Yes"
                />
                <label htmlFor="yes" className="cursor-pointer">
                  Yes
                </label>
              </span>
              <span className="space-x-1">
                <input
                  type="radio"
                  onChange={(e) => setSiteVisit(e.target.value)}
                  checked={siteVisit === "No"}
                  id="no"
                  required
                  value="No"
                />
                <label htmlFor="no" className="cursor-pointer">
                  No
                </label>
              </span>
            </span>
          </div>

          <button
            className="md:py-3 md:px-5 px-4 py-2 text-white bg-[#9A7A54] rounded-2xl outline-none border-none  font-semibold font-raleway"
            onClick={SubmitEnquiry}
            type="submit"
          >
            Enquire
          </button>
        </form>
      </section>
    </>
  );
};

export default Brochure;

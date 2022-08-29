import { useState } from "react";
import axios from "axios";
import { VscChromeClose } from "react-icons/vsc";

import Spinner from "./Spinner";

const FloatingEnquiryForm = () => {
  const [showEnquiryForm, setShowEnquiryForm] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [showSpinner, setShowSpinner] = useState(false);

  const SubmitEnquiry = async (e) => {
    e.preventDefault();

    if (name === "" || email === "" || phone === "") {
      alert("All input fields are required.");
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
        alert("Enquiry submitted successfully");
        setShowEnquiryForm(false);
        setShowSpinner(false);
      }

      console.log(response);

      // Clear form inputs
      setName("");
      setEmail("");
      setPhone("");
    }
  };

  return (
    <div>
      {showSpinner ? <Spinner /> : ""}

      <button
        className="bg-[#9A7A54] text-white -rotate-90 px-5 py-2 rounded-lg fixed top-1/2 -right-[44px] z-[25]"
        onMouseEnter={() => setShowEnquiryForm(true)}
        onMouseLeave={() => setShowEnquiryForm(false)}
        onClick={() => setShowEnquiryForm(true)}
      >
        Enquire Now
      </button>

      <div
        className={`bg-white p-3 max-w-[275px] z-[24] w-full transition-all duration-500 fixed top-[37%] space-y-2 rounded ${
          showEnquiryForm ? "right-[42px]" : "-right-[300px]"
        }`}
        onMouseEnter={() => setShowEnquiryForm(true)}
        onMouseLeave={() => setShowEnquiryForm(false)}
      >
        <VscChromeClose
          className="mb-1 float-right cursor-pointer text-[18px]"
          onClick={() => setShowEnquiryForm(false)}
        />
        <form className="space-y-2">
          <input
            type="text"
            placeholder="Name *"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className={`w-full p-3 rounded-xl border outline-none focus:bg-slate-100 text-right transition-all duration-500 `}
          />
          <input
            type="email"
            placeholder="Email *"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            className={`w-full p-3 rounded-xl border outline-none focus:bg-slate-100 text-right transition-all duration-500 `}
          />
          <input
            type="text"
            placeholder="Phone *"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            className={`w-full p-3 rounded-xl border outline-none focus:bg-slate-100 text-right transition-all duration-500 `}
          />
          <button
            className={`w-full py-3 rounded-xl bg-[#9A7A54] text-white transition-all duration-500 `}
            onClick={SubmitEnquiry}
            type="submit"
          >
            Enquire
          </button>
        </form>
      </div>
    </div>
  );
};

export default FloatingEnquiryForm;

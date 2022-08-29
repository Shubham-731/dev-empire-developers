import { useState } from "react";
import { Link } from "react-router-dom";
import { CgDetailsLess } from "react-icons/cg";
import { VscChromeClose } from "react-icons/vsc";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full flex px-4 lg:px-[60px] md:px-[30px] items-center justify-between bg-slate-50 sticky top-0 left-0 z-[27] shadow-md py-2">
      {/* Logo */}
      <Link to={"/"}>
        <img
          src="https://i.ibb.co/7GdJK0p/ed-logo-new.png"
          alt="logo"
          className="w-36"
        />
      </Link>

      {/* Navigation menu */}
      <div className="flex items-center space-x-3">
        <nav
          className={
            isOpen
              ? "fixed sm:static left-0 top-[76px] bg-white block transition-all duration-500 w-full h-[calc(100vh-76px)] sm:w-fit sm:h-fit p-[40px] sm:p-[0] mr-5"
              : "sm:block fixed sm:static top-[76px] left-full sm:top-0 sm:left-0 transition-all duration-500 h-[calc(100vh-76px)] w-full sm:w-fit sm:h-fit p-[40px] sm:p-[0] mr-5"
          }
        >
          <ul className="sm:flex sm:items-center sm:space-x-5 sm:space-y-0 space-y-5 w-full sm:w-fit">
            <li onClick={() => setIsOpen(false)} className="w-fit">
              <Link
                to={"/"}
                className="hover:text-[#9A7A54] transition-all duration-200 font-raleway text-[1.025rem] font-[500]"
              >
                Home
              </Link>
            </li>
            <li onClick={() => setIsOpen(false)} className="w-fit">
              <Link
                to={"/exotica"}
                className="hover:text-[#9A7A54] transition-all duration-200 font-raleway text-[1.025rem] font-[500]"
              >
                Empire Exotica
              </Link>
            </li>
            <li onClick={() => setIsOpen(false)} className="w-fit">
              <Link
                to={"/serenity"}
                className="hover:text-[#9A7A54] transition-all duration-200 font-raleway text-[1.025rem] font-[500]"
              >
                Empire Serenity
              </Link>
            </li>
            <li onClick={() => setIsOpen(false)} className="w-fit">
              <Link
                to={"/contact-us-ver4"}
                className="hover:text-[#9A7A54] transition-all duration-200 font-raleway text-[1.025rem] font-[500]"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>

        <Link
          className="text-white h-fit bg-black block sm:hidden font-semibold text-sm lg:text-base rounded px-3 py-2 cursor-pointer font-raleway"
          to="/contact-us-ver4"
        >
          Contact Us
        </Link>

        {/* Mobile menu */}
        <button onClick={() => setIsOpen(!isOpen)} className="sm:hidden">
          {isOpen ? (
            <VscChromeClose className="transition-all duration-500 text-xl" />
          ) : (
            <CgDetailsLess className="transition-all duration-500 text-xl" />
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;

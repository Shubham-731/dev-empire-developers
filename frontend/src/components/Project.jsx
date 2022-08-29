import { FaBed } from "react-icons/fa";
import { Link } from "react-router-dom";

import "./styles.css";

const Project = ({ projects }) => {
  return (
    <section className="py-10 lg:px-[80px] md:px-[40px] sm:px-[20px] px-4 w-full">
      <h1 className="text-[33px] font-raleway font-[700] sm:mb-4 mb-2">
        Projects in Guwahati
      </h1>

      <div className="flex md:flex-row flex-col md:space-x-10 w-full space-y-3 md:space-y-0">
        {projects.map((project, index) => {
          return (
            <Link
              className="lg:w-2/3 w-full shadow-xl hover:shadow-md sm:p-4 p-1 relative cursor-pointer hover-project apply-transition project"
              key={index}
              to={project.href}
            >
              <img src={project.image} alt="" className="w-full" />
              <p className="absolute sm:top-10 sm:right-10 top-3 right-3 text-sm bg-[#9A7A54] text-white rounded p-2 font-semibold font-raleway">
                Ongoing
              </p>

              <div className="sm:w-3/4 w-full block mx-auto md:absolute bottom-0 p-2 bg-white rounded sm:left-[12.25%] animate-height">
                <div className="">
                  <p className="font-[600] leading-[34px] font-raleway text-[#161C2D] text-[24px]">
                    {project.name}
                  </p>
                  <p className="text-[14px] font-cabin text-[#060606BA] font-[500] leading-[18px]">
                    {project.address}
                  </p>
                </div>

                <div className="w-full block md:hidden show-div">
                  <div className="flex items-center justify-between">
                    <div className="">
                      <FaBed className="inline-block mr-2 text-[2em]" />
                      <span className="inline-block text-[#202020] text-[13.5px] font-[600] leading[25px] font-raleway">
                        {project.beds}
                      </span>
                    </div>
                    <button
                      className="md:py-3 md:px-8 px-4 py-2 hover:bg-[#232A3E] transition-all text-white bg-[#9A7A54] rounded-3xl cursor-pointer text-sm"
                      to={project.href}
                    >
                      View Project
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Project;

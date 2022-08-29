import { FaCheckCircle } from "react-icons/fa";

const Amenities = ({ amenities }) => {
  return (
    <section className="w-full space-y-3">
      <h4 className="text-[29px] font-[600] font-raleway">Amenities</h4>
      <ul className="space-y-3 w-full flex flex-wrap">
        {amenities.map((amenity, index) => {
          return (
            <li
              className="flex items-center space-x-2 md:w-1/3 sm:w-1/2 w-full mt-2 h-fit"
              key={index}
            >
              <FaCheckCircle className="fill-[#9A7A54] text-[27px]" />
              <span className="font-cabin text-[17px] leading-[18px] font-[500]">
                {amenity}
              </span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Amenities;

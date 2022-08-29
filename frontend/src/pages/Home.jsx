import Carousel from "../components/Carousel";
import Project from "../components/Project";

const HomePage = () => {
  document.title =
    "Empire Developers | Real estate builder and construction company in Guwahati";

  const swiperData = [
    {
      image: "https://i.ibb.co/YQMTGsm/4.jpg",
    },
    {
      image: "https://i.ibb.co/GdVCHGj/2.jpg",
    },
    {
      image: "https://i.ibb.co/d58Krj2/6.jpg",
    },
  ];

  const projectData = [
    {
      image: "https://i.ibb.co/42WSjnG/exotica.png",
      name: "Empire Exotica",
      address: "Dakhingaon, Kahilipara",
      beds: "2, 3, 4 & Duplex",
      href: "/exotica",
    },
    {
      image: "https://i.ibb.co/HnzxQwR/serenity.png",
      name: "Empire Serenity",
      address: "Goggaon, Garchuk",
      beds: "1, 2, 3",
      href: "/serenity",
    },
  ];

  return (
    <div className="w-full relative" id="#">
      <Carousel slides={swiperData} />
      <Project projects={projectData} />
      <div className="lg:px-[80px] md:px-[40px] sm:px-[20px] px-3 w-full relative pt-[50%] mb-10">
        <iframe
          width="560"
          height="315"
          className="absolute top-0 left-0 right-0 lg:px-[80px] md:px-[40px] px-3 bottom-0 w-full h-full"
          src="https://www.youtube.com/embed/KST4dURBK74?origin=https://ghy.empiredevelopers.in"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default HomePage;

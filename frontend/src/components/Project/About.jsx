const AboutProject = ({ about }) => {
  return (
    <section className="space-y-3">
      <h2 className="text-[29px] font-[600] font-raleway">{about.title}</h2>
      <p className="font-cabin">{about.about}</p>
    </section>
  );
};

export default AboutProject;

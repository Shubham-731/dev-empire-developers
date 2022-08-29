const ProjectHighlights = ({ highlights }) => {
  return (
    <section className="space-y-5 w-full">
      <h1 className="text-[29px] font-[600] font-raleway">
        Project Highlights
      </h1>

      <table className="border-collapse border border-slate-200 lg:w-4/5 w-full table-auto rounded">
        <tbody>
          <tr className="border-b">
            <th className="border-r w-[60%] text-start font-semibold text-[0.9rem] p-2 font-cabin">
              RERA No
            </th>
            <td className="p-2 font-cabin">{highlights.rera}</td>
          </tr>
          <tr className="border-b">
            <th className="border-r text-start font-semibold text-[0.9rem] p-2 font-cabin">
              Development Size
            </th>
            <td className="p-2 font-cabin">{highlights.size}</td>
          </tr>
          <tr className="border-b font-cabin">
            <th className="border-r text-start font-semibold text-[0.9rem] p-2 font-cabin">
              Number of Units
            </th>
            <td className="p-2 font-cabin">{highlights.units}</td>
          </tr>
          <tr className="">
            <th className="border-r text-start font-semibold text-[0.9rem] p-2 font-cabin">
              Bedrooms
            </th>
            <td className="p-2 font-cabin">{highlights.bedrooms}</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default ProjectHighlights;

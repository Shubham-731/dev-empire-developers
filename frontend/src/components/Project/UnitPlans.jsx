import { useState } from "react";

const UnitPlans = ({ Data, zoomIn }) => {
  const [openTab, setOpenTab] = useState(1);
  const [plans, setPlan] = useState(Data);

  const filterPlan = (category) => {
    const planItems = Data.filter((plan) => {
      return plan.category === category;
    });

    setPlan(planItems);
  };

  return (
    <section className="space-y-3">
      <h2 className="text-[29px] font-[600] font-raleway">
        Master / Unit Plans
      </h2>

      <div className="flex md:space-x-3 space-x-1 w-full flex-wrap">
        <button
          className={`my-1 h-fit font-[400] py-[4px] px-[30px] text-sm cursor-pointer border border-slate-300 apply-transition ${
            openTab === 1 ? "bg-[#9A7A54] text-white" : "hover:bg-slate-300"
          }`}
          onClick={(e) => {
            e.preventDefault();
            setOpenTab(1);
            setPlan(Data);
          }}
        >
          All
        </button>
        <button
          className={`my-1 h-fit font-[400] py-[4px] px-[30px] text-sm cursor-pointer border border-slate-300 apply-transition ${
            openTab === 2 ? "bg-[#9A7A54] text-white" : "hover:bg-slate-300"
          }`}
          onClick={(e) => {
            e.preventDefault();
            setOpenTab(2);
            filterPlan("master-plan");
          }}
        >
          Master Plan
        </button>

        {window.location.pathname === "/exotica" ? (
          ""
        ) : (
          <button
            className={`my-1 h-fit font-[400] py-[4px] px-[30px] text-sm cursor-pointer border border-slate-300 apply-transition ${
              openTab === 3 ? "bg-[#9A7A54] text-white" : "hover:bg-slate-300"
            }`}
            onClick={(e) => {
              e.preventDefault();
              setOpenTab(3);
              filterPlan("1-bhk");
            }}
          >
            1 BHK
          </button>
        )}

        <button
          className={`my-1 h-fit font-[400] py-[4px] px-[30px] text-sm cursor-pointer border border-slate-300 apply-transition ${
            openTab === 4 ? "bg-[#9A7A54] text-white" : "hover:bg-slate-300"
          }`}
          onClick={(e) => {
            e.preventDefault();
            setOpenTab(4);
            filterPlan("2-bhk");
          }}
        >
          2 BHK
        </button>
        <button
          className={`my-1 h-fit font-[400] py-[4px] px-[30px] text-sm cursor-pointer border border-slate-300 apply-transition ${
            openTab === 5 ? "bg-[#9A7A54] text-white" : "hover:bg-slate-300"
          }`}
          onClick={(e) => {
            e.preventDefault();
            setOpenTab(5);
            filterPlan("3-bhk");
          }}
        >
          3 BHK
        </button>
        {window.location.pathname === "/serenity" ? (
          ""
        ) : (
          <div>
            <button
              className={`my-1 h-fit font-[400] py-[4px] px-[30px] text-sm cursor-pointer border border-slate-300 apply-transition mr-1 md:mr-3 ${
                openTab === 6 ? "bg-[#9A7A54] text-white" : "hover:bg-slate-300"
              }`}
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(6);
                filterPlan("4-bhk");
              }}
            >
              4 BHK
            </button>
            <button
              className={`my-1 h-fit font-[400] py-[4px] px-[30px] text-sm cursor-pointer border border-slate-300 apply-transition ${
                openTab === 7 ? "bg-[#9A7A54] text-white" : "hover:bg-slate-300"
              }`}
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(7);
                filterPlan("duplex");
              }}
            >
              Duplex
            </button>
          </div>
        )}

        <button
          className={`my-1 h-fit font-[400] py-[4px] px-[30px] text-sm cursor-pointer border border-slate-300 apply-transition ${
            openTab === 8 ? "bg-[#9A7A54] text-white" : "hover:bg-slate-300"
          }`}
          onClick={(e) => {
            e.preventDefault();
            setOpenTab(8);
            filterPlan("location");
          }}
        >
          Location
        </button>
      </div>

      <div className="flex flex-wrap justify-between items-start w-full space-y-2">
        {plans.map((plan, index) => {
          return (
            <div
              className="md:w-[30%] sm:w-1/2 w-full border-2 border-solid border-slate-100 divide-y divide-slate-100 rounded cursor-pointer"
              key={index}
              onClick={() => zoomIn(index)}
            >
              <div className="p-3 w-full">
                <img src={plan.image} alt={plan.alt} className="w-full" />
              </div>
              <p className="px-3 py-1 text-sm h-full font-cabin">{plan.name}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default UnitPlans;

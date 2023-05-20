import React, { useEffect, useState } from "react";

import data from "../../assets/data/portfolioData";

import Modal from "./Modal";

const Portfolio = () => {
  const [nextItems, setNextItems] = useState(6);
  const [portfolios, setPortfolios] = useState(data);
  const [selectTab, setSelectTab] = useState("all");

  const [showModal, setShowModal] = useState(false);
  const [activeID, setActiveID] = useState(null);

  // button to show more card

  const loadMoreHandler = () => {
    setNextItems((prev) => prev + 3);
  };


  // logic for show modal of project card

  const showModalHandler = (id) => {
    setShowModal(true);
    setActiveID(id);
  };

  useEffect(() => {

    // selecting the data according to button select
    if (selectTab === "all") {
      setPortfolios(data);
    }

    if (selectTab === "Web-Design") {
      const filterData = data.filter((item) => item.category === "Web Design");

      setPortfolios(filterData);
    }
    if (selectTab === "UX-design") {
      const filterData = data.filter((item) => item.category === "Ux");
      setPortfolios(filterData);
    }
  }, [selectTab]);

  return (
    <section id="#portfolio">
      <div className="container ">
        <div className="flex items-center justify-between mt-0 flex-wrap">
          <div className="mb-7 sm:mb-0">
            <h3 className="text-headingColor text-[2rem] font-[700]">
              My Recent <span className="text-primaryColor">Project</span>
            </h3>
          </div>

          <div className="flex gap-3">

          {/* ---- 3buttons---- */}
            <button
              onClick={() => setSelectTab("all")}
              className="text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px]"
            >
              All
            </button>
            <button
              onClick={() => setSelectTab("Web-Design")}
              className="text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px]"
            >
              Web-Design
            </button>
            <button
              onClick={() => setSelectTab("UX-design")}
              className="text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px]"
            >
              UI-UX
            </button>
          </div>
        </div>

        <div className="flex items-center gap-4 flex-wrap mt-12">

        {/* --- logic for displaying cards--- */}
          {portfolios?.slice(0, nextItems).map((portfolio, index) => (
            <div
              key={index}
              className="group max-w-full sm:w-[48.5%] md:w-[31.8%] lg:w-[32.2%] relative z-[1]"
            >
              <figiure>
                <img
                  className="rounded-[8px]"
                  src={portfolio.imgUrl}
                  alt=""
                ></img>
              </figiure>

              <div className="w-full h-full bg-primaryColor bg-opacity-40 absolute top-0 left-0 z-[5] hidden group-hover:block">
                <div className="w-full h-full flex items-center justify-center">
                  <button
                    onClick={() => showModalHandler(portfolio.id)}
                    className="text-white bg-headingColor hover:bg-smallTextColor py-2 px-4 rounded-[8px] "
                  >
                    See More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-6">
          {nextItems < portfolios.length && data.length > 6 && (
            <button
              onClick={loadMoreHandler}
              className="text-white bg-headingColor hover:bg-smallTextColor py-2 px-4 rounded-[8px] "
            >
              Loadmore
            </button>
          )}
        </div>
      </div>

      {/* --- passing props setshowmodal & ID in Modal component  */}

      {showModal && <Modal setShowModal={setShowModal} activeID={activeID} />}
    </section>
  );
};

export default Portfolio;

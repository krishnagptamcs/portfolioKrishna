import React from "react";
import frontendImg from "../../assets/images/front-end.png";
import backendImg from "../../assets/images/backend.png";
import uiImg from "../../assets/images/design.png";
import appsImg from "../../assets/images/apps.png";

const Service = () => {
  return (
    <section id="service">
      <div className="container lg:pt-3">
        <div className="text-center">
          <h2 className="text-headingColor font-[800] text-[2.4rem] mb-2">
            What I <span className="text-primaryColor">do</span> ?
          </h2>
        </div>

       

        <div className="flex flex-col justify-center sm:py-12">
          <div className="w-full py-3 px-2 sm:max-w-xl sm:mx-auto sm:px-0">
            <div className="relative text-gray-700 antialiased text-sm font-semibold">
              {/* --verticlie line in middle of screen--- */}

              <div className="hidden absolute w-2 sm:block bg-indigo-300 h-full left-1/2 transform -translate-x-1/2"></div>

              {/* part-1 */} 

              {/* -----left card-------- */}

              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">


                  <div className="flex justify-start w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pr-8">
                      <div
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer  ease-in duration-200"
                      >
                        <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl ">
                          Frontend Development
                        </h3>
                        <p className="text-[13px] text-smallTextColor group-hover:text-white  group-hover:font-[600] leading-7">
                          I have expertise in frontend development tools and
                          tech-stack like- HTML/CSS, taiwlindCSS, Javascript, ReactJS, etc
                        </p>
                      </div>
                    </div>
                    </div>
                   

                  <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                    <figure>
                      <img src={frontendImg}></img>
                    </figure>
                  </div>
                </div>
              </div>

              {/* ------ right card------- */}

              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-end w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pl-8">
                      <div
                        data-aos="fade-left"
                        data-aos-duration="1200"
                        className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150"
                      >
                        <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl ">
                          Backend Development
                        </h3>
                        <p className="text-[13px] text-smallTextColor group-hover:text-white  group-hover:font-[600] leading-7">
                          I have expertise in backend development tools and
                          tech-stack like- Nodejs, ExpressJS, MondoDB.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                    <figure>
                      <img src={backendImg}></img>
                    </figure>
                  </div>
                </div>
              </div>

              {/* part-2 */}

              {/* -----left card-------- */}

              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-start w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pr-8">
                      <div
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150"
                      >
                        <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl ">
                          Design Development
                        </h3>
                        <p className="text-[13px] text-smallTextColor group-hover:text-white  group-hover:font-[600] leading-7">
                         Resrponsible for creating a Full-Stack (MERN) application, and web-development , fully responsive and fucntional
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                    <figure>
                      <img src={frontendImg}></img>
                    </figure>
                  </div>
                </div>
              </div>

              {/* ------ right card------- */}

              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-end w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pl-8">
                      <div
                        data-aos="fade-left"
                        data-aos-duration="1200"
                        className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150"
                      >
                        <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl ">
                          UI-Design
                        </h3>
                        <p className="text-[13px] text-smallTextColor group-hover:text-white  group-hover:font-[600] leading-7">
                        With the latest tool and technology of UI tools and software (figma) , creating a responsive UI.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                    <figure>
                      <img src={backendImg}></img>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;

import React from "react";
import heroImg from "../../assets/images/hero.svg";
import Typewriter from "typewriter-effect";
import CountUp from "react-countup";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="pt-0 " id="about">
      <div className="square absolute -left-14 top-[40%]"></div>
      <div className="square absolute right-12 bottom-[5%]"></div>
      <div className="container pt-12 ">
        <div className="md:flex items-center justify-between sm:flex-col md:flex-row ">
          {/*--------hero left section--------  */}

          <div className="w-full md:basis-1/2">
            <h5
              data-aos="fade-right"
              data-aos-duration="1500"
              className="text-headingColor font-[600] text-[18px]"
            >
              {" "}
              Hello welcome
            </h5>
            <h1 className="text-headingColor font-[800] text-[1.8rem] sm:text-[40px] leading-[35px] sm:leading-[46px] mt-5">
              I'm Krishna Gupta
              <br />
              <Typewriter
                options={{
                  strings: [
                    "Frontend-Developer",
                    "React-Developer",
                    "Software-Devloper",
                    "MERN-stack",
                  ],
                  autoStart: true,
                  loop: true,
                  wrapperClassName: "text-orange-500",
                }}
              />
            </h1>

            <div
              data-aos="gfade-up"
              data-aos-duration="1800"
              data-aos-delay="200"
              className="flex items-center gap-6 mt-7"
            >
              <a
                href="https://drive.google.com/file/d/1wAyttX1l4TKyDfXyy4muRVz8TSuA2NyI/view?usp=sharing
              "
                target="_blank"
                rel="noreferre"
              >
                <button className="flex items-center gap-2 bg-primaryColor text-white font-[500]  py-2 px-4 rounded-[8px] hover:bg-smallTextColor">
                  <i class="ri-mail-fill"></i>
                  Download CV
                </button>
              </a>
              <a
                href="https://github.com/krishnagptamcs"
                target="_blank"
                rel="noreferre"
                className="text-[16px] border-b-2 border-solid border-smallTextColor"
              >
                <i class="ri-github-fill"></i> Github
              </a>
            </div>

            <p className="flex gap-2 text-headingColor font-[500] text-[15px] leading-7 sm:pl-14 sm:pr-10 mt-10 ">
              My experience includes building responsive user interfaces,
              implementing RESTful APIs, and working with Backend developers to meet requirement
             
            </p>

            <div className="flex items-center gap-9 mt-12">
              <span className="text-smallTextColor text-[15px] font-[600]">
                Follow me:-
              </span>
              <span>
                <a
                  href="https://www.linkedin.com/in/krishna-gupta-1120ab207/"
                  target="_blank"
                  rel="noreferre"
                  className="text-smallTextColor text-[25px] font-[600]"
                >
                  <i class="ri-linkedin-box-fill"></i>
                </a>
              </span>

              <span>
                <a
                  href="https://github.com/krishnagptamcs"
                  target="_blank"
                  rel="noreferre"
                  className="text-smallTextColor text-[25px] font-[600]"
                >
                  <i class="ri-github-fill"></i>
                </a>
              </span>

              <span>
                <a
                  href="#linkedin"
                  className="text-smallTextColor text-[25px] font-[600]"
                >
                  <i class="ri-facebook-box-fill"></i>
                </a>
              </span>
            </div>
          </div>

          {/* hero left end */}

          {/* hero right image */}

          <div className="basis-1/3 mt-10 sm:mt-0 ">
            <figure className="flex items-center justify-center">
              <img src={heroImg} alt="heroimg"></img>
            </figure>
          </div>

          {/* hero right image end */}

          {/* hero content right */}

          <div className="md:basis-1/5 flex justify-between text-center mt-10 flex-wrap gap-3 md:mt-0 md:flex-col md:justify-end md:text-end">
            <div className="mb-10">
              <h2 className="text-headingColor font-[700] text-[32px] ">
                <CountUp start={0} end={2} duration={2} suffix="+" />
              </h2>
              <h4>Years of Exp.</h4>
            </div>

            <div className="mb-10">
              <h2 className="text-headingColor font-[700] text-[32px] ">
                <CountUp start={0} end={20} duration={2} suffix="+" />
              </h2>
              <h4>Project Completed.</h4>
            </div>
          </div>

          {/* hero content right  end*/}
        </div>
      </div>
    </section>
  );
};

export default Hero;

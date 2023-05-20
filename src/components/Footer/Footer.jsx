import React from "react";

const Footer = () => {
  const date = new Date();
  return (
    <footer id="section" className="bg-[#12141e]  pt-10 pb-10 w-full">
      <div className="flex  fle items-center justify-center w-[60%] mx-auto gap-x-5">
        <h2 className="text-[20px] leading-10 text-white font-[600]  ">
          Follow me:
        </h2>

        {/* ----- Icons ------ */}

        <span>
          <a href="#linkedin" className="text-[25px] text-white font-[600]">
            <i class="ri-linkedin-box-fill"></i>
          </a>
        </span>

        <span>
          <a href="#linkedin" className="text-[25px] text-white font-[600]">
          <i class="ri-github-fill"></i>
          </a>
        </span>

        <span>
          <a href="#linkedin" className="text-[25px] text-white font-[600] transition duration-500 hover:scale-75">
          <i class="ri-facebook-box-fill" ></i>
          </a>
        </span>

        <span className="text-[15px] flex items-center gap-2 text-white font-[600] ml-5">

        <i class="ri-copyright-line"></i>
        Copyright Krishna Gupta {date?.getFullYear()}{" "}
        </span>


      </div>
    </footer>
  );
};

export default Footer;

import React from "react";

const Header = () => {
  return (
    <header className="w-full h-[80px] leading-[80px] flex items-center">
      <div className="container">
        <div className="flex items-center justify-between">
          {/* -------- LOGO--------- */}
          <div className="flex items-center gap-[10px]">
            <span className="w-[40px] h-[40px] bg-primaryColor text-white text-[18px] font-[500] rounded-full flex items-center justify-center">
              {" "}
              KG{" "}
            </span>

            <div className="leading-[20px]">
              <h2 className="text-xl text-smallTextColor font-[700]">
                Krishna
              </h2>
              <p className="text-smallTextColor text-[14px] font-[500]">
                personal
              </p>
            </div>
          </div>

          {/* -----------logo end--------- */}

          {/* -----------menu start---------- */}

          <div className="menu">
            <ul className="flex items-center gap-10">
              <li>
                <a className="text-smallTextColor font-[600] pb-1 border-b-2 border-solid border-primaryColor hover:border-b-0" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="text-smallTextColor font-[600] pb-1 border-b-2 border-solid border-primaryColor hover:border-b-0" href="#service">
                  Service
                </a>
              </li>
              <li>
                <a className="text-smallTextColor font-[600] pb-1 border-b-2 border-solid border-primaryColor hover:border-b-0" href="#projects">
                  Portfolio
                </a>
              </li>
              <li>
                <a className="text-smallTextColor font-[600] pb-1 border-b-2 border-solid border-primaryColor hover:border-b-0" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* ----------menu end---------- */}

          {/* -------menu right -------- */}

          <div className="flex items-center gap-4">
          <a href="#contact">
            <button className="flex items-center gap-2 text-smallTextColor font-[600] border border-solid border-smallTextColor py-2 px-4 rounded-[8px] max-h-[40px] hover:bg-smallTextColor hover:text-white hover:font-[500] ease-in duration-300">
              <i class="ri-send-plane-line"></i> Let's Talk
            </button>
            </a>

            <span className="text-2xl  ">
            <i class="ri-menu-line text-smallTextColor md:hidden  cursor-pointer"></i>
          </span>
          </div>

          {/* -------menu end -------- */}

          
        </div>
      </div>
    </header>
  );
};

export default Header;

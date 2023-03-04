import React from "react";

function Hero() {
  return (
    <div className="grid grid-cols-3 items-center px-10 py-5">
      <div className="lg:pl-20 col-span-3 lg:col-span-2">
        <div className="font-poppins text-2xl pb-3 flex flex-col">
          <div>
            Hi, I'm{" "}
            <span className="font-poppinsbold text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white">
              fida hussain
            </span>
          </div>
          <div>
            <svg
              width="239"
              height="1"
              viewBox="0 0 239 1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="-4.37114e-08"
                y1="0.5"
                x2="239"
                y2="0.499979"
                stroke="url(#paint0_linear_334_6646)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_334_6646"
                  x1="253.5"
                  y1="1"
                  x2="7"
                  y2="1"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.046875" stop-color="white" stop-opacity="0" />
                  <stop offset="0.515625" stop-color="white" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
        <div className="font-poppins text-2xl lg:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-white to-transparent">
          <p>A product Designer focused on</p>
          <span className="font-poppinsbold">
            {" "}
            UX Research & Inclusive Design{" "}
          </span>
          {/* <span className="font-poppinsbold"> Prototyping </span> */}
        </div>
        <div className="mt-6 w-fit rounded-sm bg-gradient-to-r from-[#0091FF] to-white p-[0.5px]">
          <div className=" bg-background hover:bg-gradient-to-r from-[#0091FF] to-white">
            <button className="px-12 py-1 text-base text-transparent bg-clip-text bg-gradient-to-r from- to-white font-poppins hover:text-background hover:font-poppins-bold ">
              <a
                href="https://drive.google.com/file/d/1KxkhgIAmLBVsVmnZ3XyUB9ujuhNfkq_c/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Resume
              </a>
            </button>
          </div>
        </div>
      </div>
      <div className=" ">
        <img
          className="hidden lg:grayscale hover:grayscale-0 hover:-translate-y-1 hover:scale-90 hover:rotate-3  lg:block object-cover lg:w-[400px] h-[430px]"
          src="/fida5.png"
        ></img>
      </div>
    </div>
  );
}
// text-transparent bg-clip-text bg-gradient-to-r from-[#0091FF] to-white font-poppins
export default Hero;

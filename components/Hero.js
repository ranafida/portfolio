import React from "react";

function Hero() {
  return (
    <div className="grid grid-cols-3 items-center px-10 py-5">
      <div className="lg:pl-20 col-span-3 lg:col-span-2">
        <div className="font-poppins text-2xl pb-3 flex flex-col">
          <div>
            I'm{" "}
            <span className="font-poppinsbold text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-900">
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
          Expert in <span className="font-poppinsbold">UX design</span>,
          <span className="font-poppinsbold"> Product Strategy</span>, &
          <span className="font-poppinsbold"> Prototyping </span>
          with a global perspective
        </div>
        <div className="mt-6 w-fit rounded-sm bg-gradient-to-r from-[#0091FF] to-white p-[0.5px]">
          <div className=" bg-background hover:bg-gradient-to-r from-[#0091FF] to-white">
            <button className="px-12 py-1 text-base text-transparent bg-clip-text bg-gradient-to-r from-[#0091FF] to-white font-poppins hover:text-background hover:font-poppins-bold ">
              <a
                href="https://drive.google.com/file/d/16dcm-1Evq5zRsTWHFQc6D_94AMIUMgwf/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Resume
              </a>
            </button>
          </div>
        </div>
      </div>
      <div className="pl-10 col-span-1">
        <img
          className="hidden lg:block object-cover lg:w-[421px] h-[564px]"
          src="/fida.png"
        ></img>
      </div>
    </div>
  );
}
// text-transparent bg-clip-text bg-gradient-to-r from-[#0091FF] to-white font-poppins
export default Hero;

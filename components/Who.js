import React from "react";

function Who() {
  return (
    <div className="px-10 lg:px-28 py-8">
      <div className="font-poppins text-2xl lg:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-white to-transparent">
        <span className="font-poppinsbold">About Me</span>
      </div>
      {/* Text & image */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12 lg:justify-between">
        <div className="py-4 break-keep font-poppins text-white text-xl basis-2/5">
          <p className="pb-5 leading-normal">
            As a User Experience Designer at Gully Cricket, a fantasy sports
            app, I am committed to crafting inclusive and accessible designs
            that are grounded in users' psychology.
          </p>
          <p className="pb-5 ">
            With a Bachelor's degree in Computer Science from{" "}
            <span className="font-poppinsreg ">
              LUMS and over 2 years of professional experience
            </span>{" "}
            working on projects across the health, education, travel, and gaming
            sectors, I have a diverse range of skills that I bring to my work.
          </p>

          <p className="pb-5">
            In my free time, I am an avid foodie, always seeking out new
            culinary experiences, and I also enjoy exploring my creative side
            through photography.
          </p>
        </div>
        <img
          className=" lg:h-[522px] lg:w-[652px] object-contain"
          src="/collage.png"
        ></img>
      </div>
    </div>
  );
}
export default Who;

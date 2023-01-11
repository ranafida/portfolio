import React from "react";

function Projects() {
  return (
    <div className="flex flex-col  px-10 pt-10 pb-5">
      {/* Heading */}
      <div className="font-extrabold pb-2 lg:px-20 text-3xl">Projects</div>
      {/* Projects */}
      <div className="pb-4 lg:pb-10 lg:pt-6 flex flex-col gap-4 lg:flex-row items-center justify-center ">
        <a
          href="https://ranafida.medium.com/designing-a-tele-therapy-app-for-low-literate-users-a-ux-case-study-bab56703dcb0"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/tele.png"
            className=" lg:h-[400px] lg:w-[600px] rounded-xl "
          ></img>
        </a>

        <a
          href="https://gullycricket.us/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/cric2.png"
            className=" lg:h-[400px] lg:w-[600px] rounded-xl"
          ></img>
        </a>
        {/* <div className="h-[246px] w-[290px] border-2 border-rose-500 rounded-xl lg:h-[400px] lg:w-[600px]"></div>
				<div className="h-[246px] w-[290px] border-2 border-rose-500 rounded-xl lg:h-[400px] lg:w-[600px] lg:col-start-2"></div> */}
      </div>

      <div className="pb-4 lg:pb-10 lg:pt-6  flex flex-col gap-4 lg:flex-row items-center justify-center">
        <a
          href="https://foundry.pk/connectr/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/connectr.png"
            className=" lg:h-[400px] lg:w-[600px] rounded-xl "
          ></img>
        </a>
        <img
          src="/sproj.png"
          className=" lg:h-[400px] lg:w-[600px] rounded-xl"
        ></img>

        {/* <div className="h-[246px] w-[290px] border-2 border-rose-500 rounded-xl lg:h-[400px] lg:w-[600px]"></div>
				<div className="h-[246px] w-[290px] border-2 border-rose-500 rounded-xl lg:h-[400px] lg:w-[600px] lg:col-start-2"></div> */}
      </div>
    </div>
  );
}

export default Projects;

import React from "react";

function Projects() {
  return (
    <div className="flex flex-col  px-10 pt-10 pb-5">
      {/* Heading */}
      <div className="font-extrabold pb-2 lg:px-20 text-3xl">Projects</div>
      {/* Projects */}
      <div className="pb-4 lg:pb-10 lg:pt-6 flex flex-col gap-4 lg:flex-row items-center justify-center ">
        <a
          href="https://drive.google.com/file/d/12FpOQWUIDkwsBGdqbtMsY6O4elC15TGN/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/cric3.png"
            className=" lg:h-[400px] lg:w-[600px] rounded-xl"
          ></img>
        </a>
        <a
          href="https://drive.google.com/file/d/1IUrYn38cTxIjSyEEhNZvY6OAd9sd5rN0/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/gcds.png"
            className=" lg:h-[400px] lg:w-[600px] rounded-xl "
          ></img>
        </a>
        {/* <div className="h-[246px] w-[290px] border-2 border-rose-500 rounded-xl lg:h-[400px] lg:w-[600px]"></div>
				<div className="h-[246px] w-[290px] border-2 border-rose-500 rounded-xl lg:h-[400px] lg:w-[600px] lg:col-start-2"></div> */}
      </div>

      <div className="pb-4 lg:pb-10 lg:pt-6  flex flex-col gap-4 lg:flex-row items-center justify-center">
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
          href="https://www.behance.net/gallery/111579931/ConnectR-A-platform-for-research-community-in-Pakistan"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/connectr.png"
            className=" lg:h-[400px] lg:w-[600px] rounded-xl "
          ></img>
        </a>

        {/* <div className="h-[246px] w-[290px] border-2 border-rose-500 rounded-xl lg:h-[400px] lg:w-[600px]"></div>
				<div className="h-[246px] w-[290px] border-2 border-rose-500 rounded-xl lg:h-[400px] lg:w-[600px] lg:col-start-2"></div> */}
      </div>
      {/* New Card div */}
      {/* <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img class="rounded-t-lg" src="/cric3.png" alt="" />
        </a>
        <div class="p-5">
          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
          <a
            href="#"
            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more
            <svg
              class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div> */}
    </div>
  );
}

export default Projects;

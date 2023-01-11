import React from "react";

function Value() {
  return (
    <div className="mt-10 px-10 lg:px-20 py-16 bg-[#001933] lg: grid grid-col-12">
      <div className="font-extrabold text-3xl text-white">
        Recent Achievements
      </div>
      <div className="text-sm text-white pt-2 pb-4 opacity-70">
        These are some of the things I've{" "}
        <span className="font-bold opacity-99">
          accomplished in the last two years{" "}
        </span>
        that I'm grateful of.
      </div>
      <div className="flex flex-col  gap-10 lg:grid grid-cols-4 pt-5 pb-5">
        <div>
          <div className="flex">
            <img className="h-10 w-10" src="/Badge.svg"></img>
            <div>
              <h1 className="text-white font-bold pl-3">
                Top Rated Freelancer
              </h1>
              <div className="text-sm text-white pl-3 pt-2 pr-2 opacity-70">
                Top Rated Freelancer with a proven track record of delivering
                exceptional work.
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex">
            <img className="h-8 w-8" src="/globe.svg"></img>
            <div>
              <h1 className="text-white font-bold pl-3">11+ Countries</h1>
              <div className="text-sm text-white pl-3 pt-2 pr-2 opacity-70">
                An accomplished designer with a diverse international portfolio,
                having worked with clients from more than 11 countries around
                the world
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex">
            <img className="h-8 w-8" src="/work.svg"></img>
            <div>
              <h1 className="text-white font-bold pl-3">40+ Projects</h1>
              <div className="text-sm text-white pl-3 pt-2 pr-2 opacity-70">
                A highly productive freelancer, with a portfolio of over 40
                successfully completed projects.
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex">
            <img className="h-8 w-10" src="/trust.svg"></img>
            <div>
              <h1 className="text-white font-bold pl-3">
                91% client recommended
              </h1>
              <div className="text-sm text-white pl-3 pt-2 pr-2 opacity-70">
                Trusted by clients, with a 91% positive recommendation rate on
                Upwork.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Value;

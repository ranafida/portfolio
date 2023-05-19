// import React from "react";

// function Value() {
//   return (
//     <div className="mt-10 px-10 lg:px-20 py-16 bg-[#001933] lg: grid grid-col-12">
//       <div className="font-extrabold text-3xl text-white">
//         Recent Achievements
//       </div>
//       <div className="text-sm text-white pt-2 pb-4 opacity-70">
//         These are some of the things I've{" "}
//         <span className="font-bold opacity-99">
//           accomplished in the last two years{" "}
//         </span>
//         that I'm grateful of.
//       </div>
//       <div className="flex flex-col  gap-10 lg:grid grid-cols-4 pt-5 pb-5">
//         <div>
//           <div className="flex">
//             <img className="h-10 w-10" src="/Badge.svg"></img>
//             <div>
//               <h1 className="text-white font-bold pl-3">
//                 Top Rated Freelancer
//               </h1>
//               <div className="text-sm text-white pl-3 pt-2 pr-2 opacity-70">
//                 Top Rated Freelancer with a proven track record of delivering
//                 exceptional work.
//               </div>
//             </div>
//           </div>
//         </div>
//         <div>
//           <div className="flex">
//             <img className="h-8 w-8" src="/globe.svg"></img>
//             <div>
//               <h1 className="text-white font-bold pl-3">11+ Countries</h1>
//               <div className="text-sm text-white pl-3 pt-2 pr-2 opacity-70">
//                 An accomplished designer with a diverse international portfolio,
//                 having worked with clients from more than 11 countries around
//                 the world
//               </div>
//             </div>
//           </div>
//         </div>
//         <div>
//           <div className="flex">
//             <img className="h-8 w-8" src="/work.svg"></img>
//             <div>
//               <h1 className="text-white font-bold pl-3">40+ Projects</h1>
//               <div className="text-sm text-white pl-3 pt-2 pr-2 opacity-70">
//                 A highly productive freelancer, with a portfolio of over 40
//                 successfully completed projects.
//               </div>
//             </div>
//           </div>
//         </div>
//         <div>
//           <div className="flex">
//             <img className="h-8 w-10" src="/trust.svg"></img>
//             <div>
//               <h1 className="text-white font-bold pl-3">
//                 91% client recommended
//               </h1>
//               <div className="text-sm text-white pl-3 pt-2 pr-2 opacity-70">
//                 Trusted by clients, with a 91% positive recommendation rate on
//                 Upwork.
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Value;
import React from "react";

function Value() {
  return (
    <div className="mt-10 px-10 lg:px-20 py-16 bg-[#001021] lg:pl-32 lg:grid lg:grid-cols-12 gap-10">
      <div className="col-span-12 lg:col-span-3">
        <div className="font-extrabold text-3xl text-white">
          Recent Achievements
        </div>
        <div className="text-sm text-white pt-2 pb-4 opacity-70">
          These are some of the things I've{" "}
          <span className="font-bold opacity-99">
            accomplished in the last two years{" "}
          </span>
          that I'm grateful for.
        </div>
      </div>
      <div className="col-span-12 lg:grid-cols-5  lg:col-span-8 bg-[#001933] p-20">
        <div className="grid grid-cols-2 gap-6 lg:gap-4">
          <div className="flex">
            <img className="h-10 w-10" src="/Badge.svg" alt="Badge"></img>
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
          <div className="flex">
            <img className="h-8 w-8" src="/globe.svg" alt="Globe"></img>
            <div>
              <h1 className="text-white font-bold pl-3">11+ Countries</h1>
              <div className="text-sm text-white pl-3 pt-2 pr-2 opacity-70">
                A globally experienced designer with a diverse portfolio,
                serving clients from 11+ countries.
              </div>
            </div>
          </div>
          <div className="flex">
            <img className="h-8 w-8" src="/work.svg" alt="Work"></img>
            <div>
              <h1 className="text-white font-bold pl-3">40+ Projects</h1>
              <div className="text-sm text-white pl-3 pt-2 pr-2 opacity-70">
                A highly productive freelancer, with a portfolio of over 40
                successfully completed projects.
              </div>
            </div>
          </div>

          <div className="flex">
            <img className="h-8 w-8" src="/trust.svg" alt="Work"></img>
            <div>
              <h1 className="text-white font-bold pl-3">
                91% client recommendation
              </h1>
              <div className="text-sm text-white pl-3 pt-2 pr-2 opacity-70">
                A highly trusted professional with a remarkable 91% positive
                recommendation rate on Upwork, endorsed by satisfied clients.
              </div>
            </div>
          </div>

          {/* <div className="flex">
            <img className="h-8 w-8" src="/trust.svg"></img>

            <div>
              <h1 className="text-white font-bold pl-3">
                91% client recommended
              </h1>

              <div className="text-sm text-white pl-3 pt-2 pr-2 opacity-70">
                Trusted by clients, with a 91% positive recommendation rate on
                Upwork.
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Value;

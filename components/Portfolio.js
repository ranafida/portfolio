import React from "react";

const dribbbleLink = "https://dribbble.com/ranafida";
const linkedinLink = "https://www.linkedin.com/in/ranafida";
const behanceLink = "https://www.behance.net/ranafida_";

const Portfolio = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-extrabold  mb-4 mx-2 md:mx-0">
        Social Links
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="rounded shadow-md text-white bg-dribbble p-4 mx-2 md:mx-0">
          <a href={dribbbleLink} target="_blank" rel="noopener noreferrer">
            <h2 className="text-lg font-bold mb-2">Dribbble</h2>
            <p className="text-gray-300">View my Dribbble profile</p>
          </a>
        </div>
        <div className="rounded shadow-md text-white bg-linkedin p-4 mx-2 md:mx-0">
          <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
            <h2 className="text-lg font-bold mb-2">LinkedIn</h2>
            <p className="text-gray-300">Connect with me on LinkedIn</p>
          </a>
        </div>
        <div className="rounded shadow-md text-white bg-behance p-4 mx-2 md:mx-0">
          <a href={behanceLink} target="_blank" rel="noopener noreferrer">
            <h2 className="text-lg font-bold mb-2">Behance</h2>
            <p className="text-gray-300">View my Behance profile</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

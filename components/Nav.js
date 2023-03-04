import React from "react";
import Link from "next/link";
const links = [
  { name: "Projects", link: "/" },
  { name: "About", link: "/About" },
  // { name: "Contact" },
  // { name: "Resume", link: "www.google.com" },
];

function Nav() {
  return (
    <div className="flex justify-between py-7 lg:px-20">
      <div className="pl-10 ">
        <a href="/">
          <img className="" src="/fida2.svg"></img>
        </a>
      </div>
      <div className="flex">
        {links.map((item, key) => {
          return (
            <div
              key={key}
              className="px-6 cursor-pointer font-sans font-semibold"
            >
              <Link href={item.link}>{item.name}</Link>
            </div>
          );
        })}
        <div className="px-6 cursor-pointer font-sans font-semibold">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://drive.google.com/file/d/1KxkhgIAmLBVsVmnZ3XyUB9ujuhNfkq_c/view?usp=sharing"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default Nav;

import React from "react";

function Footer() {
	return (
		<div className="px-10 py-5 grid grid-cols-3">
			<div className="bg-[#001933] p-10 col-span-2">
				<span className="text-sm">Email me at</span>{" "}
				<div className=" underline text-3xl font-bold">
					hello@fidahussain.design
				</div>
			</div>
			<div className="bg-[#3B87CA] col-span-1 justify-center items-center flex flex-col p-10">
				<p className="font-normal text-sm">
					Would like to know more about my journey as a designer? Look me up on
				</p>
				<div className="underline text-3xl font-bold">Linkedin</div>
			</div>
		</div>
	);
}

export default Footer;

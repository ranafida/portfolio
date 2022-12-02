import React from "react";

function Value() {
	return (
		<div className="px-10 py-5 bg-gradient-to-r from-[#ABFDCA] via-[#68EE98] to-[#00E268]">
			<div className="font-extrabold text-3xl text-black">Why Me ?</div>
			<div className="text-sm text-[#122721] pt-5 opacity-70">
				These are some of the things I've{" "}
				<span className="font-bold">accomplished in the last two years</span>
				that I'm grateful of.
			</div>
			<div className="grid grid-cols-4 pt-5 pb-5">
				<div>
					<div className="flex">
						<img src="/value_img.png"></img>
						<h1 className="text-[#122721] font-bold pl-3">
							Top Rated Freelancer
						</h1>
					</div>
					<div className="text-sm text-[#122721] pt-5 opacity-70">
						These are some of the things I've accomplished in the last two years
						that I'm grateful of.
					</div>
				</div>
				<div>
					<div className="flex">
						<img src="/value_img.png"></img>
						<h1 className="text-[#122721] font-bold pl-3">40+ Projects</h1>
					</div>
					<div className="text-sm text-[#122721] pt-5 opacity-70">
						These are some of the things I've accomplished in the last two years
						that I'm grateful of.
					</div>
				</div>
				<div>
					<div className="flex">
						<img src="/value_img.png"></img>
						<h1 className="text-[#122721] font-bold pl-3">11+ countries</h1>
					</div>
					<div className="text-sm text-[#122721] pt-5 opacity-70">
						These are some of the things I've accomplished in the last two years
						that I'm grateful of.
					</div>
				</div>
				<div>
					<div className="flex">
						<img src="/value_img.png"></img>
						<h1 className="text-[#122721] font-bold pl-3">
							91% client recommended
						</h1>
					</div>
					<div className="text-sm text-[#122721] pt-5 opacity-70">
						These are some of the things I've accomplished in the last two years
						that I'm grateful of.
					</div>
				</div>
			</div>
		</div>
	);
}

export default Value;

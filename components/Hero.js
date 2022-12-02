import React from "react";

function Hero() {
	return (
		<div className="grid grid-cols-3 items-center px-10 py-5">
			<div className="pl-10 col-span-1">
				<img className="object-cover w-[421px] h-[564px]" src="/fida.png"></img>
			</div>
			<div className="pl-20 col-span-2">
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
				<div className="font-poppins text-4xl text-transparent bg-clip-text bg-gradient-to-r from-white to-transparent">
					I design beautiful <span className="font-poppinsbold">products</span>,
					meaningful <span className="font-poppinsbold">experience</span>, &
					solve <span className="font-poppinsbold">problems</span>!
				</div>
				<div className="mt-6 w-fit rounded-sm bg-gradient-to-r from-[#0091FF] to-white p-[0.5px]">
					<div className=" bg-background">
						<button className="px-12 py-1 text-base text-transparent bg-clip-text bg-gradient-to-r from-[#0091FF] to-white font-poppins">
							Let's talk
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
// text-transparent bg-clip-text bg-gradient-to-r from-[#0091FF] to-white font-poppins
export default Hero;

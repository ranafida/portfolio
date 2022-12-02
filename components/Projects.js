import React from "react";

function Projects() {
	return (
		<>
			<div className="grid grid-cols-2 items-center px-10 py-5">
				<div className="font-extrabold text-3xl">Some Work!</div>
				<div></div>
			</div>
			<div className="grid grid-cols-2 items-center px-10 py-5">
				{/* Project card 1 */}
				<div className="h-96 w-72 bg-blue-400 border rounded-xl mt-10">
					Add project sample image here
				</div>
				{/* Project card 2 */}
				<div className="h-96 w-72 bg-purple-800 border rounded-xl">
					Add project sample image here
				</div>
			</div>
			<div className="grid grid-cols-2 items-center px-10 py-5">
				{/* Project card 1 */}
				<div className="flex flex-col items-center justify-center">
					<p>
						Here is some of my work which I am proud of. Want to know more about
						what I do on daily basis?
					</p>
					<button className="py-2 px-6 items-start justify-start bg-[#3B87CA]">
						View More Projects
					</button>
				</div>
				{/* Project card 3 */}
				<div className="h-96 w-72 bg-slate-800 border rounded-xl">
					Add project sample image here
				</div>
			</div>
		</>
	);
}

export default Projects;

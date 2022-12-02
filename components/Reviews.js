import React from "react";

function Reviews() {
	return (
		<div className="px-10 py-5">
			<div className="font-extrabold text-3xl">Endorsements</div>
			<div className="grid grid-cols-3 items-center pt-6">
				{/* Review 1 */}
				<div className="h-72 w-56 bg-[#141416] rounded-md">
					{" "}
					Add review here
				</div>
				{/* Review 2 */}
				<div className="h-72 w-56 bg-[#141416] rounded-md">Add review here</div>
				{/* Review 3 */}
				<div className="h-72 w-56 bg-[#141416] rounded-md">Add review here</div>
			</div>
		</div>
	);
}

export default Reviews;

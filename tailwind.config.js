/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				background: "#001021",
			},
			fontFamily: {
				poppins: ["poppins"],
				poppinsbold: ["poppinsbold"],
			},
		},
	},
	plugins: [],
};

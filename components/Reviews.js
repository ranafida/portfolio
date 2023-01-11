import React from "react";

function Reviews() {
  return (
    <div className="mt-0 px-10 py-5 lg:px-32 ">
      <div className="font-extrabold text-3xl">Endorsements</div>
      <div className="lg:flex gap-6 pt-6 pb-6">
        {/* Review 1 */}
        <div className="lg:max-w-sm p-5 bg-[#001933] rounded-md">
          {" "}
          <svg
            className="h-8 w-8 mt-2 ml-3 opacity-40 "
            viewBox="0 0 36 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.65099 10.5C8.27003 10.5 7.90444 10.5595 7.54057 10.6137C7.65844 10.2077 7.77974 9.79474 7.97449 9.42374C8.16924 8.88474 8.47332 8.41749 8.77569 7.94674C9.02853 7.43749 9.4744 7.09274 9.8024 6.65699C10.1458 6.23349 10.6139 5.95174 10.9846 5.59999C11.3484 5.23249 11.8251 5.04874 12.2043 4.78974C12.6007 4.55699 12.9457 4.29974 13.3147 4.17724L14.2355 3.78874L15.0453 3.44399L14.2167 0.0524902L13.1969 0.304489C12.8706 0.388489 12.4725 0.48649 12.0198 0.60374C11.5569 0.691239 11.0632 0.93099 10.5131 1.14974C9.96982 1.39824 9.34115 1.56624 8.7569 1.96524C8.16924 2.34674 7.49103 2.66524 6.89311 3.17624C6.31399 3.70299 5.61528 4.15974 5.09936 4.82999C4.53561 5.45649 3.97869 6.11449 3.54649 6.86349C3.04594 7.57749 2.70598 8.36149 2.34723 9.13674C2.02265 9.91199 1.76128 10.7047 1.54773 11.4747C1.14286 13.0182 0.961776 14.4847 0.891735 15.7395C0.833651 16.996 0.867818 18.0407 0.939568 18.7967C0.965193 19.1537 1.01303 19.5002 1.04719 19.74L1.0899 20.034L1.13432 20.0235C1.43816 21.4774 2.13763 22.8136 3.1518 23.8773C4.16597 24.941 5.4534 25.6889 6.86516 26.0344C8.27692 26.3799 9.75533 26.309 11.1294 25.8297C12.5034 25.3504 13.7169 24.4825 14.6295 23.3262C15.5421 22.17 16.1165 20.7727 16.2862 19.296C16.456 17.8193 16.2142 16.3236 15.5888 14.9818C14.9633 13.64 13.9799 12.507 12.7521 11.7139C11.5243 10.9207 10.1025 10.4999 8.65099 10.5ZM27.4427 10.5C27.0617 10.5 26.6961 10.5595 26.3322 10.6137C26.4501 10.2077 26.5714 9.79474 26.7662 9.42374C26.9609 8.88474 27.265 8.41749 27.5674 7.94674C27.8202 7.43749 28.2661 7.09274 28.5941 6.65699C28.9374 6.23349 29.4055 5.95174 29.7762 5.59999C30.1401 5.23249 30.6167 5.04874 30.996 4.78974C31.3923 4.55699 31.7374 4.29974 32.1064 4.17724L33.0272 3.78874L33.8369 3.44399L33.0084 0.0524902L31.9885 0.304489C31.6622 0.388489 31.2642 0.48649 30.8115 0.60374C30.3485 0.691239 29.8548 0.93099 29.3047 1.14974C28.7632 1.39999 28.1328 1.56624 27.5486 1.96699C26.9609 2.34849 26.2827 2.66699 25.6848 3.17799C25.1057 3.70474 24.4069 4.16149 23.891 4.82999C23.3273 5.45649 22.7704 6.11449 22.3382 6.86349C21.8376 7.57749 21.4977 8.36149 21.1389 9.13674C20.8143 9.91199 20.5529 10.7047 20.3394 11.4747C19.9345 13.0182 19.7534 14.4847 19.6834 15.7395C19.6253 16.996 19.6595 18.0407 19.7312 18.7967C19.7569 19.1537 19.8047 19.5002 19.8389 19.74L19.8816 20.034L19.926 20.0235C20.2298 21.4774 20.9293 22.8136 21.9435 23.8773C22.9576 24.941 24.2451 25.6889 25.6568 26.0344C27.0686 26.3799 28.547 26.309 29.921 25.8297C31.2951 25.3504 32.5086 24.4825 33.4212 23.3262C34.3337 22.17 34.9081 20.7727 35.0779 19.296C35.2477 17.8193 35.0058 16.3236 34.3804 14.9818C33.755 13.64 32.7715 12.507 31.5438 11.7139C30.316 10.9207 28.8941 10.4999 27.4427 10.5Z"
              fill="white"
            />
          </svg>
          <p className="text-md ml-3 mt-1 text-white">
            <span className="opacity-50">
              Fida is a special talent. We initially hired Fida in a part-time
              role while he was in his last semester at university and
            </span>{" "}
            <strong className="font-semibold text-[color:white]">
              {" "}
              immediately saw a palpable impact on our product
            </strong>
          </p>
          <div className="mt-6">
            <h4 className="font-bold text-sm ml-3 mt-2 text-white">
              Philip Levine
            </h4>
            <p className="font-light text-sm ml-3 opacity-40">
              Founder & CEO GullyCricket
            </p>
          </div>
        </div>
        {/* Review 2 */}
        <div className="hidden lg:block max-w-sm p-5 bg-[#001933] rounded-md">
          {" "}
          <svg
            className="h-8 w-8 mt-2 ml-3 opacity-40 "
            viewBox="0 0 36 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.65099 10.5C8.27003 10.5 7.90444 10.5595 7.54057 10.6137C7.65844 10.2077 7.77974 9.79474 7.97449 9.42374C8.16924 8.88474 8.47332 8.41749 8.77569 7.94674C9.02853 7.43749 9.4744 7.09274 9.8024 6.65699C10.1458 6.23349 10.6139 5.95174 10.9846 5.59999C11.3484 5.23249 11.8251 5.04874 12.2043 4.78974C12.6007 4.55699 12.9457 4.29974 13.3147 4.17724L14.2355 3.78874L15.0453 3.44399L14.2167 0.0524902L13.1969 0.304489C12.8706 0.388489 12.4725 0.48649 12.0198 0.60374C11.5569 0.691239 11.0632 0.93099 10.5131 1.14974C9.96982 1.39824 9.34115 1.56624 8.7569 1.96524C8.16924 2.34674 7.49103 2.66524 6.89311 3.17624C6.31399 3.70299 5.61528 4.15974 5.09936 4.82999C4.53561 5.45649 3.97869 6.11449 3.54649 6.86349C3.04594 7.57749 2.70598 8.36149 2.34723 9.13674C2.02265 9.91199 1.76128 10.7047 1.54773 11.4747C1.14286 13.0182 0.961776 14.4847 0.891735 15.7395C0.833651 16.996 0.867818 18.0407 0.939568 18.7967C0.965193 19.1537 1.01303 19.5002 1.04719 19.74L1.0899 20.034L1.13432 20.0235C1.43816 21.4774 2.13763 22.8136 3.1518 23.8773C4.16597 24.941 5.4534 25.6889 6.86516 26.0344C8.27692 26.3799 9.75533 26.309 11.1294 25.8297C12.5034 25.3504 13.7169 24.4825 14.6295 23.3262C15.5421 22.17 16.1165 20.7727 16.2862 19.296C16.456 17.8193 16.2142 16.3236 15.5888 14.9818C14.9633 13.64 13.9799 12.507 12.7521 11.7139C11.5243 10.9207 10.1025 10.4999 8.65099 10.5ZM27.4427 10.5C27.0617 10.5 26.6961 10.5595 26.3322 10.6137C26.4501 10.2077 26.5714 9.79474 26.7662 9.42374C26.9609 8.88474 27.265 8.41749 27.5674 7.94674C27.8202 7.43749 28.2661 7.09274 28.5941 6.65699C28.9374 6.23349 29.4055 5.95174 29.7762 5.59999C30.1401 5.23249 30.6167 5.04874 30.996 4.78974C31.3923 4.55699 31.7374 4.29974 32.1064 4.17724L33.0272 3.78874L33.8369 3.44399L33.0084 0.0524902L31.9885 0.304489C31.6622 0.388489 31.2642 0.48649 30.8115 0.60374C30.3485 0.691239 29.8548 0.93099 29.3047 1.14974C28.7632 1.39999 28.1328 1.56624 27.5486 1.96699C26.9609 2.34849 26.2827 2.66699 25.6848 3.17799C25.1057 3.70474 24.4069 4.16149 23.891 4.82999C23.3273 5.45649 22.7704 6.11449 22.3382 6.86349C21.8376 7.57749 21.4977 8.36149 21.1389 9.13674C20.8143 9.91199 20.5529 10.7047 20.3394 11.4747C19.9345 13.0182 19.7534 14.4847 19.6834 15.7395C19.6253 16.996 19.6595 18.0407 19.7312 18.7967C19.7569 19.1537 19.8047 19.5002 19.8389 19.74L19.8816 20.034L19.926 20.0235C20.2298 21.4774 20.9293 22.8136 21.9435 23.8773C22.9576 24.941 24.2451 25.6889 25.6568 26.0344C27.0686 26.3799 28.547 26.309 29.921 25.8297C31.2951 25.3504 32.5086 24.4825 33.4212 23.3262C34.3337 22.17 34.9081 20.7727 35.0779 19.296C35.2477 17.8193 35.0058 16.3236 34.3804 14.9818C33.755 13.64 32.7715 12.507 31.5438 11.7139C30.316 10.9207 28.8941 10.4999 27.4427 10.5Z"
              fill="white"
            />
          </svg>
          <p className="text-md ml-3 mt-1 text-white">
            <span className="opacity-50">Great work as always! Fida is </span>
            <strong className="font-semibold text-[color:white] opacity-100">
              highly proficient at Figma
            </strong>{" "}
            <span className="opacity-50">
              and worked with me to quickly sketch out the screens I needed. A
              pleasure to work with.{" "}
            </span>
          </p>
          <div className="mt-6">
            <h4 className="font-bold text-sm ml-3 mt-2 text-white">
              Sean Basinski
            </h4>
            <p className="font-light text-sm ml-3 opacity-40">
              Founder Kiki NYC
            </p>
          </div>
        </div>
        {/* Review 3 */}
        <div className="hidden lg:block max-w-sm p-5 bg-[#001933] rounded-md">
          {" "}
          <svg
            className="h-8 w-8 mt-2 ml-3 opacity-40 "
            viewBox="0 0 36 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.65099 10.5C8.27003 10.5 7.90444 10.5595 7.54057 10.6137C7.65844 10.2077 7.77974 9.79474 7.97449 9.42374C8.16924 8.88474 8.47332 8.41749 8.77569 7.94674C9.02853 7.43749 9.4744 7.09274 9.8024 6.65699C10.1458 6.23349 10.6139 5.95174 10.9846 5.59999C11.3484 5.23249 11.8251 5.04874 12.2043 4.78974C12.6007 4.55699 12.9457 4.29974 13.3147 4.17724L14.2355 3.78874L15.0453 3.44399L14.2167 0.0524902L13.1969 0.304489C12.8706 0.388489 12.4725 0.48649 12.0198 0.60374C11.5569 0.691239 11.0632 0.93099 10.5131 1.14974C9.96982 1.39824 9.34115 1.56624 8.7569 1.96524C8.16924 2.34674 7.49103 2.66524 6.89311 3.17624C6.31399 3.70299 5.61528 4.15974 5.09936 4.82999C4.53561 5.45649 3.97869 6.11449 3.54649 6.86349C3.04594 7.57749 2.70598 8.36149 2.34723 9.13674C2.02265 9.91199 1.76128 10.7047 1.54773 11.4747C1.14286 13.0182 0.961776 14.4847 0.891735 15.7395C0.833651 16.996 0.867818 18.0407 0.939568 18.7967C0.965193 19.1537 1.01303 19.5002 1.04719 19.74L1.0899 20.034L1.13432 20.0235C1.43816 21.4774 2.13763 22.8136 3.1518 23.8773C4.16597 24.941 5.4534 25.6889 6.86516 26.0344C8.27692 26.3799 9.75533 26.309 11.1294 25.8297C12.5034 25.3504 13.7169 24.4825 14.6295 23.3262C15.5421 22.17 16.1165 20.7727 16.2862 19.296C16.456 17.8193 16.2142 16.3236 15.5888 14.9818C14.9633 13.64 13.9799 12.507 12.7521 11.7139C11.5243 10.9207 10.1025 10.4999 8.65099 10.5ZM27.4427 10.5C27.0617 10.5 26.6961 10.5595 26.3322 10.6137C26.4501 10.2077 26.5714 9.79474 26.7662 9.42374C26.9609 8.88474 27.265 8.41749 27.5674 7.94674C27.8202 7.43749 28.2661 7.09274 28.5941 6.65699C28.9374 6.23349 29.4055 5.95174 29.7762 5.59999C30.1401 5.23249 30.6167 5.04874 30.996 4.78974C31.3923 4.55699 31.7374 4.29974 32.1064 4.17724L33.0272 3.78874L33.8369 3.44399L33.0084 0.0524902L31.9885 0.304489C31.6622 0.388489 31.2642 0.48649 30.8115 0.60374C30.3485 0.691239 29.8548 0.93099 29.3047 1.14974C28.7632 1.39999 28.1328 1.56624 27.5486 1.96699C26.9609 2.34849 26.2827 2.66699 25.6848 3.17799C25.1057 3.70474 24.4069 4.16149 23.891 4.82999C23.3273 5.45649 22.7704 6.11449 22.3382 6.86349C21.8376 7.57749 21.4977 8.36149 21.1389 9.13674C20.8143 9.91199 20.5529 10.7047 20.3394 11.4747C19.9345 13.0182 19.7534 14.4847 19.6834 15.7395C19.6253 16.996 19.6595 18.0407 19.7312 18.7967C19.7569 19.1537 19.8047 19.5002 19.8389 19.74L19.8816 20.034L19.926 20.0235C20.2298 21.4774 20.9293 22.8136 21.9435 23.8773C22.9576 24.941 24.2451 25.6889 25.6568 26.0344C27.0686 26.3799 28.547 26.309 29.921 25.8297C31.2951 25.3504 32.5086 24.4825 33.4212 23.3262C34.3337 22.17 34.9081 20.7727 35.0779 19.296C35.2477 17.8193 35.0058 16.3236 34.3804 14.9818C33.755 13.64 32.7715 12.507 31.5438 11.7139C30.316 10.9207 28.8941 10.4999 27.4427 10.5Z"
              fill="white"
            />
          </svg>
          <p className="text-md ml-3 mt-1 text-white">
            <span className="opacity-50">
              Fida is a special talent. We initially hired Fida in a part-time
              role while he was in his last semester at university and
            </span>{" "}
            <strong className="font-semibold text-[color:white]">
              {" "}
              immediately saw a palpable impact on our product
            </strong>
          </p>
          <div className="mt-6">
            <h4 className="font-bold text-sm ml-3 mt-2 text-white">
              Philip Levine
            </h4>
            <p className="font-light text-sm ml-3 opacity-40">
              Founder & CEO GullyCricket
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reviews;

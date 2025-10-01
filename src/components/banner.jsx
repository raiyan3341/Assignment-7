import React from "react";
const Banner = ({ inProgressCount, resolvedCount }) => {
  return (
    <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 mt-10 px-4">
      <div className="flex justify-center">
        <div className="text-center w-full h-[200px] md:h-[230px] rounded-lg bg-gradient-to-tr from-[#632ee3] to-[#9f62f2] flex flex-col items-center justify-center">
          <p className="text-white text-lg md:text-xl">In-Progress</p>
          <p className="text-white mt-4 text-4xl md:text-5xl font-bold">{inProgressCount}</p>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="text-center w-full h-[200px] md:h-[230px] rounded-lg bg-gradient-to-r from-[#54cf68] to-[#00827a] flex flex-col items-center justify-center">
          <p className="text-white text-lg md:text-xl">Resolved</p>
          <p className="text-white mt-4 text-4xl md:text-5xl font-bold">{resolvedCount}</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;

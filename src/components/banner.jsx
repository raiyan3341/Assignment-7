import React from "react";

const Banner = ({ inProgressCount, resolvedCount }) => {
  return (
    <div className="max-w-[1240px] mx-auto flex justify-center gap-5 mt-10">
      {/* In-Progress */}
      <div className="text-center w-[610px] h-[230px] rounded-lg bg-gradient-to-tr from-[#632ee3] to-[#9f62f2]">
        <div className="py-15">
          <p className="text-white">In-Progress</p>
          <p className="text-white mt-7 text-5xl">{inProgressCount}</p>
        </div>
      </div>

      {/* Resolved */}
      <div className="text-center w-[610px] h-[230px] rounded-lg bg-gradient-to-r from-[#54cf68] to-[#00827a]">
        <div className="py-15">
          <p className="text-white">Resolved</p>
          <p className="text-white mt-7 text-5xl">{resolvedCount}</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;

import React from "react";

const Banner = ({ inProgressCount, resolvedCount }) => {
  return (
    <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 mt-10 px-4">
      <div className="flex justify-center">
        <div className="text-center w-full h-[200px] md:h-[230px] rounded-lg flex flex-col items-center justify-center text-white bg-cover bg-center relative overflow-hidden"
          style={{
            backgroundImage: "linear-gradient(to top right, #632ee3, #9f62f2), url('/vector1.png')",
            backgroundBlendMode: "overlay",
          }}>
          <p className="text-lg md:text-xl">In-Progress</p>
          <p className="mt-4 text-4xl md:text-5xl font-bold">{inProgressCount}</p>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="text-center w-full h-[200px] md:h-[230px] rounded-lg flex flex-col items-center justify-center text-white bg-cover bg-center relative overflow-hidden"
          style={{
            backgroundImage: "linear-gradient(to right, #54cf68, #00827a), url('/vector1.png')",
            backgroundBlendMode: "overlay",
          }}>
          <p className="text-lg md:text-xl">Resolved</p>
          <p className="mt-4 text-4xl md:text-5xl font-bold">{resolvedCount}</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;

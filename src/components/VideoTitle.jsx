import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%]  px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 w-1/4 text-lg">{overview}</p>
      <div>
        <button className="bg-white p-4 px-10 text-black text-lg rounded-lg hover:opacity-80 cursor-pointer">
          ▶️ Play
        </button>
        <button className="bg-gray-500 mx-2 p-4 px-10 text-white text-lg opacity-60 rounded-lg hover:opacity-80 cursor-pointer">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;

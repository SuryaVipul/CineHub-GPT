import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-3xl md:text-6xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-6 w-1/4 text-lg">{overview}</p>
      <div className="my-4 md:my-0">
        <button className="bg-white p-4 px-10 text-black text-lg rounded-lg hover:opacity-80 cursor-pointer">
          ▶️ Play
        </button>
        <button className="hidden md:inline-block bg-gray-500 mx-2 p-4 px-10 text-white text-lg opacity-60 rounded-lg hover:opacity-80 cursor-pointer">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;

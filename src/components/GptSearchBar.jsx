import React from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);

  console.log(langKey);
  return (
    <div className="pt-[10%] flex justify-center">
      <form className=" w-1/2 bg-black grid grid-cols-12 ">
        <input
          type="text"
          className=" p-4 m-4 bg-white text-black col-span-9"
          placeholder={lang[langKey]?.gptSearchPlaceHolder || "..Search"}
        />
        <button className=" p-4 m-4 ml-4 bg-red-700 text-white rounded-lg col-span-3">
          {lang[langKey]?.search || "Search"}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;

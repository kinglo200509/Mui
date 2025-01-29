import React from "react";
import Dropdown from "./Dropdown";

export default function Navbar() {
  return (
    <div className="flex justify-center items-center">
      <div className="w-[95%] border-2 border-transparent py-2 px-4 flex justify-between items-center rounded-[7px] text-[#7edbdb] bg-black/40">
        {/* Logo */}
        <div className="">
          pokemon
        </div>
        {/* Info */}
        <div className=" flex gap-4 justify-center items-center">
          <div><Dropdown/></div>
          <a href="#">Home</a>
          <a href="#">About us</a>
          <a href="#">Contact us</a>
        </div>
      </div>
    </div>
  );
}

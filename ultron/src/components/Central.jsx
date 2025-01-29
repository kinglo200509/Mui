import React from "react";
import Full from "./../img/Full.jpeg";

export default function Central() {
  return (
    <div className="flex justify-center font-display pt-5">
      <div
        className="w-[95%] flex gap-5 bg-cover bg-center rounded-[8px]"
        style={{ backgroundImage: `url(${Full})` }}
      >
        {/* Content inside the div */}
        <div className="flex justify-center py-25 w-full h-[600px]">
          <div className="text-[#7edbdb] w-[80%]">
            <div className="text-[40px] flex flex-col">
              Empowering Technology for a
              <span>Safer World!</span>
            </div>
            {/* smaller text */}
            <div>
              Using AI to detect and prevent crimes, ensuring safety and
              <br />
              empowerment for women.
            </div>

            {/* Button */}
            <div className="mt-5">
              <button className="px-8 py-2 font-bold text-[15px] bg-[#7edbdb] text-black rounded-[10px] hover:bg-[#F5A6A6] hover:cursor-pointer transition duration-300">
                Check It Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

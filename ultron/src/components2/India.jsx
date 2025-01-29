import React from "react";
import DelhiMap from "./../img/DelohiMap.jpeg";
import crime from "./../img/crime.jpeg";
export default function India() {
  return (
    <div className="flex justify-center text-[#2E3231]  pt-10">
      <div className="w-[95%]  flex   gap-4 ">
        {/* img */}
        <div className="  flex  ">
          <img src={DelhiMap} alt="" className="w-screen overflow-hidden" />
        </div>
        {/* text ,img*/}
        <div className="flex flex-col  gap-3 py-3">
          {/*text  */}
          <div className="">
            <div className="text-3xl text-start font-semibold ">
              Revolutionizing Crime Detection for a Safer Tomorrow
            </div>
            <div className=" ">
              Our Crime Detection System leverages advanced technology to
              identify and prevent criminal activities in real-time. By
              integrating AI-driven analysis and surveillance, it enhances
              public safety and aids law enforcement. With accurate insights and
              predictive capabilities, we are building a safer and more secure
              world for everyone.
            </div>
          </div>
          {/* img, text */}
          <div className="flex justify-center ">
            <div className="flex    gap-2 ">
              <img src={crime} alt="" className="w-[60%] rounded-[7px]" />
              <div className="flex flex-col gap-3">
                <div className="font-bold text-[20px]">Key Points:</div>
                <div className="flex ">
                  <span className="font-bold">1  &nbsp;</span>
                  <span className="font-bold">  Weapon Detection</span>
                </div>
                <div className="flex ">
                  <span className="font-bold">2  &nbsp;</span>
                  <span className="font-bold">  Criminal Recognition</span>
                </div>
                <div className="flex ">
                  <span className="font-bold">3  &nbsp;</span>
                  <span className="font-bold">  Fight Detection </span>
                </div>
                <div className="flex ">
                  <span className="font-bold">4  &nbsp;</span>
                  <span className="font-bold">  Suspicious Activity</span>
                </div>
                <div className="flex ">
                  <span className="font-bold">5  &nbsp;</span>
                  <span className="font-bold">  Gunshot & Explosion Alerts</span>
                </div>
                <div className="flex ">
                  <span className="font-bold">6  &nbsp;</span>
                  <span className="font-bold">  Crowd Monitoring </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

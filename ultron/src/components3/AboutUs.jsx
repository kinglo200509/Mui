import React from "react";
import Team from "./../img/Team.jpeg"

export default function AboutUs() {
  return (
    <div className="flex justify-center text-[#F7EDCA] pt-10">
      <div className=" w-[95%]  flex  justify-center items-center ">
        {/* starting */}
        <div className="w-[40%]">
          <img src={Team} alt="" className="rounded-[8px]" />
        </div>
        {/* text */}
        <div className="w-[60%] px-10  flex flex-col">
          <div className="text-[35px]   py-5">About us</div>
          <div className="text-[15px] flex flex-col gap-4">
            <div>
              At [Your Company Name], we harness the power of AI and machine
              learning to create innovative crime detection solutions. Our
              technology specializes in real-time weapon detection, facial
              recognition, fight detection, and suspicious activity monitoring,
              helping law enforcement and security teams respond faster and more
              effectively.
            </div>
            <div>
              With a commitment to safety, accuracy, and innovation, we
              continuously refine our algorithms to detect potential threats
              before they escalate. Our AI-driven systems integrate seamlessly
              with CCTV networks, smart city infrastructure, and law enforcement
              databases, ensuring a proactive approach to crime prevention.
            </div>
            <div>
              Beyond detection, we focus on crime analytics and predictive
              policing, using data-driven insights to identify high-risk areas
              and prevent incidents before they occur. By combining technology,
              security, and intelligence, we are shaping a future where public
              safety is smarter, faster, and more reliable.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

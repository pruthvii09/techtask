import React from "react";
import Abode1 from "../../assets/adobe1.png";
import Abode2 from "../../assets/adobe2.png";
import Figma from "../../assets/figma.png";

const JobInformation = () => {
  return (
    <div className="border-b px-16 py-4 border-[#E7E7E7] flex gap-8">
      <div>
        <h3 className="text-sm text-[#6E6D6D]">Skills Required</h3>
        <div className="flex flex-col gap-2">
          <div className="border mt-2 px-3 w-fit py-1 flex gap-1 items-center justify-start border-[#D0D5DD] rounded-md">
            <img className="w-4 h-4" src={Figma} alt="" />
            <span className="text-xs">Figma</span>
          </div>
          <div className="border px-3 w-fit py-1 flex gap-1 items-center justify-start border-[#D0D5DD] rounded-md">
            <img className="w-4 h-4" src={Abode1} alt="" />
            <span className="text-xs">Adobe Illustrator</span>
          </div>
          <div className="border px-3 w-fit py-1 flex gap-1 items-center justify-start border-[#D0D5DD] rounded-md">
            <img className="w-4 h-4" src={Abode2} alt="" />
            <span className="text-xs">Adobe XD</span>
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-sm text-[#6E6D6D]">Preferred Language</h3>
        <strong className="text-[#3D3D3D] text-base">English</strong>
      </div>
      <div>
        <h3 className="text-sm text-[#6E6D6D]">Type</h3>
        <strong className="text-[#3D3D3D] text-base">Full time</strong>
      </div>
      <div>
        <h3 className="text-sm text-[#6E6D6D]">Years of Experience</h3>
        <strong className="text-[#3D3D3D] text-base">
          3+ Years of Experience
        </strong>
      </div>
    </div>
  );
};

export default JobInformation;

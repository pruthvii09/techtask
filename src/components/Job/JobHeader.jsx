import React from "react";
import PinIcon from "../../assets/Icons/PinIcon";
import MoneyIcon from "../../assets/Icons/MoneyIcon";

const JobHeader = ({ data }) => {
  return (
    <div className="border-b px-16 py-4 border-[#E7E7E7]">
      <div className="flex gap-4 items-center ">
        <h1 className="text-[#3D3D3D] text-3xl font-bold">{data?.title}</h1>
        <p className="text-xs text-[#888888]">posted {data?.date}</p>
        {data?.active ? (
          <div className="text-xs flex gap-1 items-center border bg-[#ECFDF3] border-[#ABEFC6] py-1 px-2 rounded-full">
            <div className="bg-[#17B26A] h-1 w-1 rounded-full"></div>
            <span className="text-[#067647] font-semibold">Open</span>
          </div>
        ) : (
          <div className="text-xs flex gap-1 items-center border bg-[#FEEFEF] border-[#FCC5C5] py-1 px-2 rounded-full">
            <div className="bg-[#D92D20] h-1 w-1 rounded-full"></div>
            <span className="text-[#B42318] font-semibold">Closed</span>
          </div>
        )}
      </div>
      <div className="mt-8 flex gap-4 items-center">
        <div className="flex items-center gap-1 text-[#5D5D5D]">
          <PinIcon />
          <span>{data?.location}</span>
        </div>
        <div className="w-1 h-1 rounded-full bg-[#D1D1D1]"></div>
        <div className="flex items-center gap-1 text-[#5D5D5D]">
          <MoneyIcon />
          <span>{data?.salary}</span>
        </div>
      </div>
    </div>
  );
};

export default JobHeader;

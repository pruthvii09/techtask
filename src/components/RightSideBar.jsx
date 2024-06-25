import React from "react";
import DeleteIcon from "../assets/Icons/DeleteIcon";
import EditIcon from "../assets/Icons/EditIcon";
import UsersIcon from "../assets/Icons/UsersIcon";
import MatchIcon from "../assets/Icons/MatchIcon";
import MessageIcon from "../assets/Icons/MessageIcon";
import EyeIcon from "../assets/Icons/EyeIcon";

const RightSideBar = () => {
  return (
    <div className="w-1/3 px-4 py-6">
      <div className="flex gap-8 justify-between">
        <button className="w-full flex items-center justify-center gap-1 rounded-md text-[#DC4A2D] py-2 bg-[#FEF4F2] border border-[#DC4A2D]">
          <DeleteIcon />
          Delete Job
        </button>
        <button className="w-full flex items-center justify-center gap-1 text-white rounded-md bg-[#DC4A2D] py-2">
          <EditIcon />
          Edit Job
        </button>
      </div>
      <div className="flex flex-col mt-8">
        <div className="py-4 border-b px-2 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <UsersIcon />
            <span className="text-[#4F4F4F]">Applicants</span>
          </div>
          <strong className="text-lg">400</strong>
        </div>
        <div className="py-4 border-b px-2 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <MatchIcon />
            <span className="text-[#4F4F4F]">Matches</span>
          </div>
          <strong className="text-lg">100</strong>
        </div>
        <div className="py-4 border-b px-2 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <MessageIcon color="#4F4F4F" size={20} />
            <span className="text-[#4F4F4F]">Messages</span>
          </div>
          <strong className="text-lg">147</strong>
        </div>
        <div className="py-4 border-b px-2 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <UsersIcon />
            <span className="text-[#4F4F4F]">Views</span>
          </div>
          <strong className="text-lg">200</strong>
        </div>
      </div>
    </div>
  );
};

export default RightSideBar;

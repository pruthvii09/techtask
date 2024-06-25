import React from "react";
import JobIcon from "../assets/Icons/JobIcon";
import MessageIcon from "../assets/Icons/MessageIcon";
import PaymentIcon from "../assets/Icons/PaymentIcon";
import BellIcon from "../assets/Icons/BellIcon";
import ProfileImage from "../assets/profile.png";
import DownIcon from "../assets/Icons/DownIcon";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const routes = [
    { to: "/jobs", label: "Jobs", Icon: JobIcon },
    { to: "/messages", label: "Messages", Icon: MessageIcon },
    { to: "/payments", label: "Payments", Icon: PaymentIcon },
  ];
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <div className="flex  px-7 py-4 justify-between border-b border-gray-200 items-center">
      <div className="text-[#DC4A2D] font-semibold text-lg px-4 py-2 bg-[#E7E7E7]">
        Logo
      </div>
      <div className="flex items-center px-2 py-1 border border-[#D1D1D1] rounded-full gap-4">
        {routes.map(({ to, label, Icon }) => (
          <Link
            key={to}
            to={to}
            className={`flex cursor-pointer items-center px-3 py-2 rounded-full gap-2 ${
              pathname === to
                ? "bg-[#DC4A2D] border-2 border-[#FCB4A5] text-white"
                : "text-[#B0B0B0]"
            }`}
          >
            <Icon color={pathname === to ? "white" : "#B0B0B0"} size={25} />
            <span>{label}</span>
          </Link>
        ))}
      </div>
      <div className="flex gap-3 items-center">
        <BellIcon className="cursor-pointer" />
        <div className="flex cursor-pointer items-center gap-1">
          <img className="h-8 w-8 rounded-full" src={ProfileImage} alt="" />
          <DownIcon />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

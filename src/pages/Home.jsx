import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { jobDetails } from "../data";
import JobHeader from "../components/Job/JobHeader";
import JobInformation from "../components/Job/JobInformation";
import JobDescription from "../components/Job/JobDescription";
import AboutCompany from "../components/Job/AboutCompany";
import RightSideBar from "../components/RightSideBar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div>
        <div className="flex gap-16 px-16 py-4 border-b border-[#E7E7E7] relative text-[#888888]">
          <Link to="/jobs" className="relative text-[#DC4A2D] font-semibold">
            Job preview
            <div className="absolute bottom-[-16px] left-1/2 transform -translate-x-1/2 w-2/3 h-[2px] bg-[#DC4A2D]"></div>
          </Link>
          <Link to="/jobs">Applicants</Link>
          <Link to="/jobs">Match</Link>
          <Link to="/jobs">Messages</Link>
        </div>
        <div className="flex w-full justify-between">
          <div className="w-2/3 border-r">
            <JobHeader data={jobDetails} />
            <JobInformation />
            <JobDescription />
            <AboutCompany />
          </div>
          <RightSideBar />
        </div>
      </div>
    </div>
  );
};

export default Home;

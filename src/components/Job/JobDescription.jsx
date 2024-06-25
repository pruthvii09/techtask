import React from "react";

const JobDescription = () => {
  return (
    <div className="border-b px-16 py-4 border-[#E7E7E7]">
      <div className="job-description p-4 bg-white rounded-lg">
        <h1 className="text-sm text-[#6E6D6D] mb-2">About The Job</h1>
        <div className="mb-1">
          <h3 className="mb-1">Responsibilities:</h3>
          <ul className="list-decimal pl-5 space-y-0.5">
            <li>Handle the UI/UX research design</li>
            <li>
              Work on researching on latest web applications designs & trends
            </li>
            <li>Work on conceptualizing and visualizing</li>
            <li>
              Work on creating graphics content and other graphic related works
            </li>
          </ul>
        </div>

        <div className="mb-1">
          <h3 className="mb-1">Benefits:</h3>
          <ul className="list-disc pl-5 space-y-0.5">
            <li>Health insurance</li>
            <li>Provident Fund</li>
          </ul>
        </div>

        <div className="mb-1">
          <h3 className="mb-1">Schedule:</h3>
          <p>Day shift</p>
        </div>

        <div className="mb-1">
          <h3 className="mb-1">Supplemental Pay Types:</h3>
          <ul className="list-disc pl-5 space-y-0.5">
            <li>Performance bonus</li>
            <li>Yearly bonus</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-1">Work Location: In person</h3>
        </div>
      </div>
    </div>
  );
};

export default JobDescription;

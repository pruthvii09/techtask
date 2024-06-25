import React from "react";
import Profile from "../../assets/profile.png";
const AboutCompany = () => {
  return (
    <div className="border-b px-16 py-4 border-[#E7E7E7]">
      <div className="flex gap-2 items-center text-lg">
        <img className="h-10 w-10 rounded-md" src={Profile} alt="" />
        <h1 className="text-[#4F4F4F]">Atlassian</h1>
      </div>
      <div className="flex gap-10 mt-6">
        <div className="flex flex-col gap-4">
          <div>
            <h1 className="text-sm text-[#6E6D6D]">Company size</h1>
            <span className="text-base text-[#3D3D3D]">1k - 2k Employees</span>
          </div>
          <div>
            <h1 className="text-sm text-[#6E6D6D]">Sector</h1>
            <span className="text-base text-[#3D3D3D]">
              Information Technology, Infrastructure
            </span>
          </div>
          <div>
            <h1 className="text-sm text-[#6E6D6D]">Founded In</h1>
            <span className="text-base text-[#3D3D3D]">2019</span>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div>
            <h1 className="text-sm text-[#6E6D6D]">Type</h1>
            <span className="text-base text-[#3D3D3D]">Private</span>
          </div>
          <div>
            <h1 className="text-sm text-[#6E6D6D]">Funding</h1>
            <span className="text-base text-[#3D3D3D]">Bootstrapped</span>
          </div>
          <div>
            <h1 className="text-sm text-[#6E6D6D]">Founded By</h1>
            <span className="text-base text-[#3D3D3D]">
              <a href="https://www.google.com/search?sca_esv=2e8a42a989b18c72&sca_upv=1&sxsrf=ADLYWIJfOan6Il30oG_UZfuOgWJJQyy6jw:1718807486320&q=Scott+Farquhar&si=ACC90nwLLwns5sISZcdzuISy7t-NHozt8Cbt6G3WNQfC9ekAgGn2U5_lv-iJKoEW9GGV3oQ_U1KzHM3grBvdDJw8AP9jrnXyCRK6qNSYCb3jHdJP2aGUh_HIEtaCjacARkKoOWECb-5Ob0Mv9e_MI4c_vMY8PVDZWA6-OO6yqvbV1TIRgm4P4FtNTbK6rHh3ojk0CXz_ZgaKdVf6VpRiXhZ7YUAy8LzI5HMyryDEBGhju5Ama_FvECG7_qGa4tSKw7XIbHa99s9btrbgRBy-6z85_2p6BPYPhA%3D%3D&sa=X&sqi=2&ved=2ahUKEwip7KLt8OeGAxVBRmwGHTGjBGsQmxMoAXoECDYQAw">
                Scott Farquhar
              </a>
              ,
              <a href="https://www.google.com/search?sca_esv=2e8a42a989b18c72&sca_upv=1&sxsrf=ADLYWIJfOan6Il30oG_UZfuOgWJJQyy6jw:1718807486320&q=Mike+Cannon-Brookes&si=ACC90nwLLwns5sISZcdzuISy7t-NHozt8Cbt6G3WNQfC9ekAgJsvrQUWPOKZ8iETJQdvnbU2UFD7BVWUbHmvxqkn_X6fnbX-LLuIjmm9FYDOCdLoN8dDFvHE1HsZUhT6XIGTrbZRGGDIDstquY_yluK6YQX1NkHtmo0wsp8wVD7ouAbjfDvaQHjO4Iyd2AKnCQbPH8-Ah5otgNPwHcJ39HScqiWv6SVxYRXUiznwfdbns6uKnydurua8JyyTlcxFT3lPFMTAfAAzqy-x0DxflUh6aHFtCEgFOChGuNdxmDlND1wruAK7SbM%3D&sa=X&sqi=2&ved=2ahUKEwip7KLt8OeGAxVBRmwGHTGjBGsQmxMoAnoECDYQBA">
                Mike Cannon-Brookes
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCompany;

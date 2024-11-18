import React, { useState } from 'react'
import NavBar from '../utility/NavBar';
// import { CiSearch, CiCirclePlus, ImCross } from '@heroicons/react/solid'
import gojo from "../images/gojo.png"
import { CiSearch, CiCirclePlus } from "react-icons/ci";
import { ImCross } from "react-icons/im";

const Button = ({ children, className, onClick }) => (
  <button
    className={`px-4 py-2 rounded-md transition duration-300 ease-in-out ${className}`}
    onClick={onClick}
  >
    {children}
  </button>
);

const SearchInput = () => (
  <div className="flex items-center bg-white rounded-md py-1 px-2 shadow-sm">
    <CiSearch className="w-5 h-5 text-gray-400 mr-2" />
    <input placeholder='Search' className="outline-none w-full h-10" />
  </div>
);

const TableHeader = () => (
  <div className="hidden md:flex justify-between border-b pb-2 mb-2 font-semibold text-gray-700">
    <div className="w-1/4">Full name</div>
    <div className="w-1/4">Hiring Stage</div>
    <div className="w-1/4">Applied Date</div>
    <div className="w-1/4">Action</div>
  </div>
);

const TableRow = ({ name, stage, date }) => {
  const stageColors = {
    Interviewed: 'bg-yellow-100 text-yellow-800',
    Shortlisted: 'bg-indigo-100 text-indigo-800',
    Hired: 'bg-green-100 text-green-800',
    Declined: 'bg-red-100 text-red-800',
  };

  return (
    <div className="flex flex-col md:flex-row justify-between py-4 border-b last:border-b-0">
      <div className="md:w-1/4 font-medium mt-2">{name}</div>
      <div className={`md:w-1/4 mt-2 md:mt-0 ${stageColors[stage]} rounded-full p-2 text-xs font-semibold text-center w-max`}>
        {stage}
      </div>
      <div className="md:w-1/4 mt-2 md:mt-2 text-gray-600">{date}</div>
      <div className="md:w-1/4 mt-2 md:mt-0">
        <Button className="bg-blue-50 text-blue-600 hover:bg-blue-100">See Resume</Button>
      </div>
    </div>
  );
};

const ProfessorInfoItem = ({ label, value }) => (
  <div className="mb-6">
    <div className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-1">{label}</div>
    <div className="text-gray-900">{value}</div>
  </div>
);

const ProfessorProfile = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const applicants = [
    { name: 'Gojo Satoru', stage: 'Interviewed', date: '13/05/2023' },
    { name: 'Yuji Itadori', stage: 'Shortlisted', date: '14/05/2023' },
    { name: 'Megumi Fushiguro', stage: 'Hired', date: '15/05/2023' },
    { name: 'Nobara Kugisaki', stage: 'Declined', date: '16/05/2023' },
    { name: 'Maki Zenin', stage: 'Interviewed', date: '17/05/2023' },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <NavBar />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row">

          {/* Left column (65%) */}
          <div className="w-full lg:w-[65%] lg:pr-8 mb-8 lg:mb-0">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8 space-y-4 md:space-y-0">
              <div className="flex items-center space-x-16">
                <div className="text-2xl font-bold text-gray-800">Total Applicants: {applicants.length}</div>
                <div className="w-64">
                  <SearchInput />
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <TableHeader />
              {applicants.map((applicant, index) => (
                <TableRow key={index} {...applicant} />
              ))}
            </div>
          </div>

          {/* Right column (35%) */}
          <div className="w-full lg:w-[35%]">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48 bg-gradient-to-r from-blue-500 to-indigo-600">
                <img src={gojo} className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-32 h-32 rounded-full border-4 border-white object-cover" alt="Gojo Satoru" />
              </div>
              <div className="pt-20 px-6 pb-6">
                <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">Gojo Satoru</h2>
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-4 text-gray-700 border-b pb-2">Basic Information</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <ProfessorInfoItem label="AGE" value="28" />
                    <ProfessorInfoItem label="POSITION" value="Special Grade Sorcerer" />
                    <ProfessorInfoItem label="QUALIFICATION" value="P.H.D in Jujutsu Tech" />
                    <ProfessorInfoItem label="EXPERIENCE" value="10+ years" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-700">Biodata</h3>
                  <p className="text-gray-600 mb-6">The strongest jujutsu sorcerer in the world, known for his mastery of the Six Eyes and Limitless Curse Technique.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default ProfessorProfile
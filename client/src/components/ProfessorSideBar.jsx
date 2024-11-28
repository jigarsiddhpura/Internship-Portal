import React, { useState } from 'react'
import { HiOutlineHome } from 'react-icons/hi'
import { FiSettings, FiUsers } from 'react-icons/fi'
import { SiGooglecalendar  } from 'react-icons/si'
import { FaRegPenToSquare } from "react-icons/fa6";
import logoImg from '../images/logo.png';
import avatarImg from '../images/gojo.png'
import { useNavigate, useLocation } from 'react-router-dom';

const Image = ({ src, alt, ...props }) => {
    return <img src={src} alt={alt} {...props} />;
}

const OuterSidebar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleClick = (path) => {
        navigate(path);
    }

    const isActive = (path) => location.pathname === path;
    const buttonClass = (path) => `text-gray-600 p-2 rounded-3xl ${isActive(path) ? 'bg-blue-500 text-white' : 'hover:bg-blue-500 hover:text-white'}`

    return (
        <aside className="w-16 h-screen bg-blue-50 flex flex-col items-center p-4">
            <div className="flex-1 space-y-4">
                <Image src={logoImg} alt="Logo" width={40} height={40} />
                <div className="group relative">
                    <button
                        onClick={() => handleClick('/')}
                        className={buttonClass('/home')}
                    >
                        <HiOutlineHome className="w-5 h-5" />
                    </button>
                    <span className="absolute left-full ml-2 px-2 py-1 bg-gray-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        Home
                    </span>
                </div>

                <div className="group relative">
                    <button
                        onClick={() => handleClick('/billing')}
                        className={buttonClass('/billing')}
                    >
                        <SiGooglecalendar className="w-5 h-5" />
                    </button>
                    <span className="absolute left-full ml-2 px-2 py-1 bg-gray-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        Calendar
                    </span>
                </div>

                <div className="group relative">
                    <button
                        onClick={() => handleClick('/PostInternship')}
                        className={buttonClass('/PostInternship')}
                    >
                        <FaRegPenToSquare className="w-5 h-5" />
                    </button>
                    <span className="absolute left-full ml-2 px-2 py-1 bg-gray-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        Post Internship
                    </span>
                </div>
            </div>
            <div className="space-y-4">
                <div className="group relative">
                    <button className="text-gray-600 p-2 rounded-3xl hover:bg-blue-500 hover:text-white">
                        <FiSettings className="w-6 h-6" />
                    </button>
                    <span className="absolute left-full ml-2 px-2 py-1 bg-gray-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        Settings
                    </span>
                </div>

                <div className="group relative">
                    <button className="p-2">
                        <Image src={avatarImg} alt="User Avatar" width={40} height={40} className="rounded-full" />
                    </button>
                    <span className="absolute left-full ml-2 px-2 py-1 bg-gray-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        Profile
                    </span>
                </div>
            </div>
        </aside>
    )
}


const ProfessorSidebar = () => {
    const location = useLocation();

    return (
        <div className="flex">
            <OuterSidebar />
        </div>
    )
}

export default ProfessorSidebar
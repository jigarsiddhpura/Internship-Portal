import React, { useState } from 'react'
import { HiOutlineHome } from 'react-icons/hi'
import { FiSettings, FiHelpCircle, FiUsers } from 'react-icons/fi'
import { BsCurrencyRupee } from 'react-icons/bs'
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
    const buttonClass = (path) => `text-gray-600 p-2 rounded-3xl ${isActive(path) ? 'bg-blue-500 text-white' : 'hover:bg-blue-200 hover:text-white'}`

    return (
        <aside className="w-16 h-screen bg-blue-50 flex flex-col items-center p-4">
            <div className="flex-1 space-y-4">
                <Image src={logoImg} alt="Logo" width={40} height={40} />
                <button
                    onClick={() => handleClick('/home')}
                    className={buttonClass('/home')}
                >
                    <HiOutlineHome className="w-5 h-5" />
                </button>
                <button
                    onClick={() => handleClick('/billing')}
                    className={buttonClass('/billing')}
                >
                    <BsCurrencyRupee className="w-5 h-5" />
                </button>
                <button
                    onClick={() => handleClick('/')}
                    className={buttonClass('/')}
                >
                    <FiUsers className="w-5 h-5" />
                </button>
            </div>
            <div className="space-y-4">
                <button className="text-gray-600 p-2 rounded-3xl hover:bg-blue-500 hover:text-white">
                    <FiSettings className="w-6 h-6" />
                </button>
                <button className="text-gray-600 p-2 rounded-3xl hover:bg-blue-500 hover:text-white">
                    <FiHelpCircle className="w-6 h-6" />
                </button>
                <button className="p-2">
                    <Image src={avatarImg} alt="User Avatar" width={40} height={40} className="rounded-full" />
                </button>
            </div>
        </aside>
    )
}

const InnerSidebar = () => {
    return (
        <aside className="w-60 h-screen bg-white border-r border-gray-200 flex flex-col">
            <div className="py-4 px-4 flex items-center justify-start">
                <span className="text-xl font-semibold">Dashboard</span>
            </div>

            <div className="px-4 py-2 flex items-center justify-start">
                <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">My Account</h2>
            </div>
            <nav className="flex-1 overflow-y-auto p-2">
                <button className={"flex items-center w-full px-9 py-2 text-base font-medium hover:bg-blue-400 hover:text-white rounded-xl"}>
                    Recruitment
                </button>
                <button className={"flex items-center w-full px-9 py-2 text-base font-medium hover:bg-blue-400 hover:text-white rounded-xl"}>
                    Onboarding
                </button>
                <button className={"flex items-center w-full px-9 py-2 text-base font-medium hover:bg-blue-400 hover:text-white rounded-xl"}>
                    Calendar
                </button>
            </nav>

            <div className="p-4 border-t border-gray-200">
                <div className="flex items-center">
                    <div className="ml-3">
                        <p className="text-sm font-medium">Nayanish Damania</p>
                        <p className="text-xs text-gray-500">nayanish@vouch.digital</p>
                    </div>
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
            <InnerSidebar />
        </div>
    )
}

export default ProfessorSidebar
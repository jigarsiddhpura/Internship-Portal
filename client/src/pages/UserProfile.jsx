import React, { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "../components/Avatar";
import { Button } from "../components/Button";
import { Card, CardContent } from "../components/Card";
import { Input } from "../components/Input";
import PersonSharpIcon from '@mui/icons-material/PersonSharp';
import AppShortcutIcon from '@mui/icons-material/AppShortcut';
import {
    Search,
    LayoutDashboard,
    FolderKanban,
    FileText,
    BarChart2,
    HelpCircle,
    ChevronRight,
    ChevronLeft,
} from 'lucide-react';
import { Link } from "react-router-dom";
import {useAuth} from "../contexts/authContext";

export default function UserProfile() {
    const {currentUser} = useAuth();
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const Sidebar = () => {
        return (
            <>
            <aside className={`fixed inset-y-0 left-0 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-200 ease-in-out w-64 flex-col bg-[#1C1D2C] text-white flex`}>
                <div className="p-6 space-y-6">
                    {/* Close Button */}
                    <button onClick={() => setSidebarOpen(false)} className="text-gray-500 hover:text-gray-700 focus:outline-none hover:bg-gray-200 p-2 rounded-full">
                        <ChevronLeft size={24} />
                    </button>
                    <div className="flex flex-col items-center text-center space-y-2">
                        <Avatar className="w-16 h-16">
                            <AvatarImage src="/placeholder.svg" alt="Filip Martin Jose" />
                            <AvatarFallback>FM</AvatarFallback>
                        </Avatar>
                        <div>
                            <h2 className="font-semibold">Filip Martin Jose</h2>
                            <span className="text-sm text-gray-400">Pro Level</span>
                        </div>
                    </div>

                    <nav className="space-y-2">
                        <Link
                            to="#"
                            className="flex items-center space-x-3 px-4 py-2.5 rounded-lg bg-white/10"
                        >
                            <LayoutDashboard size={20} />
                            <span>Dashboard</span>
                        </Link>
                        <Link
                            to="#"
                            className="flex items-center space-x-3 px-4 py-2.5 rounded-lg hover:bg-white/10"
                        >
                            <FolderKanban size={20} />
                            <span>Projects</span>
                        </Link>
                        <Link
                            to="#"
                            className="flex items-center space-x-3 px-4 py-2.5 rounded-lg hover:bg-white/10"
                        >
                            <FileText size={20} />
                            <span>Invoices</span>
                        </Link>
                        <Link
                            to="#"
                            className="flex items-center space-x-3 px-4 py-2.5 rounded-lg hover:bg-white/10"
                        >
                            <BarChart2 size={20} />
                            <span>Reports</span>
                        </Link>
                    </nav>
                </div>

                <div className="mt-auto p-6">
                    <div className="flex items-center space-x-2 text-sm">
                        <HelpCircle size={18} />
                        <span>Having trouble?</span>
                        <Link to="#" className="text-blue-400 hover:underline">
                            Contact us
                        </Link>
                    </div>
                </div>
            </aside>
            </>
        )
    }

    return (
        <div className="flex h-screen bg-gray-100">
            {/* <Sidebar /> */}

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto">
                <div className="max-w-6xl mx-auto p-6 space-y-6">
                    {/* Header */}
                    <div className="flex justify-between items-center">
                        {/* Sidebar Toggle Button */}
                        {/* <button onClick={() => setSidebarOpen(true)} className="text-gray-500 hover:text-gray-700 focus:outline-none hover:bg-gray-200 p-2 rounded-full">
                            <ChevronRight size={24} />
                        </button> */}
                        <h1 className="text-2xl font-semibold">
                            Hello, <span className="text-gray-400">{currentUser?.firstName}</span>
                        </h1>
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                            <Input
                                className="pl-10 w-64"
                                placeholder="Search for projects"
                                type="search"
                            />
                        </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid md:grid-cols-3 gap-6">
                        <Card className="hover:shadow-lg hover:scale-105 transition-transform duration-200">
                            <CardContent className="p-6 bg-blue-500 text-white">
                                <div className="flex flex-col items-start space-y-2">
                                    <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center">
                                        <BarChart2 size={20} />
                                    </div>
                                    <h3 className="font-medium">Earnings</h3>
                                    <p className="text-3xl font-bold">€8,350</p>
                                    <p className="text-sm text-white/80">↑ 10% since last month</p>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="hover:shadow-lg hover:scale-105 transition-transform duration-200">
                            <CardContent className="p-6 flex items-center space-x-4">
                                <div className="h-12 w-12 rounded-xl bg-[#6366F1] text-white flex items-center justify-center text-xl font-semibold">
                                    98
                                </div>
                                <div>
                                    <h3 className="font-medium">Rank</h3>
                                    <p className="text-sm text-gray-500">In top 30%</p>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="hover:shadow-lg hover:scale-105 transition-transform duration-200">
                            <CardContent className="p-6 flex items-center space-x-4">
                                <div className="h-12 w-12 rounded-xl bg-[#6366F1] text-white flex items-center justify-center text-xl font-semibold">
                                    32
                                </div>
                                <div>
                                    <h3 className="font-medium">Projects</h3>
                                    <p className="text-sm text-gray-500">8 this month</p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 ">
                        {/* Recent Invoices */}
                        <div className="space-y-4 ">
                            <div className="flex items-start">
                                <h2 className="text-xl font-semibold">Recent Invoices</h2>
                                {/* <Button variant="link">See all projects</Button> */}
                            </div>
                            <Card className="hover:shadow-lg hover:scale-105 transition-transform duration-200">
                                <CardContent className="p-0">
                                    <div className="p-4 flex items-center justify-between border-b">
                                        <div className="flex items-center space-x-3">
                                            <PersonSharpIcon fontSize="large" />
                                            <div className="flex flex-col items-start">
                                                <p className="font-medium">Alexander Williams</p>
                                                <p className="text-sm text-gray-500">JD Holdings</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-sm">Paid</span>
                                            <span className="font-semibold">€ 1,200.87</span>
                                        </div>
                                    </div>
                                    <div className="p-4 flex items-center justify-between">
                                        <div className="flex items-center space-x-3">
                                            <PersonSharpIcon fontSize="large" />
                                            <div>
                                                <p className="font-medium">John Philips</p>
                                                <p className="text-sm text-gray-500">Inchor Techs</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <span className="px-2 py-1 bg-red-100 text-red-700 rounded text-sm">Late</span>
                                            <span className="font-semibold">€ 12,989.88</span>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Your Projects */}
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <h2 className="text-xl font-semibold">Your Projects</h2>
                                <Button variant="link">See all projects</Button>
                            </div>
                            <Card className="hover:shadow-lg hover:scale-105 transition-transform duration-200">
                                <CardContent className="p-0">
                                    <div className="p-4 flex items-center justify-between border-b">
                                        <div className="flex items-center space-x-3">
                                            <AppShortcutIcon fontSize="large" />
                                            <div>
                                                <p className="font-medium">Logo design for Bakery</p>
                                                <p className="text-sm text-gray-500">2 days remaining</p>
                                            </div>
                                        </div>
                                        <ChevronRight className="text-gray-400 hover:bg-gray-200 rounded-full p-1" />
                                    </div>
                                    <div className="p-4 flex items-center justify-between">
                                        <div className="flex items-center space-x-3">
                                            <AppShortcutIcon fontSize="large" />
                                            <div>
                                                <p className="font-medium">Personal branding project</p>
                                                <p className="text-sm text-gray-500">5 days remaining</p>
                                            </div>
                                        </div>
                                        <ChevronRight className="text-gray-400 hover:bg-gray-200 rounded-full p-1" />
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    {/* Recommended Project */}
                    <Card className="hover:shadow-lg hover:scale-105 transition-transform duration-200">
                        <CardContent className="p-6">
                            <div className="flex justify-between items-start">
                                <div className="flex items-start space-x-3">
                                    <AppShortcutIcon fontSize="large" />
                                    <div>
                                        <div className="flex items-center space-x-2">
                                            <p className="font-medium">Thomas Martin</p>
                                            <span className="text-sm text-gray-500">Updated 12m ago</span>
                                            <span className="px-2 py-1 bg-[#6366F1] text-white rounded-full text-xs">Design</span>
                                        </div>
                                        <h3 className="text-lg font-semibold mt-1">Need a designer to form branding essentials for my business.</h3>
                                        <p className="text-gray-500 mt-1">Looking for a talented brand designer to create all the branding materials for my new startup.</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-2xl font-semibold">€8,700</p>
                                    <p className="text-sm text-gray-500">/month</p>
                                    <Button className="mt-2" variant="outline">Full time</Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                </div>
            </main>
        </div>
    );
}

"use client";

import React from "react";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from 'react-query';
import {
  Calendar as CalendarIcon,
  LayoutDashboard,
  Settings,
  UserPlus,
  Users,
  Clock,
  Bell,
  Mail,
  MoreVertical,
  ChevronLeft,
  ChevronRight,
  Phone,
  ChevronsRight,
} from "lucide-react";
import { 
  Button, 
  Card, 
  CardContent, 
  CardHeader, 
  Typography, 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableRow, 
  Avatar, 
  LinearProgress, 
  Chip, 
  IconButton 
} from "@mui/material";
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import ProfessorSidebar from "../components/ProfessorSideBar";

const HIRING_NEEDS = [
  { role: "Content Designers", count: 3, progress: 75 },
  { role: "Node.js Developers", count: 9, progress: 25 },
  { role: "Senior UI Designer", count: 1, progress: 0 },
  { role: "Marketing Managers", count: 2, progress: 45 },
];

const CANDIDATES = [
  { name: "John Doe", role: "UI Designer", status: "Tech interview" },
  { name: "Ella Clinton", role: "Content designer", status: "Task" },
  { name: "Mike Tyler", role: "Node.js Developer", status: "Resume review" },
  { name: "Marie Arch", role: "Node.js Developer", status: "Task" },
  { name: "Sandra Huffman", role: "UX Designer", status: "Final interview" },
];

const NEW_APPLICANTS = [
  { name: "Lewis S. Cunningham", role: "iOS Developer", avatar: "/placeholder.svg" },
  { name: "Danny Nelson", role: "Node.js Developer", avatar: "/placeholder.svg" },
  { name: "Jennifer Patterson", role: "Marketing Manager", avatar: "/placeholder.svg" },
  { name: "Timothy Watson", role: "iOS Developer", avatar: "/placeholder.svg" },
  { name: "Kimberly Rutledge", role: "Senior UI Designer", avatar: "/placeholder.svg" },
];

const WelcomeBanner = () => (
  <Card className="mb-6 bg-primary text-white">
    <CardContent className="flex items-center justify-between p-6">
      <div>
        <Typography variant="h5" className="mb-2">Hello Katie!</Typography>
        <Typography variant="body1" className="mb-4">
          You have 16 new applications. It is a lot of work for today! So let's start 👋
        </Typography>
        <Button variant="contained" color="secondary">Review it!</Button>
      </div>
      <img src="/placeholder.svg" alt="Welcome" className="h-32 w-32" />
    </CardContent>
  </Card>
);

const HiringNeeds = () => (
  <div className="mb-6">
    <div className="mb-4 flex items-center justify-between">
      <Typography variant="h6">You need to hire</Typography>
      <Button variant="text">See all</Button>
    </div>
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {HIRING_NEEDS.map((item) => (
        <Card key={item.role}>
          <CardContent className="p-4">
            <Typography variant="h3" className="mb-2">{item.count}</Typography>
            <Typography variant="body2" color="textSecondary" className="mb-4">
              {item.role}
            </Typography>
            <LinearProgress variant="determinate" value={item.progress} />
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
);

const RecruitmentProgress = () => (
  <Card className="mb-6">
    <CardHeader
      title="Recruitment Progress"
      action={<Button variant="text">See all</Button>}
    />
    <CardContent>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Full Name</TableCell>
            <TableCell>Profession</TableCell>
            <TableCell>Status</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {CANDIDATES.map((candidate) => (
            <TableRow key={candidate.name}>
              <TableCell>{candidate.name}</TableCell>
              <TableCell>{candidate.role}</TableCell>
              <TableCell>
                <Chip label={candidate.status} variant="outlined" />
              </TableCell>
              <TableCell align="right">
                <IconButton>
                  <MoreVertical className="h-4 w-4" />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </CardContent>
  </Card>
);

const CalendarWidget = () => (
  <div className="mb-6">
    <div className="mb-4 flex items-center justify-between">
      <Typography variant="h6">March 2020</Typography>
      <div className="flex gap-2">
        <IconButton><ChevronLeft className="h-4 w-4" /></IconButton>
        <IconButton><ChevronRight className="h-4 w-4" /></IconButton>
      </div>
    </div>
    {/* Calendar grid would go here */}
  </div>
);

const NewApplicants = () => (
  <div>
    <div className="mb-4 flex items-center justify-between">
      <Typography variant="h6">New Applicants</Typography>
      <Button variant="text">See all</Button>
    </div>
    <SimpleBar style={{ maxHeight: 400 }}>
      <div className="space-y-4">
        {NEW_APPLICANTS.map((applicant) => (
          <div key={applicant.name} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Avatar src={applicant.avatar}>
                {applicant.name.split(" ").map((n) => n[0]).join("")}
              </Avatar>
              <div>
                <Typography variant="body1" className="font-medium">
                  {applicant.name}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Applied for {applicant.role}
                </Typography>
              </div>
            </div>
            <div className="flex gap-1">
              <IconButton><Mail className="h-4 w-4" /></IconButton>
              <IconButton><Phone className="h-4 w-4" /></IconButton>
            </div>
          </div>
        ))}
      </div>
    </SimpleBar>
  </div>
);

const RightSidebar = () => (
  <div className="w-80 border-l bg-white p-6">
    <CalendarWidget />
    <NewApplicants />
  </div>
);

// Main component
const ProfessorProfile = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex h-screen bg-gray-50">
        <ProfessorSidebar/>
        <main className="flex-1 overflow-auto">
          <div className="p-6">
            <WelcomeBanner />
            <HiringNeeds />
            <RecruitmentProgress />
          </div>
        </main>
        <RightSidebar />
      </div>
    </QueryClientProvider>
  );
};

export default ProfessorProfile;
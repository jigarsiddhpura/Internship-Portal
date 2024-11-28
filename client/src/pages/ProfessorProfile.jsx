"use client";

import React from "react";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from 'react-query';
import {
  Calendar as CalendarIcon,
  UserPlus,
  Mail,
  ChevronLeft,
  ChevronRight,
  Phone,
  Check,
  X,
  MoreHorizontal
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
  Chip,
  IconButton,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText
} from "@mui/material";
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import ProfessorSidebar from "../components/ProfessorSideBar";
import Lottie from 'lottie-react';
import profAnimation from '../images/lottie-animation.json';
import { useAuth } from "../contexts/authContext";
import { Person } from "@mui/icons-material";
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isToday } from 'date-fns';

const HIRING_NEEDS = [
  { role: "Content Designers", count: 3, progress: 75, bgColor: '#F3E8FF' },  // Light purple
  { role: "Node.js Developers", count: 9, progress: 25, bgColor: '#E0F2FE' }, // Light blue
  { role: "Senior UI Designer", count: 1, progress: 0, bgColor: '#DCFCE7' },  // Light green
  { role: "Marketing Managers", count: 2, progress: 45, bgColor: '#FFEDD5' }, // Light orange
];

const CANDIDATES = [
  { name: "John Doe", role: "UI Designer", status: "Tech interview", priority: "High", email: "johndoe@gmail.com" },
  { name: "Ella Clinton", role: "Content designer", status: "Task", priority: "Medium", email: "ellaclinton@gmail.com" },
  { name: "Mike Tyler", role: "Node.js Developer", status: "Resume review", priority: "Low", email: "miketyler@gmail.com" },
  { name: "Marie Arch", role: "Node.js Developer", status: "Task", priority: "High", email: "mariearch@gmail.com" },
  { name: "Sandra Huffman", role: "UX Designer", status: "Final interview", priority: "Medium", email: "sandrahuffman@gmail.com" },
];

const NEW_APPLICANTS = [
  { name: "Lewis S. Cunningham", role: "iOS Developer", avatar: "/placeholder.svg" },
  { name: "Danny Nelson", role: "Node.js Developer", avatar: "/placeholder.svg" },
  { name: "Jennifer Patterson", role: "Marketing Manager", avatar: "/placeholder.svg" },
];

const WelcomeBanner = ({ user }) => {
  return (
    // <Card className="mb-6 bg-primary text-white mt-10 p-4 overflow-visible relative">
    <CardContent className="flex items-start justify-between p-12 mt-24 bg-slate-200 mb-5 rounded-md shadow-md">
      <div className="flex flex-col space-y-2">
        <Typography variant="h3" className="text-left">Hello {user?.firstName}!</Typography>
        <Typography variant="body1" className="text-left">
          You have 16 new applications.
          It is a lot of work for today!
          So let's start 👋
        </Typography>
        {/* <Button className="w-fit">Review it!</Button> */}
      </div>
      <div className="h-32 w-32">
        <Lottie
          animationData={profAnimation}
          loop={true}
          autoplay={true}
          style={{
            position: 'relative',
            width: '200%',
            height: '200%',
            right: '12rem',
            bottom: '7rem',
            zIndex: 100
          }}
        />
      </div>
    </CardContent>
    // </Card>
  );
};

const HiringNeeds = () => (
  <div className="mb-6">
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {HIRING_NEEDS.map((item) => (
        <Card
          key={item.role}
          sx={{
            borderRadius: '16px',
            backgroundColor: item.bgColor,
            boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
          }}
        >
          <CardContent className="p-4">
            <div className="flex justify-between items-center mb-4">
              <div className="w-6 h-6 rounded-full flex items-center justify-center">
                <UserPlus className="h-4 w-4" />
              </div>
            </div>
            <Typography variant="h4" className="mb-1 font-bold">
              {item.count.toLocaleString()}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.role}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
);

const RecruitmentProgress = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  
  const handleMenuOpen = (event, candidate) => {
    setAnchorEl(event.currentTarget);
    setSelectedCandidate(candidate);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedCandidate(null);
  };

  const handleCandidateAction = async (action) => {
    try {
      // Send email based on action
      const emailContent = action === 'accept' 
        ? `Dear ${selectedCandidate.name}, We are pleased to inform you that your application has been accepted.`
        : `Dear ${selectedCandidate.name}, Thank you for your interest. Unfortunately, we cannot proceed with your application at this time.`;

      // Here you would implement your email sending logic
      // await sendEmail(selectedCandidate.email, emailContent);

      // Update UI or state as needed
      console.log(`${action} candidate: ${selectedCandidate.name}`);
      
      handleMenuClose();
    } catch (error) {
      console.error('Error processing candidate action:', error);
    }
  };

  const getPriorityStyles = (priority) => {
    const styles = {
      High: {
        bgcolor: '#FEE2E2', // light red
        color: '#DC2626', // darker red
        dot: '#DC2626'
      },
      Medium: {
        bgcolor: '#FEF3C7', // light yellow
        color: '#D97706', // darker yellow
        dot: '#D97706'
      },
      Low: {
        bgcolor: '#DCFCE7', // light green
        color: '#16A34A', // darker green
        dot: '#16A34A'
      }
    };
    return styles[priority];
  };
  return (
    <Card className="mb-6">
      <CardHeader
        title="Recruitment Progress"
        action={<Button variant="text">See all</Button>}
      />
      <CardContent>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>NAME</TableCell>
              <TableCell>PROFESSION</TableCell>
              <TableCell>STATUS</TableCell>
              <TableCell>PRIORITY</TableCell>
              <TableCell>ACTIONS</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {CANDIDATES.map((candidate) => (
              <TableRow key={candidate.name} sx={{ '&:hover': { backgroundColor: '#f8f9fa' } }}>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Avatar
                      sx={{
                        width: 24,
                        height: 24,
                        bgcolor: '#fee2e2' // light red background
                      }}
                    >
                      <Person className="h-4 w-4" />
                    </Avatar>
                    <div className="flex flex-col">
                      <span>{candidate.name}</span>
                      <span className="text-gray-400 text-sm">{candidate.email}</span>
                    </div>
                  </div>
                </TableCell>
                <TableCell>{candidate.role}
                </TableCell>
                <TableCell>
                  <Chip
                    label={candidate.status}
                    variant="outlined"
                    sx={{
                      borderRadius: '16px',
                      '& .MuiChip-label': {
                        padding: '2px 8px',
                      }
                    }}
                  />
                </TableCell>
                <TableCell>
                  <Chip
                    label={candidate.priority}
                    sx={{
                      backgroundColor: getPriorityStyles(candidate.priority).bgcolor,
                      color: getPriorityStyles(candidate.priority).color,
                      borderRadius: '16px',
                      paddingLeft: '8px', // Add padding to accommodate the dot
                      '&::before': {
                        content: '""',
                        display: 'inline-block',
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        backgroundColor: getPriorityStyles(candidate.priority).dot,
                        marginRight: '6px',
                        verticalAlign: 'middle'
                      },
                      '& .MuiChip-label': {
                        padding: '2px 8px 2px 2px', // Adjust padding for label
                      }
                    }}
                  />
                </TableCell>
                <TableCell>
                  <IconButton
                    onClick={(e) => handleMenuOpen(e, candidate)}
                    size="small"
                  >
                    <MoreHorizontal className="h-5 w-5" />
                  </IconButton>
                  <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl) && selectedCandidate?.name === candidate.name}
                    onClose={handleMenuClose}
                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                  >
                    <MenuItem onClick={() => handleCandidateAction('accept')}>
                      <ListItemIcon>
                        <Check className="h-4 w-4 text-green-500" />
                      </ListItemIcon>
                      <ListItemText>Accept Candidate</ListItemText>
                    </MenuItem>
                    <MenuItem onClick={() => handleCandidateAction('reject')}>
                      <ListItemIcon>
                        <X className="h-4 w-4 text-red-500" />
                      </ListItemIcon>
                      <ListItemText>Reject Candidate</ListItemText>
                    </MenuItem>
                  </Menu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

const CalendarWidget = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  
  // Sample availability data - replace with your actual data
  const availabilityData = {
    '2024-03-05': 'busy',
    '2024-03-13': 'available',
    '2024-03-26': 'tentative',
  };

  const getDaysInMonth = (date) => {
    const start = startOfMonth(date);
    const end = endOfMonth(date);
    return eachDayOfInterval({ start, end });
  };

  const days = getDaysInMonth(currentDate);
  const weekDays = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

  const handlePreviousMonth = () => {
    setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() - 1)));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + 1)));
  };

  const getStatusColor = (date) => {
    const dateString = format(date, 'yyyy-MM-dd');
    switch (availabilityData[dateString]) {
      case 'busy': return 'bg-red-100';
      case 'available': return 'bg-blue-100';
      case 'tentative': return 'bg-yellow-100';
      default: return '';
    }
  };

  return (
    <div className="mb-6 p-4 bg-white rounded-lg shadow">
      <div className="mb-4 flex items-center justify-between">
        <Typography variant="h6">
          {format(currentDate, 'MMMM yyyy')}
        </Typography>
        <div className="flex gap-2">
          <IconButton onClick={handlePreviousMonth}>
            <ChevronLeft className="h-4 w-4" />
          </IconButton>
          <IconButton onClick={handleNextMonth}>
            <ChevronRight className="h-4 w-4" />
          </IconButton>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-1">
        {weekDays.map((day) => (
          <div key={day} className="text-xs text-gray-500 text-center py-2">
            {day}
          </div>
        ))}
        
        {days.map((day) => (
          <div
            key={day.toString()}
            className={`
              p-2 text-center text-sm relative
              ${!isSameMonth(day, currentDate) ? 'text-gray-300' : ''}
              ${isToday(day) ? 'font-bold' : ''}
              ${getStatusColor(day)}
            `}
          >
            {format(day, 'd')}
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="mt-4 flex gap-4 text-xs text-gray-600">
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 rounded-full bg-blue-100"></div>
          <span>Available</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 rounded-full bg-red-100"></div>
          <span>Busy</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 rounded-full bg-yellow-100"></div>
          <span>Tentative</span>
        </div>
      </div>
    </div>
  );
};

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
              {/* <Avatar src={applicant.avatar}>
                {applicant.name.split(" ").map((n) => n[0]).join("")}
              </Avatar> */}
              <Person className="h-4 w-4" />
              <div>
                <Typography variant="body1" className="font-medium">
                  {applicant.name}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Applied for {applicant.role}
                </Typography>
              </div>
            </div>
            <div className="flex gap-1.5">
              <IconButton sx={{ 
                backgroundColor: '#8B5CF6',
                '&:hover': { backgroundColor: '#7C3AED' }
              }}>
                <Mail className="h-3 w-3 text-white" />
              </IconButton>
              <IconButton sx={{ 
                backgroundColor: '#0EA5E9',
                '&:hover': { backgroundColor: '#0284C7' }
              }}>
                <Phone className="h-3 w-3 text-white" />
              </IconButton>
            </div>
          </div>
        ))}
      </div>
    </SimpleBar>
  </div>
);

const RightSidebar = () => (
  <div className="w-96 border-l bg-white p-8 flex-shrink-0">
    <CalendarWidget />
    <NewApplicants />
  </div>
);

// Main component
const ProfessorProfile = () => {
  const queryClient = new QueryClient();
  const { currentUser } = useAuth();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex h-screen bg-gray-50">
        <ProfessorSidebar />
        <main className="flex-1 overflow-auto">
          <div className="p-6">
            <WelcomeBanner user={currentUser} />
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
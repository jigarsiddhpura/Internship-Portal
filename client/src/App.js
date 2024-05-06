
import logo from './logo.svg';
import React from 'react';
import './App.css';
import Login from './components/Login';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from './components/Signup';
import Courses from './components/Courses';
import LandingPage from './components/LandingPage';
import PostInternship from './components/PostInternship';
import NavBar from './utility/NavBar';
import UserProfile from './components/UserProfile';

import ProfessorProfile from './components/ProfessorProfile';
import Footer from './utility/Footer';
import EditResearch from './components/EditResearch';
import Header from './utility/Header';
import ApplyResearch from './components/ApplyResearch';
import ApplyInternship from './components/ApplyInternship';
import PostRp from './components/PostRp'
import EditInternship from './components/EditInternship';
import UpdateInternship from './components/UpdateInternship';
import UpdateResearch from './components/UpdateResearch';

// import {AppProvider} from './AppContext'
import { AuthProvider } from './contexts/authContext';


function App() {
  return (
    <AuthProvider>
    <div className="App">
    <Router>
        <Routes>
          <Route path="/" element={<LandingPage/>}>
          </Route>
          <Route path="/Signup" element={<Signup/>}>
          </Route>
          <Route path="/Login" element={<Login/>}>
          </Route>
          <Route path="/Courses" element={<> <NavBar /><Header/> <Courses/> <Footer/> </>}>
          </Route>
          <Route path="/postrp" element={ <> <NavBar /> <PostRp/>  </>}>
          </Route>
          <Route path="/editresearch" element={ <> <NavBar /> <Header/> <EditResearch/>  <Footer/> </>}>
          </Route>
          <Route path="/applyresearch" element={ <><NavBar /> <Header/> <ApplyResearch/>  <Footer/> </>}>
          </Route>
          <Route path="/PostInternship" element={ <> <NavBar /> <PostInternship/>  </>}>
          </Route>
          <Route path="/updateresearch/:id" element={ <> <NavBar /> <UpdateResearch/>  </>}>
          </Route>
          <Route path="/applyinternship" element={ <><NavBar /> <Header/> <ApplyInternship/>  <Footer/> </>}>
          </Route>
          <Route path="/editinternship" element={ <><NavBar /> <Header/> <EditInternship/>  <Footer/> </>}>
          </Route>
          <Route path="/updateinternship/:id" element={ <><NavBar />  <UpdateInternship/>  </>}>
          </Route>
          <Route path="/header" element={<Header/>}>
          </Route>
          <Route path="/nav" element={<NavBar/>}>
          </Route>
          <Route path="/UserProfile" element={<UserProfile/>}>
          </Route>
  
          <Route path="/ProfessorProfile" element={ <ProfessorProfile/>}>
          </Route>
          

        </Routes>
      
    </Router>
    </div>
    </AuthProvider>
  );
}

export default App;
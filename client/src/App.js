
import logo from './logo.svg';
import React from 'react';
import './App.css';
import Login from './pages/Login';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from './pages/Signup';
import Courses from './pages/Courses';
import LandingPage from './pages/LandingPage';
import PostInternship from './pages/PostInternship';
import NavBar from './utility/NavBar';
import UserProfile from './pages/UserProfile';

import ProfessorProfile from './pages/ProfessorProfile';
import Footer from './utility/Footer';
import EditResearch from './pages/EditResearch';
import Header from './utility/Header';
import ApplyResearch from './pages/ApplyResearch';
import ApplyInternship from './pages/ApplyInternship';
import PostRp from './pages/PostRp'
import EditInternship from './pages/EditInternship';
import UpdateInternship from './pages/UpdateInternship';
import UpdateResearch from './pages/UpdateResearch';


function App() {
  return (

    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />}>
          </Route>
          <Route path="/Signup" element={<Signup />}>
          </Route>
          <Route path="/Login" element={<Login />}>
          </Route>
          <Route path="/Courses" element={<> <NavBar /><Header /> <Courses /> <Footer /> </>}>
          </Route>
          <Route path="/postrp" element={<> <NavBar /> <PostRp />  </>}>
          </Route>
          <Route path="/editresearch" element={<> <NavBar /> <Header /> <EditResearch />  <Footer /> </>}>
          </Route>
          <Route path="/applyresearch" element={<><NavBar /> <Header /> <ApplyResearch />  <Footer /> </>}>
          </Route>
          <Route path="/PostInternship" element={<> <NavBar /> <PostInternship />  </>}>
          </Route>
          <Route path="/updateresearch/:id" element={<> <NavBar /> <UpdateResearch />  </>}>
          </Route>
          <Route path="/applyinternship" element={<><NavBar /> <Header /> <ApplyInternship />  <Footer /> </>}>
          </Route>
          <Route path="/editinternship" element={<><NavBar /> <Header /> <EditInternship />  <Footer /> </>}>
          </Route>
          <Route path="/updateinternship/:id" element={<><NavBar />  <UpdateInternship />  </>}>
          </Route>
          <Route path="/header" element={<Header />}>
          </Route>
          <Route path="/nav" element={<NavBar />}>
          </Route>
          <Route path="/UserProfile" element={<> <NavBar /> <UserProfile /> </>}>
          </Route>

          <Route path="/ProfessorProfile" element={<ProfessorProfile />}>
          </Route>


        </Routes>

      </Router>
    </div>

  );
}

export default App;
import React from 'react'
import "../css/LandingNavBar.css"
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from "../contexts/authContext";

const LandingNavBar = () => {

  const { userLoggedIn, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut();
    navigate("/Login");
  }

  return (
    <div className='navbar'>
      <nav className="rectangle-parent">
        <div className="group-child" />
        
        <div><Link to="/Courses" className='courses'>Courses</Link></div>
        <div><Link to="/applyresearch" className='research'>Research</Link></div>

        <div>
          {
            userLoggedIn ?
              <>
                <button className="rectangle-group" onClick={handleSignOut}>
                  <div className="group-item" />
                  <div className="registration">Sign-out</div>
                </button>
              </>

              :
              <>
                <div className="log-in"><Link to="/Login" className="log-in1">Log in</Link></div>
                <button className="rectangle-group">
                  <div className="group-item" />
                  <div className="registration"><Link to="/Signup" className="registration1">Registration</Link></div>
                </button>
              </>
          }
        </div>



        <div className="logo">Internship Portal</div>
      </nav>

    </div>
  )
}

export default LandingNavBar
import React from 'react'
import "../css/landingNavBar.css"
import { Link } from 'react-router-dom'

const landingNavBar = () => {
  return (
    <div className='navbar'>  
    <nav className="rectangle-parent">
    <div className="group-child" />
    <div className="home">{`Home `}</div>
    <div><Link to="/Courses"className='courses'>Courses</Link></div>
    <div><Link to="/applyresearch" className='research'>Research</Link></div>
    <div className="log-in"><Link to="/Login" className="log-in1">Log in</Link></div>
    <button className="rectangle-group">
      <div className="group-item" />
      <div className="registration"><Link to="/Signup" className="registration1">Registration</Link></div>
    </button>
    <div className="logo">Internship Portal</div>
  </nav>
   
  </div>
  )
}

export default landingNavBar
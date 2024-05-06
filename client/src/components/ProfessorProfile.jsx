import React from 'react'
import NavBar from '../utility/NavBar';
import '../css/ProfessorProfile.css'
import searchicon from '../images/search-icon.svg'
import Textarea from '../utility/Textarea'

const ProfessorProfile = () => {
  return (
    <div style={{background:"#E8FCFE", height:"100vh", width:"100%"}}>
<NavBar />
        <div className='total-applicants'>Total Applicants: 19</div>
        <div className='search-professor-rectangle'>
        <img src={searchicon} className='search-icon-professor'></img>
        <input placeholder='Search' className='input-search-professor'></input>
        </div>
        <button className='post-button-professor'>
            Post an Internship
          </button>
          <div className='table'>
            <ul>
                <li className='full-name'>Full name</li>
                <li className='hiring-stage'>Hiring Stage</li>
                <li className='applied-date'>Applied Date</li>
                <li className='action'>Action</li>
            </ul>
            <div className='line-1-table'></div>
            <ul className='row'>
                <li className='student-name'>Kashish Gandhi</li>
                <li className='stage' style={{border:'1px solid #EBC351',color:'#EBC351'}}>Interviewed</li>
                <li className='student-applied-date'>13/05/2023</li>
                <li className='see-resume'>See Resume</li>
            </ul>
            <ul className='row'style={{background: '#F6F6F6'}}>
                <li className='student-name'>Kashish Gandhi</li>
                <li className='stage' style={{border:'1px solid  #6255A5',color:' #6255A5'}}>Shortlisted</li>
                <li className='student-applied-date'>13/05/2023</li>
                <li className='see-resume'>See Resume</li>
                
            </ul>
            <ul className='row'>
                <li className='student-name'>Kashish Gandhi</li>
                <li className='stage' style={{border:'1px solid #00BF44',color:'#00BF44'}}>Hired</li>
                <li className='student-applied-date'>13/05/2023</li>
                <li className='see-resume'>See Resume</li>
            </ul>
            <ul className='row'style={{background: '#F6F6F6'}}>
                <li className='student-name'>Kashish Gandhi</li>
                <li className='stage' style={{border:'1px solid  #C31616',color:' #C31616'}}>Declined</li>
                <li className='student-applied-date'>13/05/2023</li>
                <li className='see-resume'>See Resume</li>
            </ul>
            <ul className='row'>
                <li className='student-name'>Kashish Gandhi</li>
                <li className='stage' style={{border:'1px solid #EBC351',color:'#EBC351'}}>Interviewed</li>
                <li className='student-applied-date'>13/05/2023</li>
                <li className='see-resume'>See Resume</li>
            </ul>
            <ul className='row'style={{background: '#F6F6F6'}}>
                <li className='student-name'>Kashish Gandhi</li>
                <li className='stage' style={{border:'1px solid #EBC351',color:'#EBC351'}}>Interviewed</li>
                <li className='student-applied-date'>13/05/2023</li>
                <li className='see-resume'>See Resume</li>
            </ul>
            <ul className='row'>
                <li className='student-name'>Kashish Gandhi</li>
                <li className='stage' style={{border:'1px solid #EBC351',color:'#EBC351'}}>Interviewed</li>
                <li className='student-applied-date'>13/05/2023</li>
                <li className='see-resume'>See Resume</li>
            </ul>
           
          </div>

          <div className='professor-info'>
          <img src="../images/Kashishpic.jpg" className="professor-profile-pic"></img>
          <div className='professor-name'>Kashish Gandhi</div>
          <div className="basic-info-professor">Basic Information</div>
          <div className='professor-age'>AGE</div>
          <div className='professor-age-data'>25</div>
          <div className='professor-qualification'>QUALIFICATION</div>
          <div className='professor-qualification-data'>P.H.D</div>
          <div className='professor-position'>POSITION</div>
          <div className='professor-position-data'>PROFESSOR</div>
          <div className='professor-biodata'>BIODATA</div>
          <div className='professor-biodata-data'>Lorem ipsum loreum ipsum Lorem ipsum loreum ipsum</div>
          <div className="add-notes-professor">Add Notes</div>
            <Textarea placeholder="Add notes for future reference" style={{marginLeft:'0rem', marginTop:'0.5rem', width:'28.5rem',height:'4.27rem'}} />
            <button className='search-button-notes-professor'>
            Add Notes
          </button>
          </div>
    </div>
  )
}

export default ProfessorProfile
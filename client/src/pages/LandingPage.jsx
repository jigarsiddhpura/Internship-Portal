import "../css/LandingPage.css";
import React from "react";
import frame from "../images/frame.svg"
import frame1 from "../images/frame1.svg"
import frame2 from "../images/frame2.svg"
import frame3 from "../images/frame3.svg"
import frame4 from "../images/frame4.svg"
import frame5 from "../images/frame5.svg"
import frame6 from "../images/frame6.svg"
import frame7 from "../images/frame7.svg"
import frame8 from "../images/frame8.svg"
import frame9 from "../images/frame9.svg"
import frame10 from "../images/frame10.svg"
import frame11 from "../images/frame11.svg"
import ellipse2 from "../images/ellipse-2.svg"
import image1 from "../images/image-2@2x.png"
import image2 from "../images/image-3@2x.png"
import ellipse3 from "../images/ellipse-3.svg"
import ellipse4 from "../images/ellipse-4.svg"
import ellipse5 from "../images/ellipse-5.svg"
import ellipse6 from "../images/ellipse-6.svg"
import jobseekerImg from "../images/job-seeker@2x.png"
import personalgrowthImg from "../images/personal-growth@2x.png"
import star1 from "../images/star-1.svg"
import star2 from "../images/star-2.svg"
import ellipse18 from "../images/ellipse-18@2x.png"
import ellipse19 from "../images/ellipse-19@2x.png"
import ellipse20 from "../images/ellipse-20@2x.png"
import ellipse21 from "../images/ellipse-21@2x.png"
import ellipse22 from "../images/ellipse-22@2x.png"
import ellipse23 from "../images/ellipse-23@2x.png"
import ellipse11 from "../images/ellipse-11.svg"
import ellipse12 from "../images/ellipse-12.svg"
import ellipse14 from "../images/ellipse-14.svg"
import NavBar from "../utility/NavBar";
import { Link } from "react-router-dom";
import { useAuthenticatedNavigation } from "../hooks/useAuthenticatedNavigation";


const LandingPage = () => {

  const navigateIfAuthenticated = useAuthenticatedNavigation();

  const gotoJob = () => {
    navigateIfAuthenticated("/applyinternship");
  } 

  return (
    <div className="landing-page">
    <NavBar />
      <div className="landing-page-inner">
        <div className="frame-child" />
      </div>
      <div className="landing-page-child">
        <div className="frame-child" />
      </div>
      <div className="frame-div">
        <div className="frame-child" />
      </div>
      <div className="landing-page-item" />
      <div className="rectangle-container">
        <div className="group-inner" />
        <div className="rectangle-div" />
        <img className="ellipse-icon" alt="pictureMissing" src={ellipse2} />
        <img className="image-2-icon" alt="pictureMissing" src={image1}/>
        <div className="group-child1" />
        <div className="biggest-internship-opportunity-container">
          <p className="biggest-internship">
            <span className="biggest">{`Biggest `}</span>
            <span>Internship</span>
          </p>
          <p className="opportunity-platform">Opportunity Platform</p>
        </div>
        <img className="image-3-icon" alt="pictureMissing" src={image2} />
        <div className="group-child2" />
        <div className="group-child3" />
        <div className="industry-level-internships">
          Industry Level Internships
        </div>
        <img className="group-child4" alt="pictureMissing" src={ellipse3} />
        <img className="group-child5" alt="pictureMissing" src={ellipse4} />
        <img className="group-child6" alt="pictureMissing" src={ellipse5} />
        <div className="group-child7" />
        <div className="group-child8" />
        <div className="group-child9" />
        <div className="group-child10" />
        <div className="group-child11" />
        <div className="group-child12" />
        <img className="job-seeker-icon" alt="pictureMissing" src={jobseekerImg} />
        <img
          className="personal-growth-icon"
          alt="pictureMissing"
          src={personalgrowthImg}
        />
      </div>
      <div className="launch-learn-grow">Launch, Learn, Grow</div>
      <div className="start-today">Start Today</div>
      <div className="landing-page-child1" />
      <img className="star-icon" alt="pictureMissing" src={star1} />
      <div className="unleash-your-potential">
        Unleash your potential with us
      </div>
      <button className="group-button">
        <div className="group-child13" />
        <div className="get-started"><Link to="/Signup" className="registration2">Get Started</Link></div>
      </button>
      <button className="rectangle-parent1">
        <div className="group-child14" />
        <div className="browse-jobs" onClick={gotoJob}>Browse Jobs</div>
        <img className="frame-icon" alt="pictureMissing" src={frame} />
      </button>
      <div className="landing-page-child2" />
      <img className="landing-page-child3" alt="pictureMissing" src={star2} />
      <div className="most-of-the-container">
        <p className="biggest-internship">{`Most of the students have given a five `}</p>
        <p className="biggest-internship">star review for us.</p>
      </div>
      <img className="landing-page-child4" alt="pictureMissing" src={ellipse6} />
      <div className="landing-page-child5" />
      <div className="landing-page-child6" />
      <img className="frame-icon1" alt="pictureMissing" src={frame1} />
      <input className="role-name" type="text" placeholder="Role Name" />
      <input className="company-name" type="text" placeholder="Company Name" />
      <div className="popular-internships">Popular Internships</div>
      <div className="line-div" />
      <img className="frame-icon2" alt="pictureMissing" src={frame2} />
      <button className="rectangle-parent2">
        <div className="group-child15" />
        <img className="frame-icon3" alt="pictureMissing" src={frame3} />
        <div className="search">Search</div>
      </button>
      <img className="frame-icon4" alt="pictureMissing" src={frame4} />
      <img className="frame-icon5" alt="pictureMissing" src={frame5} />
      <div className="empowering-job-seekers">
        Empowering job seekers with advanced technology
      </div>
      <div className="interesting-features">
        <p className="biggest-internship">{`Interesting `}</p>
        <p className="biggest-internship">Features</p>
      </div>
      <div className="landing-page-child7" />
      <div className="landing-page-child8" />
      <div className="div">01</div>
      <div className="div1">02</div>
      <div className="div2">03</div>
      <div className="div3">04</div>
      <div className="resume-analysis">Resume Analysis</div>
      <div className="sentiment-analysis">Sentiment Analysis</div>
      <div className="job-recommendations">Job Recommendations</div>
      <div className="video-conferencing">Video Conferencing</div>
      <div className="optimize-your-resume">
        Optimize your resume for better job matches.
      </div>
      <div className="discover-your-personality">
        Discover your personality through sentiment analysis.
      </div>
      <div className="find-your-dream">
        Find your dream job with personalized recommendations.
      </div>
      <div className="conduct-interviews-via">
        Conduct interviews via video conferencing seamlessly.
      </div>
      <div className="find-the-best">
        Find the best internships for your needs
      </div>
      <div className="marketing">Marketing</div>
      <div className="development">Development</div>
      <div className="business">Business</div>
      <div className="technology">technology</div>
      <div className="all-category">All Category</div>
      <div className="ux-design">UX Design</div>
      <div className="landing-page-child9" />
      <div className="front-end-developer-with">
        Front-end developer with React js
      </div>
      <b className="reddit">Reddit</b>
      <div className="month">₹3000/month</div>
      <div className="landing-page-child10" />
      <img className="frame-icon6" alt="pictureMissing" src={frame6} />
      <div className="hrsweek">30 hrs/week</div>
      <button className="rectangle-parent3">
        <div className="group-child16" />
        <div className="apply-now">Apply Now</div>
      </button>
      <button className="rectangle-parent4">
        <div className="group-child17" />
        <div className="load-more-internships">Load More Internships</div>
      </button>
      <img className="landing-page-child11" alt="pictureMissing" src={ellipse18} />
      <div className="landing-page-child12" />
      <div className="full-time">Full-Time</div>
      <div className="landing-page-child13" />
      <div className="software-development-engineer">
        Software Development Engineer
      </div>
      <b className="jp-morgan">J.P Morgan</b>
      <div className="month1">₹3000/month</div>
      <div className="landing-page-child14" />
      <img className="frame-icon7" alt="pictureMissing" src={frame6} />
      <div className="hrsweek1">45 hrs/week</div>
      <button className="rectangle-parent5">
        <div className="group-child16" />
        <div className="apply-now">Apply Now</div>
      </button>
      <img className="landing-page-child15" alt="pictureMissing" src={ellipse19}/>
      <div className="landing-page-child16" />
      <div className="full-time1">Full-Time</div>
      <div className="landing-page-child17" />
      <div className="backend-developer-with">
        Backend Developer with Node js
      </div>
      <b className="google">Google</b>
      <div className="month2">₹3000/month</div>
      <div className="landing-page-child18" />
      <img className="frame-icon8" alt="pictureMissing" src={frame6} />
      <div className="hrsweek2">35 hrs/week</div>
      <button className="rectangle-parent6">
        <div className="group-child16" />
        <div className="apply-now">Apply Now</div>
      </button>
      <img className="landing-page-child19" alt="pictureMissing" src={ellipse20} />
      <div className="landing-page-child20" />
      <div className="full-time2">Full-Time</div>
      <div className="landing-page-child21" />
      <div className="associate-for-social">
        Associate for social media marketing
      </div>
      <b className="boat">BoAt</b>
      <div className="month3">₹3000/month</div>
      <div className="landing-page-child22" />
      <img className="frame-icon9" alt="pictureMissing" src={frame6} />
      <div className="hrsweek3">32 hrs/week</div>
      <button className="rectangle-parent7">
        <div className="group-child16" />
        <div className="apply-now">Apply Now</div>
      </button>
      <img className="landing-page-child23" alt="pictureMissing" src={ellipse21} />
      <div className="landing-page-child24" />
      <div className="full-time3">Full-Time</div>
      <div className="landing-page-child25" />
      <div className="machine-learning-developer">
        Machine learning developer
      </div>
      <b className="lenskart">Lenskart</b>
      <div className="month4">₹3000/month</div>
      <div className="landing-page-child26" />
      <img className="frame-icon10" alt="pictureMissing" src={frame6} />
      <div className="hrsweek4">48 hrs/week</div>
      <button className="rectangle-parent8">
        <div className="group-child16" />
        <div className="apply-now">Apply Now</div>
      </button>
      <img className="landing-page-child27" alt="pictureMissing" src={ellipse22} />
      <div className="landing-page-child28" />
      <div className="full-time4">Full-Time</div>
      <div className="landing-page-child29" />
      <div className="customer-service-officer">Customer service officer</div>
      <b className="sugar-cosmetics">Sugar Cosmetics</b>
      <div className="month5">₹3000/month</div>
      <div className="landing-page-child30" />
      <img className="frame-icon11" alt="pictureMissing" src={frame6} />
      <div className="hrsweek5">25 hrs/week</div>
      <button className="rectangle-parent9">
        <div className="group-child16" />
        <div className="apply-now">Apply Now</div>
      </button>
      <img className="landing-page-child31" alt="pictureMissing" src={ellipse23} />
      <div className="landing-page-child32" />
      <div className="full-time5">Full-Time</div>
      <div className="landing-page-child33" />
      <img className="landing-page-child34" alt="pictureMissing" src={ellipse11}/>
      <img className="landing-page-child35" alt="pictureMissing" src={ellipse11}/>
      <img className="landing-page-child36" alt="pictureMissing" src={ellipse12} />
      <div className="subscribe-for-get-container">
        <p className="biggest-internship">Subscribe for get update</p>
        <p className="biggest-internship">for every internships</p>
      </div>
      <div className="never-miss-an">
        Never miss an internship opportunity with our updates
      </div>
      <div className="landing-page-child37" />
      <button className="rectangle-parent10">
        <div className="group-child23" />
        <div className="subscribe">Subscribe</div>
      </button>
      <input
        className="enter-email-address"
        type="text"
        placeholder="Enter email address"
      />
      <div className="connecting-talented-individual">
        Connecting talented individuals with their dream careers
      </div>
      <button className="landing-page-inner1">
        <img className="group-child24" alt="pictureMissing" src={ellipse14} />
      </button>
      <button className="landing-page-inner2">
        <img className="group-child24" alt="pictureMissing" src={ellipse14} />
      </button>
      <button className="ellipse-parent">
        <img className="group-child24" alt="pictureMissing" src={ellipse14}  />
        <img className="frame-icon12" alt="pictureMissing" src={frame7} />
      </button>
      <img className="frame-icon13" alt="pictureMissing" src={frame8} />
      <img className="frame-icon14" alt="pictureMissing" src={frame9} />
      <button className="ellipse-group">
        <img className="group-child24" alt="pictureMissing" src={ellipse14} />
        <img className="frame-icon12" alt="pictureMissing" src={frame10} />
      </button>
      <div className="landing-page-child38" />
      <img className="frame-icon16" alt="pictureMissing" src={frame11} />
      <div className="internship-portal">
        2023 Internship Portal | All rights reserved
      </div>
      <div className="courses1">Courses</div>
      <div className="quick-links">Quick links</div>
      <div className="classroom-courses">Classroom courses</div>
      <div className="learners">Learners</div>
      <div className="home1">Home</div>
      <div className="online-courses">Online courses</div>
      <div className="developers">Developers</div>
      <div className="internships">Internships</div>
      <div className="e-learning-course">E-learning course</div>
      <div className="professors">Professors</div>
      <div className="all-courses">All Courses</div>
      <div className="video-courses">Video courses</div>
      <div className="college-students">College students</div>
      <div className="interview-prep">Interview prep</div>
      <div className="transactions">Transactions</div>
      <div className="programs">Programs</div>
      <div className="community">Community</div>
      <div className="internship-portal2">Internship Portal</div>
    </div>
  );
};

export default LandingPage;

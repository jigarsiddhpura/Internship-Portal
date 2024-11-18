import { useEffect } from "react";
import "../css/Toggle.css";
import { Link ,useLocation } from 'react-router-dom'
const Toggle = ({ onClose }) => {
  
  const location = useLocation();
  const currentPage = location.pathname;
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  return (
    <div className="toggle" data-animate-on-scroll>
      {currentPage === '/Courses' || currentPage === '/applyresearch' || currentPage === '/UserProfile' ? (
        <div className="user1"><Link to='/UserProfile' style={{textDecoration:'none',color:'#ffffff'}}>gojo</Link></div>
        
      ) : (
        <div className="user1"><Link to='/ProfessorProfile' style={{textDecoration:'none',color:'#ffffff'}}>gojo</Link></div>
      )}
   {currentPage === '/Courses' || currentPage === '/applyresearch' || currentPage === '/UserProfile' ? (
        <Link to='/UserProfile'> <img className="pp1" alt="" src="/gojo-2@2x.png" /></Link>
        
      ) : (
        <Link to='/ProfessorProfile'> <img className="pp1" alt="" src="/gojo-2@2x.png" /></Link>
      )}
      <div className="home2">{`Home `}</div>

      {currentPage === '/Courses' || currentPage === '/applyresearch' || currentPage === '/UserProfile' ? (
        <div className="courses2">
          <Link to="/Courses" style={{ textDecoration: 'none', color: '#ffffff' }}>
            Courses
          </Link>
        </div>
        
      ) : (
        <div className="courses2">
          <Link to="/PostInternship" style={{ textDecoration: 'none', color: '#ffffff' }}>
            Post Internship/Research Paper
          </Link>
        </div>
      )}

{currentPage === '/Courses' || currentPage === '/applyresearch' || currentPage === '/UserProfile' ?(
        <div className="research2">
          <Link to="/applyresearch" style={{ textDecoration: 'none', color: '#ffffff' }}>
            Research
          </Link>
        </div>
        
      ) : (
       null
      ) }



      {/* <div className="user1">gojo</div>
      <img className="pp1" alt="" src="/gojo-2@2x.png" />
      <div className="home2">{`Home `}</div>
      <div className="courses2">Courses</div>
      <div className="research2">Research</div> */}
    </div>
  );
};

export default Toggle;

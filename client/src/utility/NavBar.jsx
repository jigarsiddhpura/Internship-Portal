import { useState, useCallback } from "react";
import Toggle from "../pages/Toggle";
import PortalDrawer from "../pages/PortalDrawer";
import "../css/NavBar.css";
import gojo from "../images/gojo.png"
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from "../contexts/authContext";
import { doSignOut } from "../firebase/auth";

const NavBar = () => {

  const { currentUser, userLoggedIn } = useAuth();
  const navigate = useNavigate();

  const location = useLocation();
  const currentPage = location.pathname;

  const [isToggleOpen, setToggleOpen] = useState(false);

  const openToggle = useCallback(() => {
    setToggleOpen(true);
  }, []);

  const closeToggle = useCallback(() => {
    setToggleOpen(false);
  }, []);

  return (
    <>
      <nav className="internship-portal-parent" navbar>

        <Link to='/' style={{ textDecoration: 'none', color: '#212121' }}>
          <div className="internship-portal3">Internship Portal</div>
        </Link>
        <div className="group-parent" >
          <button className="vector-wrapper" onClick={openToggle} >
            <img className="vector-icon" alt="" src="/vector.svg" />
          </button>
          <section className="home-parent">

            <div className="home3">
              <Link to="/applyinternship" style={{ textDecoration: 'none', color: '#212121' }}>
                Internship
              </Link>
            </div>
            {/* <div className="home3">
              <Link to="/Courses" style={{ textDecoration: 'none', color: '#212121' }}>
                Courses
              </Link>
            </div> */}

            <div className="home3">
              <Link to="/applyresearch" style={{ textDecoration: 'none', color: '#212121' }}>
                Research
              </Link>
            </div>


          </section>

          <section className="icon-chevron-down-parent">

            {currentPage === '/Courses' || currentPage === '/applyresearch' || currentPage === '/UserProfile' ? (
              <div className="home3"><Link to='/UserProfile' style={{ textDecoration: 'none', color: '#212121' }}>{currentUser?.firstName}</Link></div>

            ) : (
              <div className="home3"><Link to='/ProfessorProfile' style={{ textDecoration: 'none', color: '#212121' }}>{currentUser?.firstName}</Link></div>
            )}
            {currentPage === '/Courses' || currentPage === '/applyresearch' || currentPage === '/UserProfile' ? (
              <Link to='/UserProfile'> <img className="pp" alt="pp" src={gojo} /></Link>

            ) : (
              <Link to='/ProfessorProfile'> <img className="pp" alt="" src={gojo} /></Link>
            )}


          </section>
        </div>
      </nav>
      {isToggleOpen && (
        <PortalDrawer placement="Right" onOutsideClick={closeToggle}>
          <Toggle onClose={closeToggle} />
        </PortalDrawer>
      )}
    </>
  );
};

export default NavBar;

import { useState, useCallback, useRef, useEffect } from "react";
import Toggle from "../pages/Toggle";
import PortalDrawer from "../pages/PortalDrawer";
import "../css/NavBar.css";
import gojo from "../images/gojo.png";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from "../contexts/authContext";
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import ReactDOM from 'react-dom'; // Import ReactDOM

const NavBar = () => {
  const { currentUser, userLoggedIn, signOut } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const currentPage = location.pathname;

  const [isToggleOpen, setToggleOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const avatarRef = useRef(null);
  const dropdownRef = useRef(null);

  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });

  const openToggle = useCallback(() => {
    setToggleOpen(true);
  }, []);

  const closeToggle = useCallback(() => {
    setToggleOpen(false);
  }, []);

  const handleSignOut = () => {
    signOut();
    navigate("/Login");
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Update dropdown position when it opens
  useEffect(() => {
    if (isDropdownOpen && avatarRef.current) {
      const rect = avatarRef.current.getBoundingClientRect();
      setDropdownPosition({
        top: rect.bottom + window.scrollY,
        left: rect.left + window.scrollX,
      });
    }
  }, [isDropdownOpen]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        avatarRef.current &&
        !avatarRef.current.contains(event.target) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav className="internship-portal-parent" navbar>
        <Link to="/" style={{ textDecoration: 'none', color: '#212121' }}>
          <div className="internship-portal3">Internship Portal</div>
        </Link>
        <div className="group-parent">
          <button className="vector-wrapper" onClick={openToggle}>
            <img className="vector-icon" alt="" src="/vector.svg" />
          </button>

          <section className="home-parent">
            <div className="home3">
              <Link to="/applyinternship" style={{ textDecoration: 'none', color: '#212121' }}>
                Internship
              </Link>
            </div>
            <div className="home3">
              <Link to="/applyresearch" style={{ textDecoration: 'none', color: '#212121' }}>
                Research
              </Link>
            </div>
          </section>

          
          {!currentUser ? (
            <Link
              to="/login"
              className="text-lg py-2 px-6 font-normal bg-green-500 text-white rounded-md hover:bg-green-600 hover:text-white"
              style={{ textDecoration: 'none' }}
            >
              Login
            </Link>
          ) : (
            <>
            <div className="icon-chevron-down-parent relative">
            <button
              ref={avatarRef}
              className="flex items-center space-x-2 cursor-pointer"
              onClick={toggleDropdown}
            >
              <img className="pp" alt="pp" src={gojo} />
              <ChevronDownIcon
                className={`h-5 w-5 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
              />
            </button>
            {isDropdownOpen &&
              ReactDOM.createPortal(
                <div
                  ref={dropdownRef}
                  className="absolute mt-2 w-48 shadow-lg rounded-md bg-white"
                  style={{
                    zIndex: 1000,
                    position: 'absolute',
                    top: dropdownPosition.top,
                    left: dropdownPosition.left,
                  }}
                >
                  <Link
                    to={currentUser?.role === 'STUDENT' ? '/UserProfile' : '/Professorprofile'}
                    className="block px-4 py-2 hover:bg-gray-100 rounded-t-md no-underline"
                    style={{ textDecoration: 'none'}}
                  >
                    Profile
                  </Link>
                  <button
                    onClick={handleSignOut}
                    className="block w-full text-left px-4 py-2 hover:bg-red-700 rounded-b-md bg-red-500 text-white"
                  >
                    Logout
                  </button>
                </div>,
                document.body
              )}
          </div>
            </>
          )}
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

import "../css/Header.css";
import { useLocation} from 'react-router-dom'


const Header = () => {

  const location = useLocation();
  const currentPage = location.pathname;
  return (
    <div className="header_main">
      <div className="header_title">
        <b className="header_title_container">
          <span className="header_title_container1">
          {currentPage === '/Courses' ? (
         <span>{`Find your `}</span>
      ) : currentPage === '/applyresearch' ? (
        <span>{`Write your `}</span>
      ) : currentPage === '/applyinternship' ? (
        <span>{`Find your `}</span>
      ) : null}
{currentPage === '/Courses' ? (
         <span className="dream_course_container">dream course</span>
      ) : currentPage === '/applyresearch' ? (
        <span className="dream_course_container">research paper</span>
      ) : currentPage === '/applyinternship' ? (
        <span className="dream_course_container">dream internship</span>
      ) : null}

</span>

</b>
      
        <img className="header_underline_course" alt="" src="/image-7@2x.png" />
      </div>
      {currentPage === '/Courses' ? (
         <div className="header_enhance_skills_container">
         Enhance your skills by learning courses from the faculty in top
         universities
       </div>
      ) : currentPage === '/applyresearch' ? (
        <div className="header_enhance_skills_container">
        Write your research paper under the best professors and get their LORs
      </div>
      ) : currentPage === '/applyinternship' ? (
        <div className="header_enhance_skills_container">
        Find your next career at companies like Jio, KPMG, and Intel
      </div>
      ) : null}
      
      <section className="header_rectangle_parent">
        <div className="header_frame_child" />
        <div className="header_frame_item" />
        <div className="header_frame_group">
          <img className="header_search_icon_frame" alt="" src="/frame.svg" />

          {currentPage === '/Courses' ? (
       <div className="header_course_name_placeholder">Course Name or keyword</div>
      ) : currentPage === '/applyresearch' ? (
        <div className="header_course_name_placeholder">Domain</div>
      ) : currentPage === '/applyinternship' ? (
        <div className="header_course_name_placeholder">Role Name or keyword</div>
      ) : null}

          {/* <div className="header_course_name_placeholder">Course Name or keyword</div> */}
          <div className="header_frame_inner" />
          <div className="header_line_div" />
          <div className="header_frame_child1" />
        </div>
        <div className="header_frame_container">
          <img className="header_search_icon_frame" alt="" src="/frame.svg" />
          {currentPage === '/Courses' ? (
       <div className="header_course_name_placeholder1">Course Name or keyword</div>
      ) : currentPage === '/applyresearch' ? (
        <div className="header_course_name_placeholder1">Domain</div>
      ) : currentPage === '/applyinternship' ? (
        <div className="header_course_name_placeholder1">Role Name or keyword</div>
      ) : null}
          {/* <div className="header_course_name_placeholder1">Course Name or keyword</div> */}
          <div className="header_frame_child2" />
          <div className="header_line_div" />
          <div className="header_frame_child1" />
        </div>
        <div className="header_frame_div">
          <img className="header_search_icon_frame2" alt="" src="/frame1.svg" />
          {currentPage === '/Courses' ? (
      
      <div className="header_university_placeholder">University</div>
      ) : currentPage === '/applyresearch' ? (
       
        <div className="header_university_placeholder">Professor Name</div>
      ) : currentPage === '/applyinternship' ? (
    
        <div className="header_university_placeholder">Company Name or Professor Name</div>
      ) : null}
{/* 
          <div className="header_university_placeholder">University</div> */}
          <div className="header_frame_child5" />
        </div>
        <div className="header_main1">
          <img className="header_search_icon_frame2" alt="" src="/frame1.svg" />
          {currentPage === '/Courses' ? (
      
      <div className="header_university_placeholder">University</div>
      ) : currentPage === '/applyresearch' ? (
       
        <div className="header_university_placeholder">Professor Name</div>
      ) : currentPage === '/applyinternship' ? (
    
        <div className="header_university_placeholder">Company Name or Professor Name</div>
      ) : null}
          {/* <div className="header_university_placeholder">University</div> */}
          <div className="header_frame_child6" />
        </div>
        <div className="header_main2">
          <img className="header_search_icon_frame4" alt="" src="/frame1.svg" />

          {currentPage === '/Courses' ? (
      
      <div className="header_search">University</div>
      ) : currentPage === '/applyresearch' ? (
       
        <div className="header_search">Professor Name</div>
      ) : currentPage === '/applyinternship' ? (
    
        <div className="header_search">Company Name or Professor Name</div>
      ) : null}
          {/* <div className="header_search">University</div> */}
          <div className="header_frame_child7" />
        </div>
        <div className="header_main3">
          <img className="header_search_icon_frame5" alt="" src="/frame2.svg" />
          <div className="header_search">Search</div>
        </div>
        <div className="header_main4">
          <img className="header_search_icon_frame5" alt="" src="/frame2.svg" />
          <div className="header_search">Search</div>
        </div>
        <div className="header_main5">
          <img className="header_search_icon_frame5" alt="" src="/frame2.svg" />
          <div className="header_search">Search</div>
        </div>
      </section>
      <section className="header_rectangle_group">
        <div className="header_frame_child" />
        <div className="header_frame_item" />
        <div className="header_frame_group">
          <img className="header_search_icon_frame" alt="" src="/frame.svg" />
          {currentPage === '/Courses' ? (
       <div className="header_course_name_placeholder">Course Name or keyword</div>
      ) : currentPage === '/applyresearch' ? (
        <div className="header_course_name_placeholder">Domain</div>
      ) : currentPage === '/applyinternship' ? (
        <div className="header_course_name_placeholder">Role Name or keyword</div>
      ) : null}
          {/* <div className="header_course_name_placeholder">Course Name or keyword</div> */}
          <div className="header_frame_inner" />
          <div className="header_line_div" />
          <div className="header_frame_child1" />
        </div>
        <div className="header_frame_container">

          <img className="header_search_icon_frame" alt="" src="/frame.svg" />

          {currentPage === '/Courses' ? (
      
      <div className="header_course_name_placeholder1">University</div>
      ) : currentPage === '/applyresearch' ? (
       
        <div className="header_course_name_placeholder1">Professor Name</div>
      ) : currentPage === '/applyinternship' ? (
    
        <div className="header_course_name_placeholder1">Company Name or Professor Name</div>
      ) : null}

          {/* <div className="header_course_name_placeholder1">University</div> */}
          <div className="header_frame_child2" />
          <div className="header_line_div" />
          <div className="header_frame_child1" />
        </div>
        <div className="header_frame_div">
          <img className="header_search_icon_frame2" alt="" src="/frame1.svg" />
          {currentPage === '/Courses' ? (
      
      <div className="header_course_name_placeholder">University</div>
      ) : currentPage === '/applyresearch' ? (
       
        <div className="header_course_name_placeholder">Professor Name</div>
      ) : currentPage === '/applyinternship' ? (
    
        <div className="header_course_name_placeholder">Company Name or Professor Name</div>
      ) : null}


          {/* <div className="header_university_placeholder">University</div> */}
          <div className="header_frame_child5" />
        </div>
        <div className="header_main1">
          <img className="header_search_icon_frame2" alt="" src="/frame1.svg" />
          {currentPage === '/Courses' ? (
      
      <div className="header_course_name_placeholder">University</div>
      ) : currentPage === '/applyresearch' ? (
       
        <div className="header_course_name_placeholder">Professor Name</div>
      ) : currentPage === '/applyinternship' ? (
    
        <div className="header_course_name_placeholder">Company Name or Professor Name</div>
      ) : null}

          {/* <div className="header_university_placeholder">University</div> */}
          <div className="header_frame_child6" />
        </div>
        <div className="header_main2">
          <img className="header_search_icon_frame4" alt="" src="/frame1.svg" />
          {currentPage === '/Courses' ? (
      
      <div className="header_search">University</div>
      ) : currentPage === '/applyresearch' ? (
       
        <div className="header_search">Professor Name</div>
      ) : currentPage === '/applyinternship' ? (
    
        <div className="header_search">Company Name or Professor Name</div>
      ) : null}
          {/* <div className="header_search">University</div> */}
          <div className="header_frame_child7" />
        </div>
        <div className="header_main3">
          <img className="header_search_icon_frame5" alt="" src="/frame2.svg" />
          <div className="header_search">Search</div>
        </div>
        <div className="header_main4">
          <img className="header_search_icon_frame5" alt="" src="/frame2.svg" />
          <div className="header_search">Search</div>
        </div>
        <div className="header_main5">
          <img className="header_search_icon_frame5" alt="" src="/frame2.svg" />
          <div className="header_search">Search</div>
        </div>
      </section>
      <section className="header_rectangle_group">
        <div className="header_frame_child18" />
        <div className="header_frame_item" />
        <div className="header_frame_group">
          <img className="header_search_icon_frame16" alt="" src="/frame.svg" />

          {currentPage === '/Courses' ? (
       <div className="search6">Course Name or keyword</div>
      ) : currentPage === '/applyresearch' ? (
        <div className="search6">Domain</div>
      ) : currentPage === '/applyinternship' ? (
        <div className="search6">Role Name or keyword</div>
      ) : null}
          {/* <div className="search6">Course Name or keyword</div> */}
          <div className="header_frame_inner" />
          <div className="header_line_div" />
          <div className="header_frame_child1" />
        </div>
        <div className="header_frame_container">
          <img className="header_search_icon_frame" alt="" src="/frame.svg" />
          <div className="header_course_name_placeholder1" style={{color:'white'}}>Search</div>
          <div className="header_frame_child2" />
          <div className="header_line_div" />
          <div className="header_frame_child1" />
        </div>
        <div className="header_frame_div">
          <img className="header_search_icon_frame2" alt="" src="/frame1.svg" />
          {currentPage === '/Courses' ? (
      
      <div className="header_course_name_placeholder">University</div>
      ) : currentPage === '/applyresearch' ? (
       
        <div className="header_course_name_placeholder">Professor Name</div>
      ) : currentPage === '/applyinternship' ? (
    
        <div className="header_course_name_placeholder">Company Name or Professor Name</div>
      ) : null}

          {/* <div className="header_university_placeholder">University</div> */}
          <div className="header_frame_child5" />
        </div>
        <div className="header_main1">
          <img className="header_search_icon_frame2" alt="" src="/frame1.svg" />
          {currentPage === '/Courses' ? (
      
      <div className="header_course_name_placeholder">University</div>
      ) : currentPage === '/applyresearch' ? (
       
        <div className="header_course_name_placeholder">Professor Name</div>
      ) : currentPage === '/applyinternship' ? (
    
        <div className="header_course_name_placeholder">Company Name or Professor Name</div>
      ) : null}

          {/* <div className="header_university_placeholder">University</div> */}
          <div className="header_frame_child6" />
        </div>
        <div className="header_main2">
          <img className="header_search_icon_frame4" alt="" src="/frame1.svg" />

          {currentPage === '/Courses' ? (
      
      <div className="header_search">University</div>
      ) : currentPage === '/applyresearch' ? (
       
        <div className="header_search">Professor Name</div>
      ) : currentPage === '/applyinternship' ? (
    
        <div className="header_search">Company Name or Professor Name</div>
      ) : null}

          {/* <div className="header_search">University</div> */}
          <div className="header_frame_child7" />
        </div>
        <div className="header_main3">
          <img className="header_search_icon_frame5" alt="" src="/frame2.svg" />
          <div className="header_search">Search</div>
        </div>
        <div className="header_main4">
          <img className="header_search_icon_frame5" alt="" src="/frame2.svg" />
          <div className="header_search">Search</div>
        </div>
        <div className="header_main5">
          <img className="header_search_icon_frame5" alt="" src="/frame2.svg" />
          <div className="header_search">Search</div>
        </div>
      </section>
      {currentPage === '/Courses' ? (
      
      <div className="header_subtitle">
      Popular : Machine Learning by Harvard, xyz course from Stanford
    </div>
      ) : currentPage === '/applyresearch' ? (
       
        <div className="header_subtitle">
     Popular : Research on Chatgpt, Research on Deep Learning
      </div>
      ) : currentPage === '/applyinternship' ? (
    
        <div className="header_subtitle">
 Popular : UI Designer, Frontend Developer, ML Developer
      </div>
      ) : null}

      {/* <div className="header_subtitle">
        Popular : Machine Learning by Harvard, xyz course from Stanford
      </div> */}
    </div>
  );
};

export default Header;

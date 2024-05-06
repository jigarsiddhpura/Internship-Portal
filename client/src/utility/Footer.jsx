import '../css/Footer.css'
import React from "react";

const Footer = () => {
    return ( 
        <>
        <hr/>
    <footer class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6 about">
            <h6 class="highlight">Internship Portal</h6>
            <p class="text-justify">A platform dedicated to providing students with valuable opportunities to enhance their academic and professional skills. Internship Portal offer a diverse range of internships, courses, and research paper writing opportunities under experienced professors.  Join us today and take the first step towards a successful career! </p>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Courses</h6>
            <ul class="footer-links">
              <li><a href="/">Classroom courses</a></li>
              <li><a href="/">Online courses</a></li>
              <li><a href="/">E-learning courses</a></li>
              <li><a href="/">Video courses</a></li>
            </ul>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul class="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/">Internships</a></li>
              <li><a href="/">All Courses</a></li>
              <li><a href="/">Interview Prep</a></li>
              <li><a href="/">Programs</a></li>
            </ul>
          </div>
        </div>
        <hr/>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12">
            <p class="copyright-text">Copyright &copy; 2023 Internship Portal | All Rights Reserved 
            </p>
          </div>

          <div class="col-md-4 col-sm-6 col-xs-12">
            <ul class="social-icons">
              <li><a Class="facebook" href="#"><i class="fa fa-facebook"></i></a></li>
              <li><a Class="twitter" href="#"><i class="fa fa-twitter"></i></a></li>
              <li><a Class="dribbble" href="#"><i class="fa fa-dribbble"></i></a></li>
              <li><a Class="linkedin" href="#"><i class="fa fa-linkedin"></i></a></li>   
            </ul>
          </div>
        </div>
      </div>
</footer>
        </>
     );
}
 
export default Footer;
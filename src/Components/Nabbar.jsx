import React from 'react';
import { Link } from 'react-router-dom';

const Nabbar = () => {
  return (
    <>
    {/* <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand " href="#">Klinik</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">HOME</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">ABOUT</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">SERVICE</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
          PAGES
        </a>
        <div class="dropdown-menu">
          <a class="dropdown-item" href="#">Features</a>
          <a class="dropdown-item" href="#">Our Doctors</a>
          <a class="dropdown-item" href="#">Appoinment</a>
          <a class="dropdown-item" href="#">Testimonial</a>
          <a class="dropdown-item" href="#">404 pages</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">CONTACTS</a>
      </li>
    </ul>
    
  </div>
</nav> */}
   <nav class="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0 wow fadeIn" data-wow-delay="0.1s">
        <a href="index.html" class="navbar-brand d-flex align-items-center px-4 px-lg-5">
            <h1 class="m-0 text-primary"><i class="far fa-hospital me-3"></i>Klinik</h1>
        </a>
        <button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav ms-auto p-4 p-lg-0">
                <Link  to="/" class="nav-item nav-link active">Home</Link>
                <Link to="/About" class="nav-item nav-link">About</Link>
                <Link to="/Service" class="nav-item nav-link">Service</Link>
                <div class="nav-item dropdown">
                    <a href="/" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                    <div class="dropdown-menu rounded-0 rounded-bottom m-0">
                        <Link to="/Feature" class="dropdown-item">Feature</Link>
                        <Link to="/Our_Doctors" class="dropdown-item">Our Doctor</Link>
                        <Link to="/Appoinment" class="dropdown-item">Appointment</Link>
                        <Link to="/Testimonial" class="dropdown-item">Testimonial</Link>
                        <Link to="/Error_page" class="dropdown-item">404 Page</Link>
                    </div>
                </div>
                <Link to="/Contacts" class="nav-item nav-link">Contact</Link>
            </div>
            <a href="" class="btn btn-primary rounded-0 py-4 px-lg-5 d-none d-lg-block">Appointment<i class="fa fa-arrow-right ms-3"></i></a>
        </div>
    </nav>
    </>
  )
}

export default Nabbar
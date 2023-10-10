import React from 'react'
import Service_comp from '../Components/Service_comp' ;
import Appointment_comp from '../Components/Appointment_comp';
import Testimonial_comp from '../Components/Testimonial_comp';

const Service = () => {
  return (
    <>
      {/* <!-- Page Header Start --> */}
    <div class="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
        <div class="container py-5">
            <h1 class="display-3 text-white mb-3 animated slideInDown">Services</h1>
            <nav aria-label="breadcrumb animated slideInDown">
                <ol class="breadcrumb text-uppercase mb-0">
                    <li class="breadcrumb-item"><a class="text-white" href="#">Home</a></li>
                    <li class="breadcrumb-item"><a class="text-white" href="#">Pages</a></li>
                    <li class="breadcrumb-item text-primary active" aria-current="page">Services</li>
                </ol>
            </nav>
        </div>
    </div>

    <Service_comp/>
    <Appointment_comp/>
    <Testimonial_comp/>
    </>
  )
}

export default Service
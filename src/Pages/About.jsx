import React from 'react';
import About_comp from '../Components/About_comp';
import Feature_comp from '../Components/Feature_comp'
import Doctors from '../Components/Doctors';

const About = () => {
  return (
   <>
 {/* <!-- Page Header Start --> */}
    <div class="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
        <div class="container py-5">
            <h1 class="display-3 text-white mb-3 animated slideInDown">About Us</h1>
            <nav aria-label="breadcrumb animated slideInDown">
                <ol class="breadcrumb text-uppercase mb-0">
                    <li class="breadcrumb-item"><a class="text-white" href="#">Home</a></li>
                    <li class="breadcrumb-item"><a class="text-white" href="#">Pages</a></li>
                    <li class="breadcrumb-item text-primary active" aria-current="page">About</li>
                </ol>
            </nav>
        </div>
    </div>

    <About_comp/>
    <Feature_comp/>
    <Doctors/>

   </>
  )
}

export default About
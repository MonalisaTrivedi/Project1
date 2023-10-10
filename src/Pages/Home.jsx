import React from 'react';
import img1 from '../images/carousel-1.jpg'
import About_comp from '../Components/About_comp';
import Service_comp from '../Components/Service_comp';
import Feature_comp from '../Components/Feature_comp';
import Doctors from '../Components/Doctors';
import Appointment_comp from '../Components/Appointment_comp';
import Testimonial_comp from '../Components/Testimonial_comp';
// import Spinner from '../Components/Common/Spinner';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Home = () => {
  return (
    <>
    {/* <Spinner/> */}
     {/* Header Start  */}
 <div class="container-fluid header bg-primary p-0 mb-5">
        <div class="row g-0 align-items-center flex-column-reverse flex-lg-row">
            <div class="col-lg-6 p-5 wow fadeIn" data-wow-delay="0.1s">
                <h1 class="display-4 text-white mb-5">Good Health Is The Root Of All Heppiness</h1>
                <div class="row g-4">
                    <div class="col-sm-4">
                        <div class="border-start border-light ps-4">
                            <h2 class="text-white mb-1" data-toggle="counter-up">123</h2>
                            <p class="text-light mb-0">Expert Doctors</p>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="border-start border-light ps-4">
                            <h2 class="text-white mb-1" data-toggle="counter-up">1234</h2>
                            <p class="text-light mb-0">Medical Stuff</p>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="border-start border-light ps-4">
                            <h2 class="text-white mb-1" data-toggle="counter-up">12345</h2>
                            <p class="text-light mb-0">Total Patients</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-6 wow fadeIn" data-wow-delay="0.5s" >
                <OwlCarousel class="owl-carousel header-carousel" items={1} autoplay={true} loop={true}>
                    <div class="owl-carousel-item position-relative">
                        <img class="img-fluid" src={'../img/carousel-1.jpg'} alt="" />
                        <div class="owl-carousel-text">
                            <h1 class="display-1 text-white mb-0">Cardiology</h1>
                        </div>
                    </div>
                    <div class="owl-carousel-item position-relative">
                        <img class="img-fluid" src={'../img/carousel-2.jpg'} alt=""/>
                        <div class="owl-carousel-text">
                            <h1 class="display-1 text-white mb-0">Neurology</h1>
                        </div>
                    </div>
                    <div class="owl-carousel-item position-relative">
                        <img class="img-fluid" src={"../img/carousel-3.jpg"} alt=""/>
                        <div class="owl-carousel-text">
                            <h1 class="display-1 text-white mb-0">Pulmonary</h1>
                        </div>
                    </div>
                </OwlCarousel>
            </div>
        </div>
    </div>
    {/* <!-- About Start --> */}
    <About_comp/>

    {/* <!-- Service Start --> */}
    <Service_comp/>

    {/* <!-- Feature Start --> */}
    <Feature_comp/>

    {/* <!-- Team Start --> */}
    <Doctors/>

    {/* <!-- Appointment Start --> */}
    <Appointment_comp/>

    {/* <!-- Testimonial Start --> */}
    <Testimonial_comp/>
    </>
  )
}

export default Home
import MobileMenu from "../common/header/MobileMenu";
import Header from "./Header";

import PopupVideo from "../common/PopupVideo";
import FeaturedProperties from "./FeaturedProperties";
import FindProperties from "./FindProperties";
import BestProperties from "./BestProperties";
import AgentsTeam from "./AgentsTeam";
import Footer from "../common/footer/Footer";
import CopyrightFooter from "../common/footer/CopyrightFooter";
import PopupSignInUp from "../common/PopupSignInUp";
import Hero from "./Hero";
import CountrySlider from "./countrySlider";

const Home3 = () => {
  return (
    <>
      {/* <!-- Main Header Nav --> */}
      <Header />

      {/* <!--  Mobile Menu --> */}
      <MobileMenu />

      {/* <!-- Modal --> */}
      <PopupSignInUp />

      {/* <!-- Home Design --> */}
      <Hero />

  

      {/* <!-- Property Cities --> */}
      <section id="property-city" className="property-city pt0 pb30 mt-12">
        <div className="row">
          <div className="col-lg-12 text-center">
            <div className="main-title    ml-12 font-serif  font-semibold  text-2xl">
              <h2 className="  m-auto w-3/4 md:w-1/4  py-2 rounded-md text-white bg-red-500">بعض البلدان التي نقدم فيها خدماتنا</h2>
              {/* <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                <a className="float-end" href="#">
                  View All <span className="flaticon-next"></span>
                </a>
              </p> */}
            </div>
          </div>
        </div>
        {/* <div className="row m-4">
          <FindProperties />
        </div> */}

<div className="col-lg-12">
            <div className="feature_property_home3_slider gutter-x15 mx-12">
              <CountrySlider/>
            </div>
          </div>




      </section>


    {/* <!-- Feature Properties -->    mt80  */}
    <section id="feature-property" className="feature-property
    
     pb50
     -mt-[20px]
     
     "
     
     >
        <div className="row">
          <div className="col-lg-12">
            <div className="main-title mb40 text-center">
              <h2
              className="m-auto w-1/4  text-2xl p-2 rounded-md text-white bg-red-500"
              >خدمات مميزة</h2>
             
              {/* <p>
                Handpicked properties by our team.{" "}
                <a className="float-end" href="#">
                  View All <span className="flaticon-next"></span>
                </a>
              </p> */}
            </div>
          </div>
          <div className="col-lg-12">
            <div className="feature_property_home3_slider gutter-x15 mx-12">
              <FeaturedProperties />
            </div>
          </div>




          {/* <div className="col-lg-12">
            <div className="feature_property_home3_slider gutter-x15 mx-12">
              <CountrySlider/>
            </div>
          </div> */}


        </div>
      </section>




      {/* <!-- Property Search --> */}
      {/* <section id="property-search" className="property-search bg-img4 mx-12">
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <div className="search_smart_property text-center">
              <h2>Find Smarter, From Anywhere</h2>
              <p>
                Power your search with our Resideo real estate platform, for
                timely listings and a seamless experience.
              </p>
              <button className="btn ssp_btn">Find Now</button>
            </div>
          </div>
        </div>
      </section> */}

      {/* <!-- Property Cities --> */}
      {/* <section id="best-property" className="best-property pt100 pb0">
        <div className="row">
          <div className="col-lg-12">
            <div className="main-title">
              <h2>Best Property Value</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                <a className="float-end" href="#">
                  View All <span className="flaticon-next"></span>
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <BestProperties />
        </div>
      </section> */}

      {/* <!-- Our Agents --> */}
      {/* <section id="our-agents" className="our-agents pt40 pb30">
        <div className="row">
          <div className="col-lg-12">
            <div className="main-title">
              <h2>Our Agents</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                <a className="float-end" href="#">
                  View All <span className="flaticon-next"></span>
                </a>
              </p>
            </div>
          </div>
        </div>
   

        <div className="row">
          <AgentsTeam />
        </div>
      
      </section> */}

      {/* <!-- Our Footer --> */}
      {/* <section className="footer_one home3 ml-24">
        <div className="container-fluid">
          <div className="row">
            <Footer />
          </div>
        </div>
      </section> */}

<section className="footer_one">
        <div className="container">
          <div className="row">
            <Footer />
          </div>
        </div>
      </section>

      {/* <!-- Our Footer Bottom Area --> */}
      {/* <section className="footer_middle_area home3 pt30 pb30">
        <div className="container-fluid">
          <CopyrightFooter />
        </div>
      </section> */}
    </>
  );
};

export default Home3;

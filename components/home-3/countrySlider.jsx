import Link from "next/link";
import Slider from "react-slick";
import properties from "../../data/properties";
import { featuresData } from "../../data/features";
import { countries } from "../../data/countries";

const CountrySlider = () => {
  const settings = {
    dots: false,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 3,
    autoplay: false,
    speed: 1200,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 568,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },



      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Slider {...settings} arrows={true}>
  
      {countries.slice(0, 6).map((item) => (
          <div className="item" key={item.id}>
            <div className="feat_property home3  h-[320px] w-[355px] ">
            <Link  href={item?.items[0].routerPath}>
              <div className="thumb">
                <img className="img-whp" src={item.image} alt="fp1.jpg" />
                <div className="thmb_cntnt">
                  <ul className="tag mb0">
               
                  </ul>

                </div>
              </div>
              </Link>

              <div className="details">
                <div className="tc_content">
                  <p className="text-thm">{item.type}</p>
                  <h4>
                    <Link  href={item?.items[0].routerPath}>
                      <a>{item.title}</a>
                    </Link>
                  </h4>
              
                </div>
              </div>
            </div>
          </div>
        ))} 





      </Slider>
    </>
  );
};

export default CountrySlider;

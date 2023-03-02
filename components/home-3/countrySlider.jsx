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
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
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
              <div className="thumb">
                <img className="img-whp" src={item.image} alt="fp1.jpg" />
                <div className="thmb_cntnt">
                  <ul className="tag mb0">
                    {/* {item.saleTag.map((val, i) => ( */}

                      {/* <li className="list-inline-item">
                        <a href="#">{item?.featurecorner}</a>
                      </li> */}


                     {/* ))} */}
                  </ul>
{/* 
                  <ul className="icon mb0">
                    <li className="list-inline-item">
                      <a href="#">
                        <span className="flaticon-transfer-1"></span>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">
                        <span className="flaticon-heart"></span>
                      </a>
                    </li>
                  </ul> */}

                   {/* <Link href={`/listing-details-v1/${item.id}`}>
                    <a className="fp_price">
                      ${item.price}
                      <small>/mo</small>
                    </a>
                  </Link>  */}
                </div>
              </div>

              <div className="details">
                <div className="tc_content">
                  <p className="text-thm">{item.type}</p>
                  <h4>
                    <Link href={`/listing-details-v1/${item.id}`}>
                      <a>{item.title}</a>
                    </Link>
                  </h4>
                  {/* <p>
                    <span className="flaticon-placeholder"></span>
                    {item.location}
                  </p> */}

                  {/* <ul className="prop_details mb0">
                    {item.itemDetails.map((val, i) => (
                      <li className="list-inline-item" key={i}>
                        <a href="#">
                          {val.name}: {val.number}
                        </a>
                      </li>
                    ))}
                  </ul> */}
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

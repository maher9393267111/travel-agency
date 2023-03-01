import GlobalHeroFilter from "../common/GlobalHeroFilter";
import PopupVideo from "../common/PopupVideo";

const Hero = () => {
  return (
    <section className="home-three bg-img3 mt85 md-mt0">
      <div className="container">
        <div className="row">
          <div className="col-lg-8  ">
            <div className="home3_home_content ml-12">
              <h1>Patagonia</h1>
              <h4 className="  text-3xl">
                Enjoy  Journey ,Not The destination
              </h4>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="home3_home_content">
              <PopupVideo />
            </div>
          </div>
        </div>
        {/* <div className="row">
          <div className="col-lg-12">
            <GlobalHeroFilter className="home3" />
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;

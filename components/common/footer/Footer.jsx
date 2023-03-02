import Link from "next/link";
import Social from "./Social";
import SubscribeForm from "./SubscribeForm";

const Footer = () => {
  return (
    <>
      <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4 pr0 pl0 px-4">
        <div className="footer_about_widget">

          <div className=" mr-12 mb-4">

        
          <h4> Patagonia</h4>
          <p>
         
Enjoy the Journey ,Not The destination
          </p>

          <div>
          <img class="  w-24 h-24 rounded-xl my-2 object-cover" src="/assets/images/service-imgs/logoproject.jpeg" alt="header-logo2.png"/>
          </div>

          </div>
        </div>
      </div>
      {/* End .col */}

      {/* <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
        <div className="footer_qlink_widget">
          <h4>Quick Links</h4>
          <ul className="list-unstyled">
            <li>
              <Link href="/">
                <a>About Us</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Terms & Conditions</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>User’s Guide</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Support Center</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Press Info</a>
              </Link>
            </li>
          </ul>
        </div>
      </div> */}
      {/* End .col */}

      <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
        <div className="footer_contact_widget">
          <h4>Contact Us</h4>
          <ul className="list-unstyled">
            <li>
            {/* mailto:info@Patagonia.com */}
              <a href="">https://ptgtourism.com</a>
            </li>
            <li>
              <a href="#">Turkey , Istanbul</a>
            </li>
            {/* <li>
              <a href="#">8007, Australia.</a>
            </li> */}
            <li>
              <a href="tel:+905385073947">+905385073947</a>
            </li>
            {/* <li>
              <a href="tel:+4733378901">+1 246-345-0695</a>
            </li> */}
          </ul>
        </div>
      </div>
      {/* End .col */}

      <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
        <div className="footer_social_widget">
          <h4>Follow us</h4>
          <ul className="mb30">
            <Social />
          </ul>
          <h4>Subscribe</h4>
          <SubscribeForm />
        </div>
      </div>
    </>
  );
};

export default Footer;

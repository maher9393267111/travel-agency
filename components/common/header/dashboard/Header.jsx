import Link from "next/link";
import { useEffect, useState } from "react";
import HeaderMenuContent from "./HeaderMenuContent";

const Header = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 95) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  }, []);

  return (
    <header
      className={`header-nav menu_style_home_one style2 navbar-scrolltofixed stricky main-menu  ${
        navbar ? "stricky-fixed " : ""
      }`}
    >
      <div className="container-fluid p0">
        {/* <!-- Menu Toggle btn--> */}
        <Link href="/">
          <a className="navbar_brand float-start dn-smd">
            <img
              className="logo1 img-fluid  object-contain"
              src= '/assets/images/service/logo-png-here.jpeg'
              // src="/assets/images/ogle-color-logo.png"
              alt="header-logo2.png"
            />
            <img
              className="logo2 img-fluid"
              src= '/assets/images/service/logoproject.jpeg'
              // src="/assets/images/ogle-color-logo.png"
              alt="header-logo2.png"
            />
            <span>Patagonia</span>
          </a>
        </Link>
        {/* site logo brand */}

        <nav className=" mr-12">
          <HeaderMenuContent />
        </nav>
        {/* End .navbar */}
      </div>
    </header>
    // {/* <!-- /.theme-main-menu --> */}
  );
};

export default Header;

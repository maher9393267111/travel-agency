import Link from "next/link";
import { useEffect, useState } from "react";
// import HeaderMenuContent from "../common/header/HeaderMenuContent";
import HeaderMenuContent from "./headerContent";

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
    dir=""
      className={`header-nav menu_style_home_one style2 home3 navbar-scrolltofixed stricky main-menu  ${
        navbar ? "stricky-fixed " : ""
      }`}
    >
      <div className="container-fluid p0  flex">
        {/* <!-- Ace Responsive Menu --> */}

        <Link href="/">
          <a className="navbar_brand float-start dn-smd">
            <img
              className="logo1 img-fluid"
              // src="/assets/images/ogle-color-logo.png"
              src=  '/assets/images/service-imgs/logoproject.jpeg'
              alt="header-logo2.png"
            />
            <img
              className="logo2 img-fluid"
              // src="/assets/images/ogle-color-logo.png"
              src=  '/assets/images/service-imgs/logoproject.jpeg'
              alt="header-logo2.png"
            />
            <span className=" mt-[17px]">Patagonia</span>
          </a>
        </Link>
        {/* site logo brand */}

        <nav className="  ml-12">
          <HeaderMenuContent />
        </nav>
        {/* End .navbar */}
      </div>
    </header>
    // {/* <!-- /.theme-main-menu --> */}
  );
};

export default Header;

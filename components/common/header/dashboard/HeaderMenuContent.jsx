import Link from "next/link";
import { useRouter } from "next/router";
import MyAccount from "./MyAccount";
import {listingCountries} from '../../../../data/countries'

const HeaderMenuContent = ({ float = "" }) => {
  const route = useRouter();

  const home = [
    {
      id: 1,
      name: "الرئيسية",
      routerPath: "/",
    },
   
  ];



  const blog = [
    { id: 1, name: "All Blog List ", routerPath: "/blogs" },
 
    // {
    //   id: 4,
    //   name: "Blog Details",
    //   routerPath: "/blogs/1",
    // },
  ];



  return (
    <ul
      id="respMenu"
      className="ace-responsive-menu text-end d-lg-block d-none"
      data-menu-style="horizontal"
    >
   
      {/* End .dropitem */}

  
      {/* End .dropitem */}


      <li className="dropitem">
        <a
          href="#"
          className={
            home.some((page) => page.routerPath === route.pathname)
              ? "ui-active"
              : undefined
          }
        >
          <span className="title">Home</span>
          <span className="arrow"></span>
        </a>
        {/* <!-- Level Two--> */}

        <ul className="sub-menu ">
          {home.map((item) => (
            <li key={item.id}>
              <Link href={item.routerPath}>
                <a
                  className={
                    route.pathname === item.routerPath ? "ui-active" : undefined
                  }
                >
                  {item.name}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </li>

     

      <li className="user_setting">
        <div className="dropdown">
          <a className="btn dropdown-toggle" href="#" data-bs-toggle="dropdown">
            <img
              className="rounded-circle"
              src="/assets/images/team/e1.png"
              alt="e1.png"
            />
            <span className="dn-1199 ms-1">ADMIN</span>
          </a>
          <div className="dropdown-menu">
            <MyAccount />
          </div>
        </div>
      </li>
      {/* End ."user_setting */}

      <li className={`list-inline-item add_listing ${float}`}>
        <Link href="/create-listing">
          <a>
            <span className="flaticon-plus"></span>
            <span className="dn-lg"> Create Listing</span>
          </a>
        </Link>
      </li>
      {/* End .dropitem */}
    </ul>
  );
};

export default HeaderMenuContent;

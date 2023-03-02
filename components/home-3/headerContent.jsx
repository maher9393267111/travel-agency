import Link from "next/link";
import { useRouter } from "next/router";
import { listingCountries } from '../../data/countries'
import MyAccount from "../common/header/dashboard/MyAccount";


const HeaderMenuContentHome = ({ float = "" }) => {
  const route = useRouter();

  const home = [
    {
      id: 1,
      name: "الرئيسية",
      routerPath: "/",
    },

  ];












  const blog = [
    { id: 1, name: "المدونة ", routerPath: "/blogs" },


  ];



  return (
    <ul
      id="respMenu"
      className="ace-responsive-menu text-end d-lg-block d-none"
      data-menu-style="horizontal"
    >








      <li className="dropitem">




        {/* <a
          href="#"
          className={
            home.some((page) => page.routerPath === route.pathname)
              ? "ui-active"
              : undefined
          }
        >
          <span className="title">الرئيسية</span>
          <span className="arrow"></span>
        </a> */}
        {/* <!-- Level Two--> */}


        <li className={` `}>
          <Link href={'/'}>
            <a
              href="#"
              className=""
            //   data-bs-toggle="modal"
            //   data-bs-target=".bd-example-modal-lg"
            >
              <span className="dn-lg" >  الرئيسية</span>
            </a>
          </Link>
        </li>




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
      {/* End .dropitem */}



      <li className="dropitem">
        <a
          href="#"
          className={
            listingCountries.some((parent) => {
              return parent.items.some(
                (page) => page.routerPath === route.pathname
              );
            })
              ? "ui-active"
              : undefined
          }
        >
          <span className="title">الخدمات والدول</span>
          <span className="arrow"></span>
        </a>
        {/* <!-- Level Two--> */}
        <ul className="sub-menu ">
          {listingCountries.map((item) => (
            <li className="dropitem arrow" key={item.id}>
              <a
                href="#"
                className={
                  item.items.some((page) => page.routerPath === route.pathname)
                    ? "ui-active"
                    : undefined
                }
              >
                <div className=" flex gap-2 items-center">
                  <span className=" ">
                  {item.title}
                  </span>
              
                  <span><img className="w-6 h-6" src={item?.icon} alt={item?.name} /></span>
                </div>
           
             
               
                
              </a>
              {/* <!-- Level Three--> */}
              <ul className="sub-menu ">
                {item.items.map((val, i) => (
                  <li key={i}>
                    <Link href={val.routerPath}>
                      <a
                        className={
                          route.pathname === val.routerPath
                            ? "ui-active"
                            : undefined
                        }
                      >
                        {val.name}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </li>





      <li className="dropitem">
        <a
          href="#"
          className={
            blog.some(
              (page) =>
                page.routerPath === route.pathname ||
                page.routerPath + "/[id]" === route.pathname
            )
              ? "ui-active"
              : undefined
          }
        >
          <span className="title">Blog</span>
          <span className="arrow"></span>
        </a>
        <ul className="sub-menu ">
          {blog.map((item) => (
            <li key={item.id}>
              <Link href={item.routerPath}>
                <a
                  className={
                    route.pathname === item.routerPath ||
                      item.routerPath + "/[id]" === route.pathname
                      ? "ui-active"
                      : undefined
                  }
                >
                  {item.name}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </li>














      {!route.pathname.startsWith("/admin") &&


        <li className={`list-inline-item list_s ${float}`}>
          <Link href={'/login'}>
            <a
              href="#"
              className="btn flaticon-user"
            //   data-bs-toggle="modal"
            //   data-bs-target=".bd-example-modal-lg"
            >
              <span className="dn-lg">تسجيل دخول</span>
            </a>
          </Link>
        </li>

      }



      {route.pathname.startsWith('/admin') &&

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

      }




    </ul>
  );
};

export default HeaderMenuContentHome;
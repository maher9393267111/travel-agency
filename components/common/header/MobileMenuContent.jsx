import "react-pro-sidebar/dist/css/styles.css";
import {
  ProSidebar,
  SidebarHeader,
  SidebarFooter,
  Menu,
  MenuItem,
  SubMenu,
  SidebarContent,
} from "react-pro-sidebar";
import Link from "next/link";
import { useRouter } from "next/router";
import {listingCountries} from '../../../data/countries'

const home = [
  {
    name: "Home 1",
    routerPath: "/",
  },
 
];

const listing = [
  {
    id: 1,
    title: "Listing Grid",
    items: [
      {
        name: "Grid v1",
        routerPath: "/listing-grid-v1",
      },
      {
        name: "Grid v2",
        routerPath: "/listing-grid-v2",
      },
      {
        name: "Grid v3",
        routerPath: "/listing-grid-v3",
      },
      {
        name: "Grid v4",
        routerPath: "/listing-grid-v4",
      },
      {
        name: "Grid v5",
        routerPath: "/listing-grid-v5",
      },
      {
        name: "Grid v6",
        routerPath: "/listing-grid-v6",
      },
    ],
  },
  {
    id: 2,
    title: "Listing List",
    items: [
      {
        name: "List V1",
        routerPath: "/listing-list-v1",
      },
    ],
  },
  {
    id: 3,
    title: "Listing Style",
    items: [
      {
        name: "Parallax Style",
        routerPath: "/parallax-style",
      },
      {
        name: "Slider Style",
        routerPath: "/slider-style",
      },
      {
        name: "Map Header",
        routerPath: "/map-header",
      },
    ],
  },
  {
    id: 4,
    title: "Listing Half",
    items: [
      {
        name: "Map V1",
        routerPath: "/listing-map-v1",
      },
      {
        name: "Map V2",
        routerPath: "/listing-map-v2",
      },
      {
        name: "Map V3",
        routerPath: "/listing-map-v3",
      },
      {
        name: "Map V4",
        routerPath: "/listing-map-v4",
      },
    ],
  },
  {
    id: 5,
    title: "Agent View",
    items: [
      {
        name: "Agent V1",
        routerPath: "/agent-v1",
      },
      {
        name: "Agent V2",
        routerPath: "/agent-v2",
      },
      {
        name: "Agent Details",
        routerPath: "/agent-details",
      },
    ],
  },
  {
    id: 6,
    title: "Agencies View",
    items: [
      {
        name: "Agencies V1",
        routerPath: "/agency-v1",
      },
      {
        name: "Agencies V2",
        routerPath: "/agency-v2",
      },
      {
        name: "Agencies Details",
        routerPath: "/agency-details",
      },
    ],
  },
  {
    id: 7,
    title: "Create Listing",
    items: [
      {
        name: "Create Listing",
        routerPath: "/create-listing",
      },
    ],
  },
];












const blog = [
  { id: 1, name: "All Blog List ", routerPath: "/blogs" },
  // { id: 2, name: "Blog List 2", routerPath: "/blog-list-2" },
  // { id: 3, name: "Blog List 3", routerPath: "/blog-list-3" },
  {
    id: 4,
    name: "Blog Details",
    routerPath: "/blog/1",
  },
];


const MobileMenuContent = () => {
  const route = useRouter();
  return (
    <ProSidebar>
      <SidebarHeader>
        <div className="sidebar-header">
          <Link href="/">
            <a className="sidebar-header-inner">
              <img
                className="nav_logo_img  w-[70px]  h-[70px] img-fluid mt20 object-contain"
                 src=  '/assets/images/service-imgs/logo-png-here.jpeg'
                 
                //  src="/assets/images/ogle-color-logo.png"
                alt="header-logo.png"
              />
              <span className="brand-text">Patagonia</span>
            </a>
          </Link>
          {/* End .logo */}

          <div
            className="fix-icon"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            <span className="flaticon-close"></span>
          </div>
          {/* Mobile Menu close icon */}
        </div>

        {/* End logo */}
      </SidebarHeader>









      <SidebarContent>
        <Menu>


        <MenuItem>
            <Link href="/">
              <a
                className={
                  route.pathname === "/" ? "ui-active" : undefined
                }
              >
                الرئيسية
                {/* <span className="flaticon-edit"></span>  */}
              </a>
            </Link>
          </MenuItem>




          {/* <SubMenu
            title="الرئيسية"
            className={
              home.some((page) => page.routerPath === route.pathname)
                ? "parent-menu-active"
                : undefined
            }
          >
            {home.map((val, i) => (
              <MenuItem key={i} active={true}>
                <Link href={val.routerPath}>
                  <a
                    className={
                      val.routerPath === route.pathname
                        ? "ui-active"
                        : undefined
                    }
                  >
                    {val.name}
                  </a>
                </Link>
              </MenuItem>
            ))}
          </SubMenu> */}
          {/* End Home Home */}

          <SubMenu
            title="الخدمات والدول"
            className={
              listing.some((parent) => {
                return parent.items.some(
                  (page) => page.routerPath === route.pathname
                );
              })
                ? "parent-menu-active"
                : undefined
            }
          >
            {listingCountries.map((item) => (
              <SubMenu
                title={item.title}
                className={
                  item.items.some((page) => page.routerPath === route.pathname)
                    ? "ui-active plus alt"
                    : "plus alt"
                }
                key={item.id}
              >
                {item.items.map((val, i) => (
                  <MenuItem key={i}>
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
                  </MenuItem>
                ))}
              </SubMenu>
            ))}
          </SubMenu>
          {/* End Pages Listing */}

       
          {/* End Pages Property */}

          {/* <SubMenu
            title="Blog"
            className={
              blog.some(
                (page) =>
                  page.routerPath === route.pathname ||
                  page.routerPath + "/[id]" === route.pathname
              )
                ? "parent-menu-active"
                : undefined
            }
          >
            {blog.map((val, i) => (
              <MenuItem key={i}>
                <Link href={val.routerPath}>
                  <a
                    className={
                      route.pathname === val.routerPath ||
                      val.routerPath + "/[id]" === route.pathname
                        ? "ui-active"
                        : undefined
                    }
                  >
                    {val.name}
                  </a>
                </Link>
              </MenuItem>
            ))}
          </SubMenu> */}
          {/* End pages Blog */}

      
          {/* End pages Pages */}

     

          <MenuItem>
            <Link href="/blogs">
              <a
                className={
                  route.pathname === "/blogs" ? "ui-active" : undefined
                }
              >
                المدونة
                {/* <span className="flaticon-edit"></span>  */}
              </a>
            </Link>
          </MenuItem>





          <MenuItem>
            <Link href="/login">
              <a
                className={
                  route.pathname === "/login" ? "ui-active" : undefined
                }
              >
                <span className="flaticon-user"></span> 
                تسجيل دخول
              </a>
            </Link>
          </MenuItem>

       
        </Menu>
      </SidebarContent>

      {/* <SidebarFooter>
        <Link href="/create-listing">
          <a className="btn btn-block btn-lg btn-thm circle">
            <span className="flaticon-plus"></span> Create Listing
          </a>
        </Link>
      </SidebarFooter> */}
    </ProSidebar>
  );
};

export default MobileMenuContent;

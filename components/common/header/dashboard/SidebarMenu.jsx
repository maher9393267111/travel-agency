import Link from "next/link";
import { useRouter } from "next/router";
import {
  isParentPageActive,
  isSinglePageActive,
} from "../../../../utils/daynamicNavigation";

const SidebarMenu = () => {
  const route = useRouter();

  const myProperties = [
    { id: 1, name: "General Elements", route: "/my-properties" },
    { id: 2, name: "Advanced Elements", route: "/my-properties" },
    { id: 3, name: "Editors", route: "/my-properties" },
  ];
  const reviews = [
    { id: 1, name: "My Reviews", route: "/my-review" },
    { id: 2, name: "Visitor Reviews", route: "/my-review" },
  ];
  const manageAccount = [
    {
      id: 1,
      name: "My Package",
      route: "/my-package",
      icon: "flaticon-box",
    },
    {
      id: 2,
      name: "My Profile",
      route: "/my-profile",
      icon: "flaticon-user",
    },
    { id: 3, name: "Logout", route: "/login", icon: "flaticon-logout" },
  ];

  return (
    <>
      <ul className="sidebar-menu">
        <li className="sidebar_header header">
          <Link href="/">
            <a>
              <img
                 src="/assets/images/ogle-color-logo.png"
                // src=  '/assets/images/service-imgs/logoproject.jpeg'
                alt="header-logo2.png"
              />
              <span>FindHouse</span>
            </a>
          </Link>
        </li>
        {/* End header */}

        <li className="title">
          <span>Main</span>
          <ul>
            <li
              className={`treeview ${
                isSinglePageActive("/my-dashboard", route.pathname)
                  ? "active"
                  : ""
              }`}
            >
              <Link href="/my-dashboard">
                <a>
                  <i className="flaticon-layers"></i>
                  <span> Dashboard</span>
                </a>
              </Link>
            </li>
            <li
              className={`treeview ${
                isSinglePageActive("admin", route.pathname)
                  ? "active"
                  : ""
              }`}
            >
              <Link href="/create-blog">
                <a>
                  <i className="flaticon-plus"></i>
                  <span> Create Blog </span>
                  </a>
              </Link>
            </li>
          

            <li
              className={`treeview ${
                isSinglePageActive("/admin/allBlogs", route.pathname)
                  ? "active"
                  : ""
              }`}
            >
              <Link href="admin/all-blogs">
                <a>
                  <i className="flaticon-plus"></i>
                  <span> All Blogs </span>
                  </a>
              </Link>
            </li>



          </ul>
        </li>
        {/* End Main */}

      
        {/* End manage listing */}

      
      </ul>
    </>
  );
};

export default SidebarMenu;

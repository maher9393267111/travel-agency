import Link from "next/link";
import { useRouter } from "next/router";
import {
  isParentPageActive,
  isSinglePageActive,
} from "../../../../utils/daynamicNavigation";

const SidebarMenu = () => {
  const route = useRouter();

  

  return (
    <>
      <ul className="sidebar-menu">
        <li className="sidebar_header header">
          <Link href="/">
            <a>
              <img
              className=" w-[70px] h-[70px] rounded-xl"
                //  src="/assets/images/ogle-color-logo.png"
                 src=  '/assets/images/service-imgs/logoproject.jpeg'
                alt="header-logo2.png"
              />
              <span>Patagonia</span>
            </a>
          </Link>
        </li>
        {/* End header */}

        <li className="title">
          <span>Main</span>
          <ul>
            <li
              className={`treeview ${
                isSinglePageActive("/admin", route.pathname)
                  ? "active"
                  : ""
              }`}
            >
              <Link href="/admin">
                <a>
                  <i className="flaticon-layers"></i>
                  <span> Dashboard</span>
                </a>
              </Link>
            </li>
            <li
              className={`treeview ${
                isSinglePageActive("/admin", route.pathname)
                  ? "active"
                  : ""
              }`}
            >
              <Link href="/admin">
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
              <Link href="/admin/allblogs">
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

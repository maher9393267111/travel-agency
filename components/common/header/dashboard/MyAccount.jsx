import Link from "next/link";
import { useRouter } from "next/router";
import { isSinglePageActive } from "../../../../utils/daynamicNavigation";
import { StateContext } from '../../../../context/index'


import React, { useContext, useState } from 'react'

const MyAccount = () => {
  const profileMenuItems = [
    { id: 1, name: "Logout", ruterPath: "/" },
    // { id: 2, name: " My Message", ruterPath: "/my-message" },
    // { id: 3, name: " My Favourite", ruterPath: "/my-favourites" },
    // { id: 4, name: " My Package", ruterPath: "/my-package" },
    // { id: 5, name: " Log out", ruterPath: "admin/login" },
  ];

  const { logout, setAlert , user } = useContext(StateContext)

  const { pathname, replace } = useRouter()


  const signOut = () => {
    try {
        // setLoading(true)
        logout()
        replace('/login')
        // setLoading(false)
    } catch (error) {
        console.log(error)
        setAlert({ isShow: true, duration: 3000, message: error.response?.data?.message || error.message, type: "error" })
    }
}




  const route = useRouter();
  return (
    <>
      <div className="user_set_header">
        <img
          className="float-start"
          src="/assets/images/team/e1.png"
          alt="e1.png"
        />
        <p>
          {user?.email} <br />
          <span className="address"></span>
        </p>
      </div>
      {/* End user_set_header */}

      <div className="user_setting_content">
        {profileMenuItems.map((item) => (




item.name === "Logout" ?
          <div key={item.id}>
            <a
            onClick={signOut}
              className="dropdown-item  cursor-pointer"
              style={
                isSinglePageActive(`${item.ruterPath}`, route.pathname)
                  ? { color: "#ff5a5f" }
                  : undefined
              }
            >
              {item.name}
            </a>
          </div>

          :

          <Link href={item.ruterPath} key={item.id}>
          <a
            className="dropdown-item"
            style={
              isSinglePageActive(`${item.ruterPath}`, route.pathname)
                ? { color: "#ff5a5f" }
                : undefined
            }
          >
            {item.name}
          </a>
        </Link>

            
        ))}
      </div>
    </>
  );
};

export default MyAccount;

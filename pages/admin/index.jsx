
import dynamic from "next/dynamic";
import Seo from "../../components/common/seo";
import CreateListing from "../../components/dashboard/create-listing";
import { StateContext } from "../..//context/index";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
const index = () => {


  const { user} = useContext(StateContext)
  const { pathname, replace } = useRouter()

  if (user === null) {
    replace('/login')
    return (
      <div className="bg-blue-200 h-screen w-full fixed top-0 flex justify-center items-center z-50">
        <h1 className="font-cutiveMono text-3xl">
          Sorry You Are Not Logged In
        </h1>
      </div>
    )
  }







  return (
    <>
      <Seo pageTitle="Create Listing Admin" />
      <CreateListing />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });





// import React from 'react'
// import { StateContext } from "../..//context/index";
// import { useContext, useState } from "react";
 

// export default function AdminMain() {

//     const { user, pageLoading = true } = useContext(StateContext)


// console.log('user', user?.email)

//   return (
//     <div>AdminMain </div>
//   )
// }

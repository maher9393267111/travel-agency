
import dynamic from "next/dynamic";
import Seo from "../../components/common/seo";
import CreateListing from "../../components/dashboard/create-listing";

const index = () => {
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

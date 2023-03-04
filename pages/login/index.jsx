import dynamic from "next/dynamic";
import Seo from "../../components/common/seo";
import Login from "../../components/login";
import { StateContext } from "../..//context/index";
import { useRouter } from "next/router";
import { useContext, useState, useEffect } from "react";

const index = () => {






  const { user } = useContext(StateContext)
  const { pathname, replace } = useRouter()

  // if (user !== null) {
  // //  replace('/')
  //   return (
  //     <div className="bg-blue-200 h-screen w-full fixed top-0 flex justify-center items-center z-50">
  //       <h1 className="font-cutiveMono text-3xl">
  //         Sorry You Are Aleready Logged In
  //       </h1>
  //     </div>
  //   )
  // }

  useEffect(() => {


    if (user !== null) {
      replace('/admin')

    }




    setTimeout(() => {
      console.log("Delayed for 13second.");

      // if (user !== null) {
      //    replace('/')

      // }



    }, 3000)


  })








  return (







    <>
      <Seo pageTitle="Login" />
      <Login />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });

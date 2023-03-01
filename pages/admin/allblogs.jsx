import dynamic from "next/dynamic";
import Seo from "../../components/common/seo";
import MyFavourites from "../../components/dashboard/my-favourites";
import { db } from "../../firebase";
import { createGlobalStyle } from "styled-components";
import { collection, getDocs } from "firebase/firestore";
import { StateContext } from "../..//context/index";
import { useRouter } from "next/router";
import { useContext, useState } from "react";

const AdminBlogs = ({  data}) => {

    console.log('data', data);

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
      <Seo pageTitle="My Favourites" />
      <MyFavourites blogs={data} />
    </>
  );
};

export default AdminBlogs;


export async function getStaticProps() {
    const data = [];
  
    try {
      const querySnapshot = await getDocs(collection(db, 'blog'));
  
      querySnapshot.forEach((doc) => {
        console.log('doc', doc);
        data.push({
          id: doc.id,
          ...doc.data(),
        });
      });
    } catch (error) {
      console.error(error);
    }
  
    return {
      props: {
        data,
      },
      revalidate: 60,
    };
  }





// export default dynamic(() => Promise.resolve(index), { ssr: false });
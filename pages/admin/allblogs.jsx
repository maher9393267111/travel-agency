import dynamic from "next/dynamic";
import Seo from "../../components/common/seo";
import MyFavourites from "../../components/dashboard/my-favourites";
import { db } from "../../firebase";
import { createGlobalStyle } from "styled-components";
import { collection, getDocs } from "firebase/firestore";

const AdminBlogs = ({  data}) => {

    console.log('data', data);



  return (
    <>
      <Seo pageTitle="My Favourites" />
      <MyFavourites />
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
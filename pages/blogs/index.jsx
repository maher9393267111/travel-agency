import dynamic from "next/dynamic";
import Seo from "../../components/common/seo";
import BlogV3 from "../../components/blog-list-3";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import { find, findIndex, remove, sortBy ,orderBy } from "lodash";
import moment from "moment/moment";

const BlogsPage = ({data}) => {
  return (
    <>
      <Seo pageTitle="Blog Gid 3" />
      <BlogV3  data={data}/>
    </>
  );
};

export default  BlogsPage;


// export async function getStaticProps() {
//   const datais = [];

//   try {
//     const querySnapshot = await getDocs(collection(db, 'blog'));

//     querySnapshot.forEach((doc) => {
//       datais.push({
//         id: doc.id,
      
//         ...doc.data()
      
//       });
//     });
//   } catch (error) {
//     console.error(error);
//   }
 


//   return {
//     props: {
//       data:datais
//     },
//     revalidate: 1,
//   };
// }



BlogsPage.getInitialProps = async (context) => {
  const datais = [];

  try {
    const querySnapshot = await getDocs(collection(db, 'blog'));

    querySnapshot.forEach((doc) => {
      datais.push({
        id: doc.id,
      
        ...doc.data()
      
      });
    });
  } catch (error) {
    console.error(error);
  }



  return {
    data: datais,
  };
};



//dynamic(() => Promise.resolve(index), { ssr: false });
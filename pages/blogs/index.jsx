import dynamic from "next/dynamic";
import Seo from "../../components/common/seo";
import BlogV3 from "../../components/blog-list-3";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import { find, findIndex, remove, sortBy ,orderBy } from "lodash";
import moment from "moment/moment";
import { checkGridRowIdIsValid } from "@mui/x-data-grid";

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



BlogsPage.getInitialProps = async (context  ) => {
  
  console.log('Query', context?.query?.country)
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

 


const filterdata=(data)=>{


  let filterQuery =[]

  if ( context?.query?.country) {
   
  const filter = datais.filter(doc => doc?.country === context?.query?.country)
  //console.log('FILTER', filter)
   filterQuery = filter
   //console.log('FILTER', filterQuery)
  return filterQuery
  }
  
  return datais
  

}



  return {
    data:filterdata(datais),
  };
};



//dynamic(() => Promise.resolve(index), { ssr: false });
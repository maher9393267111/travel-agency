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


export async function getStaticProps() {
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
 
    // sortBy(datais, ["data"]);


    // const sortedArray = orderBy(datais, (o) => {
    //   return moment(o.date.format('YYYYMMDD'))
    // }, ['asc']);


 //console.log('data is sorted' , sortedArray);

  return {
    props: {
      data:datais
    },
    revalidate: 1,
  };
}




//dynamic(() => Promise.resolve(index), { ssr: false });
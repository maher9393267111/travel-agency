import dynamic from "next/dynamic";
import Seo from "../../components/common/seo";
import BlogV3 from "../../components/blog-list-3";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";

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
  const data = [];

  try {
    const querySnapshot = await getDocs(collection(db, 'blog'));

    querySnapshot.forEach((doc) => {
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




//dynamic(() => Promise.resolve(index), { ssr: false });
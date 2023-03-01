import React from 'react'
import { db } from "../..//firebase";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import Seo from "../../components/common/seo";
import BlogDetails from "../../components/blog-details";

export default function SingleBlogPage({data}) {


console.log('data', data);

  return (
    <>
        <Seo pageTitle="Blog Details" />
      <BlogDetails data={data} />
    
    </>
  )
}





export async function getStaticPaths() {
  const collectionRef = collection(db, "blog");
  const collectionDocs = await getDocs(collectionRef);

  const paths = collectionDocs.docs.map((doc) => ({
    params: {
      id: doc.id,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  const { id } = params;
  const docRef = doc(db, "blog", id);
  const docSnap = await getDoc(docRef);

  const data = {
    ...docSnap.data(),
  };
  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      data,
    },
  };
}

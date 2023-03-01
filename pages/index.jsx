import dynamic from "next/dynamic";
import Seo from "../components/common/seo";
// import HomeMain from "../components/home";
import Home3 from "../components/home-3/Home3"
const index = () => {
  return (
    <>
      <Seo pageTitle="Home-1 "  />
      <Home3/>
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });

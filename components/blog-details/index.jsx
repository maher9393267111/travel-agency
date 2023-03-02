// import BlogSidebar from "../../components/common/blog/BlogSidebar";
import CopyrightFooter from "../../components/common/footer/CopyrightFooter";
import Footer from "../../components/common/footer/Footer";
import Header from "../home-3/Header";
import MobileMenu from "../../components/common/header/MobileMenu";


import BreadCrumb2 from "./BreadCrumb2";



const index = ({data}) => {

  const description = (desc) => {
    let data = desc.split('>')[1].split('<')[0]
   console.log('description-->' , data)
    // data.length >= 250 ? data.slice(0, 650) :
    return  data
}
const title = (data) => {
    return data.length >= 50 ? data.slice(0, 50) + "..." : data
}


// const getText = (html) =>{
//   const doc = new DOMParser().parseFromString(html, "text/html")
//   return doc.body.textContent
// }


const parsedHtml = data?.description.replace(/(<([^>]+)>)/gi, '');



  return (
    <>
      {/* <!-- Main Header Nav --> */}
      <Header />

      {/* <!--  Mobile Menu --> */}
      <MobileMenu />

      {/* <!-- Modal --> */}
      {/* <PopupSignInUp /> */}

      {/* <!-- Main Blog Post Content --> */}
      <section className="blog_post_container bgc-f7">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <BreadCrumb2 />
            </div>
          </div>
          {/* End .row */}

          <div className="row">
            <div className="col-lg-10">
              <div className="main_blog_post_content">
                <div className="mbp_thumb_post">
                  <div className="blog_sp_tag">
                    <a href="#">Blog</a>
                  </div>
                  <h3 className="blog_sp_title">

{title(data?.title)}
                    {/* Redfin Ranks the Most Competitive Neighborhoods of 2020 */}
                  </h3>
                  <ul className="blog_sp_post_meta">
                    <li className="list-inline-item">
                      <a href="#">
                        <img
                          src="/assets/images/property/pposter1.png"
                          alt="pposter1.png"
                        />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">ADMIN</a>
                    </li>
                    <li className="list-inline-item">
                      <span className="flaticon-calendar"></span>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">{data?.date}</a>
                    </li>
                    <li className="list-inline-item">
                      <span className="flaticon-view"></span>
                    </li>
                    <li className="list-inline-item">
                      <a href="#"> 341 views</a>
                    </li>
                    <li className="list-inline-item">
                      <span className="flaticon-chat"></span>
                    </li>
                    {/* <li className="list-inline-item">
                      <a href="#">15</a>
                    </li> */}
                  </ul>
                  <div className="thumb">
                    <img
                      className="img-fluid  w-full h-[288px]  md:h-[400px] lg:h-[600px]  object-cover"
                      src={data?.image[0]?.url}
                      // src="assets/images/blog/bs1.jpg"
                      alt="bs1.jpg"
                    />
                  </div>

                  <div className="details">
                    <p className="mb30">
                      {parsedHtml}
                    {/* {getText(data?.description)} */}
                      {/* { description(data?.description)}... */}
                      {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Duis mollis et sem sed sollicitudin. Donec non odio neque.
                      Aliquam hendrerit sollicitudin purus, quis rutrum mi
                      accumsan nec. Quisque bibendum orci ac nibh facilisis, at
                      malesuada orci congue. Nullam tempus sollicitudin cursus.
                      Ut et adipiscing erat. Curabitur this is a text link
                      libero tempus congue. */}
                    </p>
                 
                  </div>
                  {/* <ul className="blog_post_share">
                    <li>
                      <p>Share</p>
                    </li>
                    <Social />
                  </ul> */}
                  {/* End .blog_post_share */}
                </div>
                {/* End .mbp_thumb_post */}

                {/* <div className="mbp_pagination_tab">
                  <Pagination />
                </div> */}
                {/* End mbp_pagination_tab */}

                {/* <div className="product_single_content mb30">
                  <div className="mbp_pagination_comments">
                    <div className="total_review">
                      <h4>896 Reviews</h4>
                      <ul className="review_star_list mb0 pl10">
                        <Ratings />
                      </ul>
                      <a className="tr_outoff pl10" href="#">
                        ( 4.5 out of 5 )
                      </a>
                      <a className="write_review float-end fn-xsd" href="#">
                        Write a Review
                      </a>
                    </div>
               

                    <Comments />
                    <div className="custom_hr"></div>
                  </div>
                </div> */}



                {/* End .product_single_content  */}

                {/* <div className="bsp_reveiw_wrt">
                  <h4>Write a Review</h4>

                  <ul className="review_star">
                    <li className="list-inline-item">
                      <span className="sspd_review">
                        <ul>
                          <Ratings />
                        </ul>
                      </span>
                    </li>
                    <li className="list-inline-item pr15">
                      <p>Your Rating & Review</p>
                    </li>
                  </ul>
                  <ReviewBox />
                </div> */}
                {/* End .bsp_reveiw_wrt */}
              </div>
              {/* End .main_blog_post_content */}

              {/* <div className="row">
                <div className="col-lg-12 mb20 mt-12">
                  <h4>Related Posts</h4>
                </div>
                <RelatedPost />
              </div> */}
            </div>
            {/* End .col */}

            {/* <div className="col-lg-4">
              <BlogSidebar />
            </div> */}
            {/* End Sidebar column */}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>

      {/* <!-- Our Footer --> */}
      <section className="footer_one">
        <div className="container">
          <div className="row">
            <Footer />
          </div>
        </div>
      </section>

      {/* <!-- Our Footer Bottom Area --> */}
      {/* <section className="footer_middle_area pt40 pb40">
        <div className="container">
          <CopyrightFooter />
        </div>
      </section> */}
    </>
  );
};

export default index;

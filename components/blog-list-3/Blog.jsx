import Link from "next/link";
import blogContent from "../../data/blogs";

const Blog = ({data:blogs}) => {

  const description = (desc) => {
    let data = desc.split('>')[1].split('<')[0]
    return data.length >= 150 ? data.slice(0, 150) : data
}
const title = (data) => {
    return data.length >= 50 ? data.slice(0, 50) + "..." : data
}



const parseHtml = (desc) => {
 let data = desc.replace(/(<([^>]+)>)/gi, '')

 return data.length >= 150 ? data.slice(0, 150) : data

}



  return (
    <>
    
      {/* {blogContent.slice(0, 6).map((item) => (
        <div className="col-lg-4 col-md-6" key={item.id}>
          <div className="for_blog feat_property">
            <div className="thumb">
              <Link href={`/blog-details/${item.id}`}>
                <a>
                  <img className="img-whp" src={item.img} alt={item.img} />
                </a>
              </Link>
              <div className="blog_tag">{item.postMeta}</div>
            </div>
           

            <div className="details">
              <div className="tc_content">
                <h4 className="mb15">
                  <Link href={`/blog-details/${item.id}`}>
                    <a>{item.title}</a>
                  </Link>
                </h4>
                <ul className="bpg_meta mb10">
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="flaticon-calendar"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">{item.postedDate}</a>
                  </li>
                </ul>
                <p>{item.postDescriptions.slice(0, 65)}</p>
              </div>
             

              <div className="fp_footer">
                <ul className="fp_meta float-start mb0">
                  <li className="list-inline-item">
                    <a href="#">
                      <img src={item.posterAvatar} alt={item.posterAvatar} />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">{item.posterName}</a>
                  </li>
                </ul>
                <a className="fp_pdate float-end text-thm" href="#">
                  Read More <span className="flaticon-next"></span>
                </a>
              </div>
              
            </div>
          
          </div>
        </div>
      ))} */}


    {blogs?.map((item) => (
        <div className="col-lg-4 col-md-6" key={item.id}>
          <div className="for_blog feat_property">
            <div className="thumb">
              <Link href={`/blogs/${item.id}`}>
                <a>
                  <img className="img-whp  w-[365px]  h-[450px] object-cover" src={item.image[0]?.url} alt={'blog'} />
                </a>
              </Link>
              <div className="blog_tag">{item?.country}</div>
            </div>
           

            <div className="details">
              <div className="tc_content">
                <h4 className="mb15">
                  <Link href={`/blogs/${item.id}`}>
                    <a>    {title(item.title)}</a>
                  </Link>
                </h4>
                <ul className="bpg_meta mb10">
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="flaticon-calendar"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">   {item.date}</a>
                  </li>
                </ul>
                <p> { parseHtml(item?.description)}...</p>
              </div>
             

              {/* <div className="fp_footer">
                <ul className="fp_meta float-start mb0">
                  <li className="list-inline-item">
                    <a href="#">
                      <img src={item.posterAvatar} alt={item.posterAvatar} />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">{item.posterName}</a>
                  </li>
                </ul>
                <a className="fp_pdate float-end text-thm" href="#">
                  Read More <span className="flaticon-next"></span>
                </a>
              </div> */}
              
            </div>
          
          </div>
        </div>
      ))} 











    </>
  );
};

export default Blog;

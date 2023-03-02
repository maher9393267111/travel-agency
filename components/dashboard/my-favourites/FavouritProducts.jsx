import Link from "next/link";
import {db} from '../../../firebase/index'
import Loader from "../../login/loader";
import { useState , useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import {
  getDocs,
  collection,
  doc,
  deleteDoc,
  addDoc,
} from "firebase/firestore";
import { StateContext } from "../../../context/index";

import properties from "../../../data/properties";

const FavouritProducts = ({blogs}) => {
 

  const [loading,setLoading] = useState(false)
  const {  handleDelete } = useContext(StateContext);






  let Blogscontent = blogs?.length > 0 ? blogs?.map((item) => (
    <div className="feat_property list favorite_page" key={item.id}>
      <div className="thumb">
        <img className="img-whp cover" src={item.image[0]?.url} alt="fp1.jpg" />
        <div className="thmb_cntnt">
          <ul className="tag mb0">
            <li className="list-inline-item">
              <a href="#">Blog</a>
            </li>
          </ul>
        </div>
      </div>
      {/* End .thumb */}

      <div className="details">
        <div className="tc_content">
          <h4>
            {" "}
            <Link href={`/blogs/${item.id}`}>
              <a>{item.title}</a>
            </Link>
          </h4>
          {/* <p>
            <span className="flaticon-placeholder"></span> {item.location}
          </p>
          <a className="fp_price text-thm" href="#">
            ${item.price}
            <small>/mo</small>
          </a> */}
        </div>
      </div>
      {/* End details */}

      <ul className="view_edit_delete_list mb0 mt35">
        <li




          className="list-inline-item"
          data-toggle="tooltip"
          data-placement="top"
          title="Delete"
        >
          <a href="#">
            <span
              onClick={() => handleDelete(item)}
            
            className="flaticon-garbage"></span>
          </a>
        </li>
      </ul>
      {/* view_edit_delete_list */}
    </div>
  )) : <div>No BLOGS YET</div>







  return <>

{/* {loading && <Loader/>} */}

  {Blogscontent}
  
  
  </>;
};

export default FavouritProducts;

import Header from "../../home-3/Header";
import SidebarMenu from "../../common/header/dashboard/SidebarMenu";
import MobileMenu from "../../common/header/MobileMenu";
import CreateList from "./CreateList";



import PropertyMediaUploader from "./PropertyMediaUploader";
import { toast } from "react-toastify";

import { StateContext } from "../../../context/index";
import { db , storage } from "../../../firebase";
import {
  getStorage,
  ref as storageRef,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";
import { addDoc, collection } from "firebase/firestore";
import moment from "moment/moment";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import Loader from '../../login/loader'
import { createGlobalStyle } from "styled-components";


const index = () => {


  const { setAlert, user, pageLoading = true } = useContext(StateContext)
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(false)
  const [country , setCountry] = useState('')
  const { replace } = useRouter()
  const handleClick = async () => {
    setLoading(true)
    try {

      console.log('images length: ' + images.length ,images)

      const firebaseImages = [];
      await Promise.all(
        images.map(async (image) => {
          const fbStorageRef = storageRef(storage, `images/${image.name}`);
          const uploadTask = await uploadBytes(fbStorageRef, image);
          const downloadURL = await getDownloadURL(uploadTask.ref);
          firebaseImages.push({url:downloadURL , name:image.name});
          toast.success(`Images successfully`)
        })
      );



 

      if (title !== '' && value !== '' && images.length !==0   && country !== '') {


      await addDoc(collection(db, 'blog'), {
        title,
        description: value,
        image: firebaseImages,
        country: country,
        date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss")
      })
      setTitle("")
      setImages([])
      setValue("")
      setCountry('')

      toast.success("Blog created");
    }

else {

  toast.error('All field must not be Impty')

}



    } catch (error) {
      toast.error({massage:"Blog created"});

    }
    setLoading(false)
  }




//-----------------------------







  return (
    <>

{loading && <Loader />}
      {/* <!-- Main Header Nav --> */}
      <Header />

      {/* <!--  Mobile Menu --> */}
      <MobileMenu />

      <div className="dashboard_sidebar_menu">
        <div
          className="offcanvas offcanvas-dashboard offcanvas-start"
          tabIndex="-1"
          id="DashboardOffcanvasMenu"
          data-bs-scroll="true"
        >
          <SidebarMenu />
        </div>
      </div>
      {/* End sidebar_menu */}

      {/* <!-- Our Dashbord --> */}
      <section className="our-dashbord dashbord bgc-f7 pb50">
        <div className="container-fluid ovh">
          <div className="row">
            <div className="col-lg-12 maxw100flex-992">
              <div className="row">
                {/* Start Dashboard Navigation */}
                <div className="col-lg-12">
                  <div className="dashboard_navigationbar dn db-1024">
                    <div className="dropdown">
                      <button
                        className="dropbtn"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#DashboardOffcanvasMenu"
                        aria-controls="DashboardOffcanvasMenu"
                      >
                        <i className="fa fa-bars pr10"></i> Dashboard Navigation
                      </button>
                    </div>
                  </div>
                </div>
                {/* End Dashboard Navigation */}

                <div className="col-lg-12 mb10">
                  <div className="breadcrumb_content style2">
                    <h2 className="breadcrumb_title">Add New Blog</h2>
                    <p>We are glad to see you again!</p>
                  </div>
                </div>
                {/* End .col */}

                <div className="col-lg-12">
                  <div className="my_dashboard_review">
                    <div className="row">
                      <div className="col-lg-12">
                        <h3 className="mb30">Create Blog</h3>
                      </div>

                      <CreateList
                      {...{ setTitle, title, value, setValue, handleClick, setImages, setAlert, setLoading, images , country,setCountry }}
                      
                      />
                    </div>
                  </div>
                  {/* <div className="my_dashboard_review mt30">
                    <div className="row">
                      <div className="col-lg-12">
                        <h3 className="mb30">Location</h3>
                      </div>

                      <LocationField />
                    </div>
                  </div> */}
                  {/* <div className="my_dashboard_review mt30">
                    <div className="col-lg-12">
                      <h3 className="mb30">Detailed Information</h3>
                    </div>
                    <DetailedInfo />
                  </div> */}
                  <div className="my_dashboard_review mt30">
                    <div className="col-lg-12">
                      <h3 className="mb30">Property media</h3>
                    </div>
                    <PropertyMediaUploader
                    
                    {...{handleClick, setImages, setAlert, setLoading, images }}
                    />
                  </div>
                  {/* <div className="my_dashboard_review mt30">
                    <div className="col-lg-12">
                      <h3 className="mb30">Floor Plans</h3>
                      <button className="btn admore_btn mb30">Add More</button>
                    </div>
                    <FloorPlans />
                  </div> */}
                </div>
                {/* End .col */}
              </div>
              {/* End .row */}

              {/* <div className="row mt50">
                <div className="col-lg-12">
                  <div className="copyright-widget text-center">
                    <p>© 2020 Find House. Made with love.</p>
                  </div>
                </div>
              </div> */}
              {/* End .row */}
            </div>
            {/* End .col */}
          </div>
        </div>
      </section>
    </>
  );
};

export default index;

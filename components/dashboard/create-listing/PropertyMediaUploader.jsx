import { useState } from "react";
import selectedFiles from "../../../utils/selectedFiles";
import uploadFile from '../../..//firebase/addImage'
import { createGlobalStyle } from "styled-components";
import { toast } from "react-toastify";

const PropertyMediaUploader = ({ setImages, setAlert, setLoading, images, handleClick}) => {




  // delete image
  const deleteImage = (name) => {
    const deleted = propertySelectedImgs?.filter((file) => file.name !== name);
    setPropertySelectedImgs(deleted);
  };

  const uploadImage = async () => {
    setLoading(true)
    if (!setPropertySelectedImgs) {
      toast("no images selected yet!");
        return setAlert({ isShow: true, duration: 3000, message: "Select image file to upload.", type: "error" })
        
    }
    
    try {

       propertySelectedImgs.forEach(async(file) => {
        const filePath = crypto.randomUUID() + "-" + file.name

        const url = await uploadFile(file, filePath)
console.log('URLLLL->' , url)
       // setImgsArray(...imgsArray, url)
       // setImages(...images,url)
        setImages((old) => [...old, ...url]);
        toast.success('images uploaded successfully')
        console.log('image uploaded successfully' ,images?.length)
        //setImage(url)
       })

       setLoading(false)
       
      
    } catch (error) {
      toast.error({message:error})
        return setAlert({ isShow: true, duration: 3000, message: error.message, type: "error" })
    }
    
}



const handleImageChange = (e) => {
  setImages(Array.from(e.target.files));
};


const handleRemoveImage = (image) => {
  setImages(images.filter((i) => i !== image));
};






  return (
    <div className="row">

      
      <div className="col-lg-12">
        <ul className="mb-0">
          {
          // propertySelectedImgs.length > 0
          images.length > 0 
            ? images?.map((item, index) => (
                <li key={index} className="list-inline-item">
                  <div className="portfolio_item">
                    <img
                      className="img-fluid cover"
                      src={URL.createObjectURL(item)}
                      alt="fp1.jpg"
                    />
                    <div
                      className="edu_stats_list"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Delete"
                      data-original-title="Delete"
                    >
                      <a onClick={() =>
                      handleRemoveImage(item)
                        //  deleteImage(item.name)
                         }>
                        <span className="flaticon-garbage"></span>
                      </a>
                    </div>
                  </div>
                </li>
              ))
            : undefined}

          {/* End li */}
        </ul>
      </div>
      {/* End .col */}

      <div className="col-lg-12">
        <div className="portfolio_upload">
          <input
            type="file"
          onChange={handleImageChange}
            // onChange={multipleImage}
            multiple
            accept="image/png, image/gif, image/jpeg"
          />
          <div className="icon">
            <span className="flaticon-download"></span>
          </div>
          <p>Drag and drop images here</p>
        </div>
      </div>
      {/* End .col */}

      {/* <div className="col-xl-6">
        <div className="resume_uploader mb30">
          <h3>Attachments</h3>
          <form className="form-inline d-flex flex-wrap wrap">
            <input className="upload-path" />
            <label className="upload">
              <input type="file" />
              Select Attachment
            </label>
          </form>
        </div>
      </div> */}
      {/* End .col */}

      <div className="col-xl-12">
        <div className="my_profile_setting_input">
          {/* <button
          type = "submit"
          onClick={uploadImage}
          
          className="btn btn1 float-start">Upload Images</button> */}



          <button
          type = "submit"
          onClick={handleClick}
          
          className="btn btn2  m-auto block">Create Blog</button>
        </div>
      </div>
      {/* End .col */}
    </div>
  );
};

export default PropertyMediaUploader;

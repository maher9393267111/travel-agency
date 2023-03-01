
import { async } from '@firebase/util'
import dynamic from 'next/dynamic'
import { useState } from 'react'
import 'react-quill/dist/quill.snow.css'
import Loader from '../../login/loader'
const QuillNoSSRWrapper = dynamic(import('react-quill'), {
    ssr: false,
    loading: () => <Loader />,
})


const CreateList = ({setTitle, title, value, setValue, handleClick,  setAlert, setLoading , country , setCountry }) => {






  return (
    <>
      <div className="col-lg-12">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="propertyTitle">Blog Title</label>
          <input
             value={title}
             onChange={(e) => setTitle(e.target.value)}
          
          type="text" className="form-control" id="propertyTitle" />
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-12">
        <div className="my_profile_setting_textarea">

        <div className="w-full h-64">
                <QuillNoSSRWrapper theme="snow" className='h-full pb-[2.5rem] border-[2.5px] text-black font-medium rounded-md border-teal-400 hover:border-blue-600' value={value} onChange={setValue} />
            </div>



          {/* <label htmlFor="propertyDescription">Description</label>
          <textarea
            className="form-control"
            id="propertyDescription"
            rows="7"
          ></textarea> */}
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-10 col-xl-12">
        <div className="my_profile_setting_input ui_kit_select_search form-group">
          <label> Select Country</label>
          <select
             onChange={(e) => setCountry(e.target.value)}
            className="selectpicker form-select"
            data-live-search="true"
            data-width="100%"
          >
            <option  value ='croatia'  data-tokens="type1">Croatia</option>
            <option  value ='sauid'   data-tokens="Type2">Sauid arabistan</option>
            <option value='uzbakistan'  data-tokens="Type3">Uzbakistan</option>
            <option  value ="emirates" data-tokens="Type4">Emirates</option>
            <option value='kirgistan'  data-tokens="Type5">kirgistan</option>
            <option value='serbia'  data-tokens="Type5">Serbia</option>
          </select>
        </div>
      </div>

      {/* {country} */}
      {/* End .col */}

      {/* <div className="col-lg-6 col-xl-6">
        <div className="my_profile_setting_input ui_kit_select_search form-group">
          <label>Status</label>
          <select
            className="selectpicker form-select"
            data-live-search="true"
            data-width="100%"
          >
            <option data-tokens="Status1">Status1</option>
            <option data-tokens="Status2">Status2</option>
            <option data-tokens="Status3">Status3</option>
            <option data-tokens="Status4">Status4</option>
            <option data-tokens="Status5">Status5</option>
          </select>
        </div>
      </div> */}
      {/* End .col */}

      {/* <div className="col-lg-4 col-xl-4">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="formGroupExamplePrice">Price</label>
          <input
            type="number"
            className="form-control"
            id="formGroupExamplePrice"
          />
        </div>
      </div> */}
      {/* End .col */}

      <div className="col-lg-4 col-xl-4">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="formGroupExampleArea">Area</label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleArea"
          />
        </div>
      </div>
      {/* End .col */}

  
      {/* End .col */}

      {/* <div className="col-xl-12">
        <div className="my_profile_setting_input">
          <button className="btn btn1 float-start">Back</button>
          <button className="btn btn2 float-end">Next</button>
        </div>
      </div> */}
    </>
  );
};

export default CreateList;

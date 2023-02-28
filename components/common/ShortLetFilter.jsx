import React, { useState } from "react";
import {
  addKeyword,
  addLocation,
} from "../../features/properties/propertiesSlice";
import { IoIosPeople } from "react-icons/io";

import TailwindDatePicker from "./TailwindDatePicker";
import { MobileDateRangePicker } from "@mui/x-date-pickers-pro";
import MobileTailwindDatePicker from "./MobileTailwindDatePicker";

const ShortLetFilter = ({ className = "" }) => {
  // submit handler
  const submitHandler = () => {
    Router.push("/listing-grid-v1");
  };

  return (
    <div className={`home1-advnc-search ${className}`}>
      <ul className="h1ads_1st_list mb0">
        <li className="list-inline-item">
          <div className="form-group placement">
            <input
              type="text"
              className="form-control shadow-none"
              placeholder="Location"
              onChange={(e) => dispatch(addLocation(e.target.value))}
            />
            <label className="icon-label">
              <span className="flaticon-maps-and-flags"></span>
            </label>
          </div>
        </li>
        {/* End li */}

        <li className="list-inline-item">
          <div className=" block xl:hidden">
            <MobileTailwindDatePicker />
          </div>

          <div className="hidden xl:block">
            <TailwindDatePicker />
          </div>
        </li>

        <li className="list-inline-item">
          <div className="form-group placement">
            <input
              type="text"
              className="form-control numOfGuest shadow-none w-[100%]"
              placeholder="Number of guests"
              onChange={(e) => dispatch(addLocation(e.target.value))}
            />

            <div className="absolute top-4 right-3">
              <IoIosPeople size={20} color="#777777" />
            </div>
          </div>
        </li>

        <li className="list-inline-item">
          <div className="search_option_button">
            <button
              onClick={submitHandler}
              type="submit"
              className="btn btn-thm"
            >
              Search
            </button>
          </div>
        </li>
        {/* End li */}
      </ul>
    </div>
  );
};

export default ShortLetFilter;

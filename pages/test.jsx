import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker
} from "react-simple-maps";
import {useState} from 'react'

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/continents/north-america.json";

const MapChart = () => {

const [selected ,setSelected] = useState('')

  const setLocation = (country) => {


setSelected(country)
console.log('country--->' , selected , country)

  }



  return (
    <>
    <div className="  pb-12  mb-12 mt-12  m-auto h-[200px]  md:h-[400px] w-[80%]  ">
  
    <ComposableMap
    className=' h-[200px] mt-12 md:h-[400px] w-100 border-green-400 border-2'
      projection="geoAlbers"
      projectionConfig={{
        scale: 400
      }}
    >
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              fill="#DDD"
              stroke="#FFF"
            />
          ))
        }
      </Geographies>
      <Marker coordinates={[-101, 53]} fill="#777">
        <text 
        onClick={()=> setLocation('canada')}
        textAnchor="middle" fill="#F53">
          Canada
        </text>
      </Marker>
      <Marker coordinates={[-102, 38]} fill="#777">
        <text textAnchor="middle" fill="#F53">
          USA 
        </text>
      </Marker>
      <Marker coordinates={[-103, 25]} fill="#777">
        <text textAnchor="middle" fill="#F53">
          Mexico
        </text>
      </Marker>
    </ComposableMap>
    </div>
    </>
  );
};

export default MapChart;

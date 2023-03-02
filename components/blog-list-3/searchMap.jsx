import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker
} from "react-simple-maps";
import {useState} from 'react'
import Router from "next/router";

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/continents/north-america.json";

const MapChart = () => {

const [selected ,setSelected] = useState('')


  const setLocation = (country) => {

    Router.push('/blogs?country=' + country)

setSelected(country)
console.log('country--->' , selected , country)

  }



  return (
    <>
    <div className="  pb-12  mb-12 mt-24  m-auto h-[200px]  md:h-[400px] w-[80%]  ">
  
    <ComposableMap
    className=' h-[200px] text-black mt-24 md:h-[400px] bg-red-300 w-100 border-green-400 border-2'
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
        className=" text-black font-bold text cursor-pointer" 
        onClick={()=> setLocation('serbia')}
        textAnchor="middle" fill="#F53">
          serbia
        </text>
      </Marker>
      <Marker coordinates={[-102, 38]} fill="#777">
        <text 
         onClick={()=> setLocation('kirgistan')}
         className=" text-black font-bold text cursor-pointer" 
         textAnchor="middle" fill="#F53">
          kirgistan
        </text>
      </Marker>
      <Marker coordinates={[-103, 30]} fill="#222">
        <text
         onClick={()=> setLocation('croatia')}
         className=" text-black font-bold text cursor-pointer" 
        textAnchor="middle" fill="#F53">
          croatia
        </text>
      </Marker>

      <Marker coordinates={[-101, 22]} fill="#777">
        <text
         onClick={()=> setLocation('emirates')}
         className=" text-black font-bold text cursor-pointer" 
        textAnchor="middle" fill="#F53">
          emirates
        </text>
      </Marker>



      <Marker coordinates={[-101, 26]} fill="#777">
        <text
         onClick={()=> setLocation('saudi')}
         className=" text-black font-bold text cursor-pointer" 
        textAnchor="middle" fill="#F53">
          saudi arabistan
        </text>
      </Marker>



      <Marker coordinates={[-101, 44]} fill="#777">
        <text
        className=" text-black font-bold text cursor-pointer" 
          onClick={()=> setLocation('pakistan')}
        textAnchor="middle" fill="#F53">
          pakistan
        </text>
      </Marker>




      <Marker
      className=''
      coordinates={[-101, 35]} fill="#777">
        <text
         onClick={()=> setLocation('turkey')}
        className=" text-black font-bold text cursor-pointer" textAnchor="middle" fill="#F53">
          Turkey
        </text>
      </Marker>




    </ComposableMap>
    </div>
    </>
  );
};

export default MapChart;

import React from "react";
import ReactDOM from "react-dom";
import { ComposableMap, Geographies, Geography ,Marker } from "react-simple-maps";
import MapData from '../mapFiles/faatures.json'

import dynamic from "next/dynamic";


import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { find, findIndex, remove, sortBy ,orderBy } from "lodash";
import moment from "moment/moment";
import BlogsAll from '../components/blog-list-3/Blog'
import Router from "next/router";
import { useState } from "react";




const markers = [
  {
    markerOffset: -3,
     name: "TURKEY",
    coordinates: [77.630554, 17.422222]
  },
  { markerOffset: 15, name: "turkey", coordinates: [38.630554, 27.422222] },
  { markerOffset: 15, name: "pakistan", coordinates: [38.630554, 74.329376] },
  { markerOffset: 15, name: "kirgizistan", coordinates: [40.166810, 38.089420] },
  { markerOffset: 15, name: "croatia", coordinates: [45.099998, 15.200000] },
  { markerOffset: 15, name: "serbia", coordinates: [44.016521, 21.005859] },

];




 const App22 = ({data}) => {

    const [selected ,setSelected] = useState('')


    const setLocation = (country) => {
  
      Router.push('/test?country=' + country)
  
  setSelected(country)
  console.log('country--->' , selected , country)
  
    }
  

return (



    <div className=" h-auto">
    <ComposableMap
    className=""
    
    >
      <Geographies geography={MapData}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo}
            
            style={{
                default: {
                  fill: "#EEE",
                },
                hover: {
                  fill: "#F53",
                },
                pressed: {
                  fill: "#E42",
                },
              }}
            
            
            />
          ))
        }
      </Geographies>

      {markers.map(({ name, coordinates, markerOffset }) => (
        <Marker key={name} coordinates={coordinates}>
          <g
            fill="none"
            stroke="#FF5533"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            transform="translate(-12, -24)"
          >
            <circle cx="12" cy="10" r="3" />
            <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
          </g>
          <text
              onClick={()=> setLocation({name})}
            textAnchor="middle"
            y={markerOffset}
            style={{ fontFamily: "system-ui", fill: "#5D5A6D"  , color: "#7b5151" , cursor: "pointer" }}
          >
            {name}
          </text>
        </Marker>
      ))}










    </ComposableMap>

{/* -----ALL BLOGS---- */}

<div>
    <BlogsAll data={data}/>
</div>


  </div>

  
     ) };


export default App22




App22.getInitialProps = async (context  ) => {
  
    console.log('Query', context?.query?.country)
    const datais = [];
  
  
    try {
      const querySnapshot = await getDocs(collection(db, 'blog'));
  
      querySnapshot.forEach((doc) => {
        datais.push({
          id: doc.id,
        
          ...doc.data()
        
        });
      });
    } catch (error) {
      console.error(error);
    }
  
   
  
  
  const filterdata=(data)=>{
  
  
    let filterQuery =[]
  
    if ( context?.query?.country) {
     
    const filter = datais.filter(doc => doc?.country === context?.query?.country)
    //console.log('FILTER', filter)
     filterQuery = filter
     //console.log('FILTER', filterQuery)
    return filterQuery
    }
    
    return datais
    
  
  }
  
  
  
    return {
      data:filterdata(datais),
    };
  };
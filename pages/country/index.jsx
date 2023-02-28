import React from 'react'
import { countries } from '../../data/countries';


export default function CountryService({filterData}) {
  return (
    <div>

{filterData?.items?.length}





    </div>
  )
}



CountryService.getInitialProps = async ({
    query
}) => {

  //  console.log('query' , query)
    const countryquery =  query.country;
    const service = query.service;

    

    
const filterData = countries.find(country =>
 
  country?.id === parseInt(countryquery) &&   country.items.filter(item => item.query === service.toString()) )

  console.log('filterda' , filterData)
    return {
      
        filterData
     
    };

};



